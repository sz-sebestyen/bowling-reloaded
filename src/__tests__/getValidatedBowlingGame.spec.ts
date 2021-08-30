import { getValidatedBowlingGame } from "../getValidatedBowlingGame";

describe("getValidatedBowlingGame", () => {
  describe("when the input is a bowling game ending on a strike", () => {
    it("should return with two extra balls", () => {
      // given
      const input = "x x x x x x x x x x 2 3";

      const expected = [...Array.from({ length: 10 }, () => "x"), "2 3"];

      // when
      const result = getValidatedBowlingGame(input);

      // then
      expect(result).toEqual(expected);
    });
  });

  describe("when the input is a bowling game ending on an openframe", () => {
    it("should return with no extra balls", () => {
      // given
      const input = "x x x x x x x x x 12";

      const expected = [...Array.from({ length: 9 }, () => "x"), "12"];

      // when
      const result = getValidatedBowlingGame(input);

      // then
      expect(result).toEqual(expected);
    });
  });

  describe("when the input is a bowling game ending on a spare", () => {
    it("should return with one extra ball", () => {
      // given
      const input = "x x x x x x x x x 1/ 5";

      const expected = [...Array.from({ length: 9 }, () => "x"), "1/", "5"];

      // when
      const result = getValidatedBowlingGame(input);

      // then
      expect(result).toEqual(expected);
    });
  });

  describe("when the input is an invalid bowling game", () => {
    it("should return empty frames", () => {
      // given
      const inputs = [
        "x x x x x x x x x 1/",
        "x x x x x x x x x 1/ x x",
        "x x x x x x x x x - 1 2",
        "x x x x x x x x x x",
        "x x x x x x x x x x x",
      ];

      const expected: string[][] = [...Array.from({ length: inputs.length }, (): string[] => [])];

      // when
      const results = inputs.map((input) => getValidatedBowlingGame(input));

      // then
      expect(results).toEqual(expected);
    });
  });
});
