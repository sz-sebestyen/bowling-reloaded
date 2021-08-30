import { openframe, strike, spare, extraBall } from "./patterns";

const anyFrame = `(?:${openframe}|${strike}|${spare})`;

const openframeEnd = `${openframe}`;

const spareEnd = `${spare}\\s${extraBall}`;

const strikeEnd = `${strike}\\s${extraBall}\\s${extraBall}`;

const gameEnd = `(?<end>${openframeEnd}|${spareEnd}|${strikeEnd})`;

const first9Frames = `(?<first9frames>${Array.from({ length: 9 }, () => anyFrame).join("\\s")})`;

const game = `^${first9Frames}\\s${gameEnd}$`;

const getValidatedBowlingGame = (input: string): string[] => {
  const match = input.match(game);

  if (!match || !match.groups) return [];

  const [lastFrame, ...extraBalls] = match.groups.end.split(" ");

  const frames = [...match.groups.first9frames.split(" "), lastFrame];

  const extraFrame = extraBalls.join(" ");

  if (extraFrame) frames.push(extraFrame);

  return frames;
};

export { getValidatedBowlingGame };
