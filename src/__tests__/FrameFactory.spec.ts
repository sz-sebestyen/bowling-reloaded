import { Frame } from "../Frames";
import { FrameFactory } from "../FrameFactory";

describe("FrameFactory", () => {
  describe("when a Frame is registered", () => {
    // given
    class FakeFrame extends Frame {
      getScore(): number {
        return 123;
      }
    }

    class WrongFrame extends Frame {
      getScore(): number {
        return 123;
      }
    }

    const ff = new FrameFactory();

    ff.register("fake", FakeFrame);

    it("should be able to create the registered frame", () => {
      // when
      const result = ff.makeFrame("fake", []);

      // then
      expect(result).toBeInstanceOf(FakeFrame);
      expect(result).not.toBeInstanceOf(WrongFrame);
    });

    it("should throw when a not registered frame is requested", () => {
      // then
      expect(() => ff.makeFrame("wrong", [])).toThrow();
    });
  });
});
