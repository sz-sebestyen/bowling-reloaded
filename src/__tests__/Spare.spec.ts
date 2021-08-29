import { Spare } from "../Frames";

describe("Spare.getScore()", () => {
  it("should return the sum of three balls scores", () => {
    // given
    const firstBallScore = 1;
    const secondBallScore = 9;

    const spareBall2 = {
      getScore() {
        return secondBallScore;
      },
      getNextBall() {
        return this;
      },
    };

    const spareBall1 = {
      getScore() {
        return firstBallScore;
      },
      getNextBall() {
        return spareBall2;
      },
    };

    const spare = new Spare([spareBall1, spareBall2]);

    const expectedScore = firstBallScore + secondBallScore * 2;

    // when
    const result = spare.getScore();

    // then
    expect(result).toBe(expectedScore);
  });
});
