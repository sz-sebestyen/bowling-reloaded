import { getSpareScores } from "../frameScores";

describe("getSpareScores", () => {
  describe("when the frame starts with a miss '-/'", () => {
    it("should return [0, 10]", () => {
      // given
      const frame = "-/";
      const expectedScores = [0, 10];

      // when
      const result = getSpareScores(frame);

      // then
      expect(result).toEqual(expectedScores);
    });
  });

  describe("when the frame starts with a number: '7/'", () => {
    it("should return the numbers, their sum = 10: [7, 3]", () => {
      // given
      const frame = "7/";
      const expectedScores = [7, 3];

      // when
      const result = getSpareScores(frame);

      // then
      expect(result).toEqual(expectedScores);
    });
  });
});
