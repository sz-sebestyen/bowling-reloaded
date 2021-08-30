import { getValidatedBowlingGame } from "./getValidatedBowlingGame";
import { IReadableBowlingBall, LinkedBowlingBallList } from "./LinkedBowlingBallList";
import { isSpare, isOpenframe } from "./frameMatchers";
import { Openframe, Spare, Strike } from "./Frames";
import { getOpenframeScores, getSpareScores, getExtraBallScore } from "./frameScores";
import { FrameFactory } from "./FrameFactory";

const frameFactory = new FrameFactory();

frameFactory.register("openframe", Openframe);
frameFactory.register("spare", Spare);
frameFactory.register("strike", Strike);

export const calculateScore = (input: string): number => {
  const game = getValidatedBowlingGame(input);

  const ballList = new LinkedBowlingBallList();

  const getLinkedBalls = (scores: number[]): IReadableBowlingBall[] => scores.map((score) => ballList.push(score));

  const frames = game.frames.map((frame) => {
    if (isOpenframe(frame)) {
      return frameFactory.makeFrame("openframe", getLinkedBalls(getOpenframeScores(frame)));
    } else if (isSpare(frame)) {
      return frameFactory.makeFrame("spare", getLinkedBalls(getSpareScores(frame)));
    } else {
      return frameFactory.makeFrame("strike", getLinkedBalls([10]));
    }
  });

  game.extraBalls.forEach((extraBall) => {
    ballList.push(getExtraBallScore(extraBall));
  });

  return frames.reduce((sum, currentFrame) => sum + currentFrame.getScore(), 0);
};
