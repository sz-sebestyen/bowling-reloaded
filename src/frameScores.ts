export const getOpenframeScores = (frame: string): number[] => {
  return frame
    .replace(/^-$/, "00")
    .replace("-", "0")
    .split("")
    .map((ball) => parseInt(ball));
};

export const getSpareScores = (frame: string): number[] => {
  const frameWithZero = frame.replace("-", "0");

  const firstBallScore = parseInt(frameWithZero[0]);

  return [firstBallScore, 10 - firstBallScore];
};

export const getExtraBallScore = (ball: string): number => {
  const correctedBall = ball.replace("-", "0").replace(/x/i, "10");
  return parseInt(correctedBall);
};
