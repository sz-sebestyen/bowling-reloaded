import { isOpenframe } from "../frameMatchers";

describe("isOpenframe", () => {
  describe("when the frame is '-'", () => {
    it("should return true", () => {
      // given
      const frame = "-";

      // when
      const result = isOpenframe(frame);

      // then
      expect(result).toBeTruthy();
    });
  });

  describe("when the frame is '18'", () => {
    it("should return true", () => {
      // given
      const frame = "18";

      // when
      const result = isOpenframe(frame);

      // then
      expect(result).toBeTruthy();
    });
  });

  describe("when the frame is '9-'", () => {
    it("should return true", () => {
      // given
      const frame = "9-";

      // when
      const result = isOpenframe(frame);

      // then
      expect(result).toBeTruthy();
    });
  });

  describe("when the frame is '-3'", () => {
    it("should return true", () => {
      // given
      const frame = "-3";

      // when
      const result = isOpenframe(frame);

      // then
      expect(result).toBeTruthy();
    });
  });
});
