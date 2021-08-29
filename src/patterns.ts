export const strike = "x";

export const spare = "[-1-9]/";

const makeOpenframes = (): string => {
  const frames: string[] = [];

  for (let totalFrameScore = 0; totalFrameScore < 10; totalFrameScore++) {
    for (let firstScore = 0; firstScore <= totalFrameScore; firstScore++) {
      frames.push(`${firstScore}${totalFrameScore - firstScore}`);
    }
  }

  const patternWithZeros = frames.join("|");

  return patternWithZeros.replace("00", "-").split("0").join("-");
};

export const openframe = makeOpenframes();
