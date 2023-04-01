import { Animation, Animations } from "@/constants/character";
import {
  Animatable,
  AbstractMesh,
  AnimationRange,
  Engine,
  Vector3,
  Skeleton,
  ArcRotateCamera,
  Mesh,
  ISceneLoaderAsyncResult,
  Scalar,
  Quaternion,
  Ray,
  PhysicsImpostor,
} from "@babylonjs/core";
import { angle } from "@/constants/math";
import InputController from "./inputController";
import { Scene } from "./scene";

class CharacterController {
  // systems
  private _scene: Scene;
  private _engine: Engine;
  private _input: InputController;
  private _camera: ArcRotateCamera;

  // objects
  private _main: Mesh;
  private _avatar: Mesh;
  private _anims: { [key in Animations]: Animatable };

  // states
  private _animation: Animations = Animation.IDLE;
  private _moving = false;
  private _grounded = true;
  private _deltaTime = 0;
  private _angle = 0;
  private _speed = 0;
  private _direction = new Vector3();
  private _gravity = 0;

  // constants
  private static readonly WALK_SPEED = 0.02;
  private static readonly RUN_SPEED = 0.06;
  private static readonly SPRINT_SPEED = 0.1;
  private static readonly JUMP_POWER = 2;
  private static readonly GRAVITY = -2.8;

  constructor(scene: Scene, source: ISceneLoaderAsyncResult, inputController: InputController) {
    // load systems
    this._scene = scene;
    this._camera = scene.metadata.camera;
    this._engine = scene.getEngine();
    this._input = inputController;

    // init character
    this._avatar = new Mesh("avatar");
    source.meshes.forEach((mesh) => {
      mesh.scaling = new Vector3(0.1, 0.1, 0.1);
      mesh.rotation = new Vector3(-(Math.PI / 2), Math.PI / 2, 0);
      mesh.parent = this._avatar;
    });

    // init camera && combine meshes
    this._main = new Mesh("main");
    this._camera.parent = this._main;
    this._avatar.parent = this._main;

    // init animations
    const skeleton = source.skeletons[0];
    this._anims = Object.entries(Animation).reduce((prev, [_, value]) => {
      const { from, to } = skeleton.getAnimationRange(value) as AnimationRange;
      return {
        ...prev,
        [value]: scene.beginWeightedAnimation(skeleton, from + 1, to, 0, true),
      };
    }, {} as { [key in Animations]: Animatable });
    this._anims[Animation.IDLE].weight = 1;

    // register event listener
    scene.registerBeforeRender(() => {
      this._update();
      this._turn();
      this._updateGroundDetection();
      this._animate();
    });
  }

  private _update() {
    this._deltaTime = this._engine.getDeltaTime();
    this._moving = this._input.isMove();
    this._grounded = this._isGrounded();

    const { horizontal, vertical, sprinting, jumping } = this._input;

    // init anim and direction
    this._animation = Animation.IDLE;
    this._direction = Vector3.Zero();

    // has a movement
    if (this._moving) {
      this._angle = (Math.atan2(horizontal, vertical) - this._camera.alpha) % angle.COMPLETE;

      if (!sprinting) {
        // running
        this._animation = Animation.RUN;
        this._speed = Scalar.Lerp(
          this._speed,
          CharacterController.RUN_SPEED,
          this._anims[Animation.RUN].weight,
        );
      } else {
        // sprinting
        this._animation = Animation.SPRINT;
        this._speed = Scalar.Lerp(
          this._speed,
          CharacterController.SPRINT_SPEED,
          this._anims[Animation.SPRINT].weight,
        );
      }

      // add speed to direction
      this._direction = new Vector3(-Math.cos(this._angle), 0, Math.sin(this._angle)).scaleInPlace(
        this._speed * this._deltaTime,
      );
    }

    // if (!this._grounded) {
    //   this._animation = Animation.JUMP;
    // }

    // is jumping
    if (jumping && this._grounded) {
      this._gravity = CharacterController.JUMP_POWER;
    }
  }

  private _turn() {
    if (!this._moving) return;

    this._avatar.rotationQuaternion = Quaternion.Slerp(
      this._avatar.rotationQuaternion ??
        Quaternion.FromEulerAngles(
          this._avatar.rotation.x,
          this._avatar.rotation.y,
          this._avatar.rotation.z,
        ),
      Quaternion.FromEulerAngles(0, this._angle, 0),
      this._deltaTime / 200,
    );
  }

  private _animate() {
    Object.entries(this._anims).forEach(([key, value]) => {
      if (key === this._animation) {
        value.weight = Scalar.Lerp(value.weight, 1, this._deltaTime / 200);
      } else {
        value.weight = Scalar.Lerp(value.weight, 0, this._deltaTime / 200);
      }
    });
  }

  private _updateGroundDetection(): void {
    if (!this._grounded) {
      this._gravity = Scalar.Lerp(
        this._gravity,
        CharacterController.GRAVITY,
        this._deltaTime / 1000,
      );
    }

    this._main.moveWithCollisions(new Vector3(this._direction.x, this._gravity, this._direction.z));

    if (this._isGrounded()) {
      this._gravity = 0;
    }
  }

  private _isGrounded(): boolean {
    if (this._floorRaycast(0, 0, 2).equals(Vector3.Zero())) {
      return false;
    } else {
      return true;
    }
  }

  private _floorRaycast(offsetx: number, offsetz: number, raycastlen: number): Vector3 {
    let raycastFloorPos = new Vector3(
      this._main.position.x + offsetx,
      this._main.position.y + 0.5,
      this._main.position.z + offsetz,
    );
    let ray = new Ray(raycastFloorPos, Vector3.Up().scale(-1), raycastlen);

    let predicate = function (mesh: AbstractMesh) {
      return mesh.isPickable && mesh.isEnabled();
    };
    let pick = this._scene.pickWithRay(ray, predicate);

    if (pick?.hit) {
      return pick.pickedPoint;
    } else {
      return Vector3.Zero();
    }
  }
}

export default CharacterController;
