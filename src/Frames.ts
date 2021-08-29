import { IReadableBowlingBall } from "./LinkedBowlingBallList";

abstract class Frame {
  readonly balls: IReadableBowlingBall[];

  constructor(balls: IReadableBowlingBall[]) {
    this.balls = balls;
  }

  abstract getScore(): number;

  getOwnScore(): number {
    return this.balls.reduce((sum, currentBall) => currentBall.getScore() + sum, 0);
  }

  getExtraScore(extraBallCount: number): number {
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

export class Strike extends Frame {
  constructor(balls: IReadableBowlingBall[]) {
    super(balls);
  }

  getScore(): number {
    return this.getOwnScore() + this.getExtraScore(2);
  }
}

export class Spare extends Frame {
  constructor(balls: IReadableBowlingBall[]) {
    super(balls);
  }

  getScore(): number {
    return this.getOwnScore() + this.getExtraScore(1);
  }
}

export class Openframe extends Frame {
  constructor(balls: IReadableBowlingBall[]) {
    super(balls);
  }

  getScore(): number {
    return this.getOwnScore();
  }
}
