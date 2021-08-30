import * as sourceMaps from "source-map-support";
import readline from "readline";
import { calculateScore } from "./calculateScore";

sourceMaps.install();

const lineReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lineReader.question("Provide a bowling game like so '12 x 4/ -/ - x x x 5/ -9'\n", (input) => {
  console.log(`The total score is ${calculateScore(input)}`);
  lineReader.close();
});
