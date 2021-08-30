import { getValidatedBowlingGame } from "./getValidatedBowlingGame";
import { LinkedBowlingBallList } from "./LinkedBowlingBallList";
import { isStrike, isSpare, isOpenframe } from "./frameMatchers";
import { Frame, Openframe, Spare, Strike } from "./Frames";
import { getOpenframeScores, getSpareScores, getExtraBallScore } from "./frameScores";
import { FrameFactory } from "./FrameFactory";

export const calculateScore = (input: string): number => {
  const game = getValidatedBowlingGame(input);

  const ballList = new LinkedBowlingBallList();

  const frameFactory = new FrameFactory();

  frameFactory.register("openframe", Openframe);
  frameFactory.register("spare", Spare);
  frameFactory.register("strike", Strike);

  const frames: Frame[] = [];

  game.frames.forEach((frame) => {
    if (isOpenframe(frame)) {
      const [firstBallScore, secondBallScore] = getOpenframeScores(frame);

      const balls = [ballList.push(firstBallScore), ballList.push(secondBallScore)];

      frames.push(frameFactory.makeFrame("openframe", balls));
    } else if (isSpare(frame)) {
      const [firstBallScore, secondBallScore] = getSpareScores(frame);

      const balls = [ballList.push(firstBallScore), ballList.push(secondBallScore)];

      frames.push(frameFactory.makeFrame("spare", balls));
    } else if (isStrike(frame)) {
      const balls = [ballList.push(10)];

      frames.push(frameFactory.makeFrame("strike", balls));
    }
  });

  game.extraBalls.forEach((extraBall) => {
    ballList.push(getExtraBallScore(extraBall));
  });

  return frames.reduce((sum, currentFrame) => sum + currentFrame.getScore(), 0);
};
