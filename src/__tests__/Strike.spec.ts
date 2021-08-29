import { Strike } from "../Frames";

describe("Strike.getScore()", () => {
  it("should return the sum of three balls scores", () => {
    // given
    const oneBallScore = 10;

    const strikeBall = {
      getScore() {
        return oneBallScore;
      },
      getNextBall() {
        return this;
      },
    };

    const strike = new Strike([strikeBall]);

    // when
    const result = strike.getScore();

    // then
    expect(result).toBe(oneBallScore * 3);
  });
});
