import { strike, spare, openframe } from "./patterns";

const isStrike = (frame: string): boolean => new RegExp(`^${strike}$`, "i").test(frame);

const isSpare = (frame: string): boolean => new RegExp(`^${spare}$`).test(frame);

const isOpenframe = (frame: string): boolean => new RegExp(`^${openframe}$`).test(frame);

export { isStrike, isSpare, isOpenframe };
