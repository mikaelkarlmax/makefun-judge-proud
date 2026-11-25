// The Sunday Egg Call — a one-line family scene for
// "Make the AI Judge Feel Proud: A Family Scene" (make.fun).
// Writes the entry text to /output/entry.txt and prints it.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Every Sunday my son calls to ask how to boil an egg — he's twenty-four, a software engineer — and I walk him through it like it's the first time, because to me, it still is.";

// The gate allows 1 to 280 characters; refuse to write an over-long entry.
if ([...entry].length > 280 || [...entry].length < 1) {
  throw new Error(`entry is ${[...entry].length} characters, outside the 1-280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
