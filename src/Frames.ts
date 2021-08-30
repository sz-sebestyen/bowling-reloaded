import { IReadableBowlingBall } from "./LinkedBowlingBallList";

export class Frame {
  protected balls: IReadableBowlingBall[];

  constructor(balls: IReadableBowlingBall[]) {
    this.balls = balls;
  }

  getScore(): number {
    return this.getOwnScore();
  }

  protected getOwnScore(): number {
    return this.balls.reduce((sum, currentBall) => currentBall.getScore() + sum, 0);
  }
}

export class ExtraFrame extends Frame {
  getScore(): number {
    return 0;
  }
}

abstract class FrameWithExtraScore extends Frame {
  protected getExtraScore(extraBallCount: number): number {
    let score = 0;

    let nextExtraBall = this.balls[this.balls.length - 1].getNextBall();

    for (let index = 0; index < extraBallCount; index++) {
      if (nextExtraBall) {
        score += nextExtraBall.getScore();
        nextExtraBall = nextExtraBall.getNextBall();
      }
    }

    return score;
  }
}

export class Strike extends FrameWithExtraScore {
  getScore(): number {
    return this.getOwnScore() + this.getExtraScore(2);
  }
}

export class Spare extends FrameWithExtraScore {
  getScore(): number {
    return this.getOwnScore() + this.getExtraScore(1);
  }
}

export const Openframe = Frame;
