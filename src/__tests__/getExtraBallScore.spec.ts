import { getExtraBallScore } from "../frameScores";

describe("getExtraBallScore", () => {
  describe("when the ball is a miss '-'", () => {
    it("should return [0, 10]", () => {
      // given
      const ball = "-";
      const expectedScore = 0;

      // when
      const result = getExtraBallScore(ball);

      // then
      expect(result).toEqual(expectedScore);
    });
  });

  describe("when the ball is a number: '9'", () => {
    it("should return the number", () => {
      // given
      const ball = "9";
      const expectedScore = 9;

      // when
      const result = getExtraBallScore(ball);

      // then
      expect(result).toEqual(expectedScore);
    });
  });

  describe("when the ball is a strike: 'x'", () => {
    it("should return 10", () => {
      // given
      const ball = "x";
      const expectedScore = 10;

      // when
      const result = getExtraBallScore(ball);

      // then
      expect(result).toEqual(expectedScore);
    });
  });
});
