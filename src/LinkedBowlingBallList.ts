export class LinkedBowlingBallList {
  private first: LinkedBowlingBallListNode | null = null;
  private last: LinkedBowlingBallListNode | null = null;

  push(score: number): IReadableBowlingBall {
    const newNode = new LinkedBowlingBallListNode(score);

    if (!this.first || !this.last) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return this.last;
  }
}

export interface IReadableBowlingBall {
  getNextBall(): IReadableBowlingBall | null;
  getScore(): number;
}

class LinkedBowlingBallListNode implements IReadableBowlingBall {
  private score: number;
  next: LinkedBowlingBallListNode | null = null;

  constructor(score: number) {
    this.score = score;
  }

  getScore(): number {
    return this.score;
  }

  getNextBall(): IReadableBowlingBall | null {
    return this.next;
  }
}
