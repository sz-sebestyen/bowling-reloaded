import { Frame } from "./Frames";
import { IReadableBowlingBall } from "./LinkedBowlingBallList";

export class FrameFactory {
  private frames: Map<string, typeof Frame> = new Map();

  register(type: string, frame: typeof Frame): void {
    this.frames.set(type, frame);
  }

  makeFrame(type: string, params: IReadableBowlingBall[]): Frame {
    const frameClass = this.frames.get(type);

    if (!frameClass) throw Error(`Frame type "${type}" is not registered!`);

    return new frameClass(params);
  }
}
