import { Frame } from "./Frames";
import { LinkedBowlingBallList } from "./LinkedBowlingBallList";
import { FrameFactory } from "./FrameFactory";

export class FrameList implements Iterable<Frame> {
  private balls = new LinkedBowlingBallList();
  private frameFactory: FrameFactory;
  private frames: Frame[] = [];

  [Symbol.iterator](): Iterator<Frame> {
    let counter = 0;
    return {
      next: () => ({
        done: counter >= this.frames.length,
        value: this.frames[counter++],
      }),
    };
  }

  constructor(frameFactory: FrameFactory) {
    this.frameFactory = frameFactory;
  }

  private makeLinkedBalls = (scores: number[]) => scores.map((score) => this.balls.push(score));

  push(frameType: string, scores: number[]): void {
    const balls = this.makeLinkedBalls(scores);
    const frame = this.frameFactory.makeFrame(frameType, balls);
    this.frames.push(frame);
  }
}
