import { Openframe } from "../Frames";

describe("Openframe.getScore()", () => {
  it("should return the sum of two balls scores", () => {
    // given
    const firstBallScore = 1;
    const secondBallScore = 9;

    const openframeBall2 = {
      getScore() {
        return secondBallScore;
      },
      getNextBall() {
        return null;
      },
    };

    const openframeBall1 = {
      getScore() {
        return firstBallScore;
      },
      getNextBall() {
        return openframeBall2;
      },
    };

    const openframe = new Openframe([openframeBall1, openframeBall2]);

    const expectedScore = firstBallScore + secondBallScore;

    // when
    const result = openframe.getScore();

    // then
    expect(result).toBe(expectedScore);
  });
});
