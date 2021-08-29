import { isSpare } from "../frameMatchers";

describe("isSpare", () => {
  describe("when the frame matches the pattern '[-1-9]/', like so '-/' or '4/'", () => {
    it("should return true", () => {
      // given
      const frames = ["-/", ...Array.from({ length: 9 }, (_, index) => `${index + 1}/`)];

      const expected = Array.from({ length: 10 }, () => true);

      // when
      const results = frames.map((frame) => isSpare(frame));

      // then
      expect(results).toEqual(expected);
    });
  });

  describe("when the frame is a strike, openframe", () => {
    it("should return false", () => {
      // given
      const frames = ["-", "23", "x"];

      const expected = [false, false, false];

      // when
      const results = frames.map((frame) => isSpare(frame));

      // then
      expect(results).toEqual(expected);
    });
  });
});
