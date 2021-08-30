import { getValidatedBowlingGame } from "./getValidatedBowlingGame";
import { FrameList } from "./FrameList";
import { isSpare, isOpenframe, isStrike } from "./frameMatchers";
import { Openframe, Spare, Strike, ExtraFrame } from "./Frames";
import { getOpenframeScores, getSpareScores, getExtraframeScores } from "./frameScores";
import { FrameFactory } from "./FrameFactory";

const frameFactory = new FrameFactory();

frameFactory.register("openframe", Openframe);
frameFactory.register("spare", Spare);
frameFactory.register("strike", Strike);
frameFactory.register("extraframe", ExtraFrame);

export const calculateScore = (input: string): number => {
  const validFrames = getValidatedBowlingGame(input);

  const frames = new FrameList(frameFactory);

  validFrames.forEach((frame) => {
    if (isOpenframe(frame)) {
      frames.push("openframe", getOpenframeScores(frame));
    } else if (isSpare(frame)) {
      frames.push("spare", getSpareScores(frame));
    } else if (isStrike(frame)) {
      frames.push("strike", [10]);
    } else {
      frames.push("extraframe", getExtraframeScores(frame));
    }
  });

  let totalScore = 0;
  for (const currentFrame of frames) {
    totalScore += currentFrame.getScore();
  }
  return totalScore;
};
