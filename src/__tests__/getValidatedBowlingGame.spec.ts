import { getValidatedBowlingGame } from "../getValidatedBowlingGame";
import { BowlingGame } from "../types";

describe("getValidatedBowlingGame", () => {
  describe("when the input is a bowling game ending on a strike", () => {
    it("should return a BowlingGame with two extra balls", () => {
      // given
      const input = "x x x x x x x x x x 2 3";

      const expected: BowlingGame = {
        frames: Array.from({ length: 10 }, () => "x"),
        extraBalls: ["2", "3"],
      };

      // when
      const result: BowlingGame = getValidatedBowlingGame(input);

      // then
      expect(result).toEqual(expected);
    });
  });

  describe("when the input is a bowling game ending on an openframe", () => {
    it("should return a BowlingGame with no extra balls", () => {
      // given
      const input = "x x x x x x x x x 12";

      const expected: BowlingGame = {
        frames: [...Array.from({ length: 9 }, () => "x"), "12"],
        extraBalls: [],
      };

      // when
      const result: BowlingGame = getValidatedBowlingGame(input);

      // then
      expect(result).toEqual(expected);
    });
  });

  describe("when the input is a bowling game ending on a spare", () => {
    it("should return a BowlingGame with one extra ball", () => {
      // given
      const input = "x x x x x x x x x 1/ 5";

      const expected: BowlingGame = {
        frames: [...Array.from({ length: 9 }, () => "x"), "1/"],
        extraBalls: ["5"],
      };

      // when
      const result: BowlingGame = getValidatedBowlingGame(input);

      // then
      expect(result).toEqual(expected);
    });
  });

  describe("when the input is an invalid bowling game", () => {
    it("should return a BowlingGame empty frames and extraBalls", () => {
      // given
      const inputs = [
        "x x x x x x x x x 1/",
        "x x x x x x x x x 1/ x x",
        "x x x x x x x x x - 1 2",
        "x x x x x x x x x x",
        "x x x x x x x x x x x",
      ];

      const expected: BowlingGame[] = Array.from(inputs, () => ({
        frames: [],
        extraBalls: [],
      }));

      // when
      const results: BowlingGame[] = inputs.map((input) => getValidatedBowlingGame(input));

      // then
      expect(results).toEqual(expected);
    });
  });
});
