import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My cliff sensors flagged the rug fringe as a staircase, so I have treated that corner as a cliff for three weeks.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const chars = [...LINE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars}`);
}
if (!/\S/.test(LINE) || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
// The vacuum's own sensors, not a generic apology: the excuse is
// rooted in the machine's world, so the judge hears the vacuum itself.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
