import { LinkedBowlingBallList } from "../LinkedBowlingBallList";

describe("LinkedBowlingBallList", () => {
  it("should return a IReadbleBowlingBall", () => {
    const list = new LinkedBowlingBallList();
    const score = 3;
    const readableBall = list.push(score);

    expect(readableBall.getNextBall()).toBeFalsy();
  });

  test("the return ball in the first push should reference the ball pushed after it", () => {
    const list = new LinkedBowlingBallList();
    const ball1 = list.push(1);
    const ball2 = list.push(2);

    expect(ball1.getNextBall()?.getScore()).toBe(ball2.getScore());
  });
});
