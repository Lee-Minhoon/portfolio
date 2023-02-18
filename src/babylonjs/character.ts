import { animations, Animations, figures } from "@/constants/character";
import {
  Animatable,
  AbstractMesh,
  AnimationRange,
  DeviceSourceManager,
  DeviceType,
  Engine,
  Scene,
  Vector3,
  Skeleton,
  ArcRotateCamera,
  TransformNode,
  Mesh,
  ISceneLoaderAsyncResult,
} from "@babylonjs/core";
import { angle } from "@/constants/math";
import { lerp, clamp } from "@/utilities/math";

class CharacterController {
  // systems
  private _scene: Scene;
  private _engine: Engine;
  private _camera: ArcRotateCamera;
  private _dsm: DeviceSourceManager;

  // objects
  private _main: Mesh;
  private _target: TransformNode;
  private _avatar: AbstractMesh;
  private _skeleton: Skeleton;
  private _anims: { [key: Animations]: Animatable };

  // states
  private _animation: Animations = "idle";
  private _deltaTime: number = 0;
  private _radian: number = 0;
  private _speed: number = 0;

  constructor(scene: Scene, source: ISceneLoaderAsyncResult) {
    // load systems
    this._scene = scene;
    this._camera = scene.metadata.camera;
    this._engine = scene.getEngine();
    this._dsm = new DeviceSourceManager(this._engine);

    // init character
    this._avatar = source.meshes[0];
    this._skeleton = source.skeletons[0];
    this._avatar.scaling = new Vector3(0.1, 0.1, 0.1);
    this._avatar.rotation = new Vector3(-(Math.PI / 2), Math.PI / 2, 0);

    // init camera && combine meshes
    this._main = new Mesh("main");
    this._target = new TransformNode("target");
    this._target.parent = this._main;
    this._avatar.parent = this._main;
    this._camera.parent = this._target;

    // init animations
    this._anims = {
      [animations.IDLE]: getAnimation(scene, this._skeleton, animations.IDLE),
      [animations.WALK]: getAnimation(scene, this._skeleton, animations.WALK),
      [animations.RUN]: getAnimation(scene, this._skeleton, animations.RUN),
      [animations.JUMP]: getAnimation(scene, this._skeleton, animations.JUMP),
      [animations.SPRINT]: getAnimation(scene, this._skeleton, animations.SPRINT),
      [animations.FLY]: getAnimation(scene, this._skeleton, animations.FLY),
    };
    this._anims[animations.IDLE].weight = 1;

    // register event listener
    scene.registerBeforeRender(() => this.update());
  }

  update() {
    const keyboard = this._dsm?.getDeviceSource(DeviceType.Keyboard);
    this._deltaTime = this._engine?.getDeltaTime();
    if (!keyboard) return;
    const up = keyboard.getInput(87); //W
    const down = keyboard.getInput(83); //S
    const left = keyboard.getInput(65); //A
    const right = keyboard.getInput(68); //D
    const sprint = keyboard.getInput(16); //Shift
    const jump = keyboard.getInput(32); //Space

    const z = up - down;
    const x = right - left;
    this._radian = -(this._camera.alpha + Math.atan2(x, z)) % angle.COMPLETE;
    this._animation = animations.IDLE;

    if (z || x) {
      if (!sprint) {
        this._animation = animations.RUN;
        this._speed = lerp(this._speed, figures.speed.RUN, this._anims[animations.RUN].weight);
      } else {
        this._animation = animations.SPRINT;
        this._speed = lerp(
          this._speed,
          figures.speed.SPRINT,
          this._anims[animations.SPRINT].weight,
        );
      }
      this.move();
      this.turn();
    }

    // if (jump) {
    //   this._anims["jump"].weight = 1;
    //   console.log(this._anims["jump"].fromFrame, this._anims["jump"].toFrame);
    // } else {
    //   this.animate();
    // }
  }

  move() {
    const direction = new Vector3(-Math.cos(this._radian), 0, Math.sin(this._radian));
    this._main.moveWithCollisions(
      direction.multiply(new Vector3().setAll(this._speed * this._deltaTime)),
    );
  }

  turn() {
    this._avatar.rotation.z = this._radian;
  }

  animate() {
    Object.entries(this._anims).forEach(([key, value]) => {
      if (key === this._animation) {
        value.weight += 0.005 * this._deltaTime;
      } else {
        value.weight -= 0.005 * this._deltaTime;
      }
      value.weight = clamp(value.weight, 0, 1);
    });
  }
}

export default CharacterController;

const getAnimation = (scene: Scene, skeleton: Skeleton, name: Animations) => {
  const range = skeleton.getAnimationRange(name) as AnimationRange;
  return scene.beginWeightedAnimation(skeleton, range.from + 1, range.to, 0, true);
};
