import { getOpenframeScores } from "../frameScores";

describe("getOpenframeScores", () => {
  describe("when the frame is a double miss '-'", () => {
    it("should return [0, 0]", () => {
      // given
      const frame = "-";
      const expectedScores = [0, 0];

      // when
      const result = getOpenframeScores(frame);

      // then
      expect(result).toEqual(expectedScores);
    });
  });

  describe("when the frame is two numbers: '45'", () => {
    it("should return the numbers: [4, 5]", () => {
      // given
      const frame = "45";
      const expectedScores = [4, 5];

      // when
      const result = getOpenframeScores(frame);

      // then
      expect(result).toEqual(expectedScores);
    });
  });

  describe("when the frame mas one missed ball: '4-' or '-3'", () => {
    it("should return the numbers and the misses should worth 0", () => {
      // given
      const frames = ["4-", "-3"];
      const expectedScores = [
        [4, 0],
        [0, 3],
      ];

      // when
      const results = frames.map((frame) => getOpenframeScores(frame));

      // then
      expect(results).toEqual(expectedScores);
    });
  });
});
