import { calculateScore } from "../calculateScore";

describe("calculateScore", () => {
  describe("when the input is a valid bowling game string", () => {
    describe("x x x x x x x x x x x x", () => {
      it("should return 300", () => {
        // given
        const input = "x x x x x x x x x x x x";
        const expectedScore = 300;

        // when
        const result = calculateScore(input);

        // then
        expect(result).toBe(expectedScore);
      });
    });

    describe("x x x x x x x x x 2/ 1", () => {
      it("should return 263", () => {
        // given
        const input = "x x x x x x x x x 2/ 1";
        const expectedScore = 263;

        // when
        const result = calculateScore(input);

        // then
        expect(result).toBe(expectedScore);
      });
    });

    describe("11 22 33 44 5- - - - - -", () => {
      it("should return 25", () => {
        // given
        const input = "11 22 33 44 5- - - - - -";
        const expectedScore = 25;

        // when
        const result = calculateScore(input);

        // then
        expect(result).toBe(expectedScore);
      });
    });
  });
});
