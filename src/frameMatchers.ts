import { strike, spare } from "./patterns";

const isStrike = (frame: string): boolean => new RegExp(`^${strike}$`, "i").test(frame);

const isSpare = (frame: string): boolean => new RegExp(`^${spare}$`).test(frame);

export { isStrike, isSpare };
