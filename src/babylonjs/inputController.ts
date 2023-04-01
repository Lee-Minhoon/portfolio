import { DeviceSource, DeviceSourceManager, DeviceType } from "@babylonjs/core";
import { Scene } from "./scene";

const Keys = {
  UP: 87,
  DOWN: 83,
  LEFT: 65,
  RIGHT: 68,
  SHIFT: 16,
  SPACE: 32,
};

class InputController {
  public horizontal: number = 0;
  public vertical: number = 0;
  public sprinting: boolean = false;
  public jumping: boolean = false;
  private _deviceSourceManager: DeviceSourceManager;

  constructor(scene: Scene) {
    this._deviceSourceManager = new DeviceSourceManager(scene.getEngine());

    scene.registerBeforeRender(() => this._update());
  }

  private _update() {
    const deviceSource = this._deviceSourceManager.getDeviceSource(DeviceType.Keyboard);

    if (!deviceSource) return;

    const up = deviceSource.getInput(87);
    const down = deviceSource.getInput(83);
    const left = deviceSource.getInput(65);
    const right = deviceSource.getInput(68);
    const sprint = deviceSource.getInput(16);
    const jump = deviceSource.getInput(32);

    this.vertical = up - down;
    this.horizontal = right - left;
    this.sprinting = !!sprint;
    this.jumping = !!jump;
  }

  public isMove() {
    return !!this.vertical || !!this.horizontal;
  }
}

export default InputController;
