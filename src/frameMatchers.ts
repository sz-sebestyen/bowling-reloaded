import { strike } from "./patterns";

const isStrike = (frame: string): boolean => new RegExp(`^${strike}$`, "i").test(frame);

export { isStrike };
