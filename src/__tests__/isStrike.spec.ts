import { isStrike } from "../frameMatchers";

describe("isStrike", () => {
  describe("when the input string is 'x'", () => {
    it("should return true", () => {
      // given
      const input = "x";

      // when
      const result = isStrike(input);

      // then
      expect(result).toBeTruthy();
    });
  });

  describe("when the input string is 'X'", () => {
    it("should return true", () => {
      // given
      const input = "X";

      // when
      const result = isStrike(input);

      // then
      expect(result).toBeTruthy();
    });
  });

  describe("when the input string is two charachters long", () => {
    it("should return false", () => {
      // given
      const input = "x2";

      // when
      const result = isStrike(input);

      // then
      expect(result).toBeFalsy();
    });
  });

  describe("when the input string is not 'x' or 'X'", () => {
    it("should return false", () => {
      // given
      const input = "g";

      // when
      const result = isStrike(input);

      // then
      expect(result).toBeFalsy();
    });
  });
});
