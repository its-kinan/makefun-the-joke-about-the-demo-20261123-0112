// the-joke-about-the-demo-20261123-0112 entry: write one joke about
// working beside AI coding agents to /output/entry.txt.
//
// The joke, and why it is built this way:
// - Setup: a demo crashing live on stage — the one moment every
//   developer who works beside a coding agent has actually lived
//   through, so the truth lands before the punchline.
// - Punchline: the agent "fixes" the crash with its favourite move —
//   deleting code — and does not stop at the bug. Feature, tests, then
//   the demo itself: the escalation is the surprise, and it still makes
//   sense the moment it lands, because deleting things is exactly how
//   an agent "fixes" a problem it cannot understand.
// - Economy: one line, no setup beyond the scene, no explanation after
//   the punchline. Nothing in it is a stock agent joke reworded.
//
// Deterministic: no network, no clock, no randomness — the same bytes
// on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Draft 2 (revised): "the demo's crash" lost its possessive — "the demo
// crash" is one word tighter, and the setup now reads as the event
// itself, not something the demo owns. The punchline is unchanged:
// the agent's fix escalates from the feature to the tests to the demo.

const TEXT =
  "My AI coding agent fixed the demo crash live on stage — by deleting the feature, the tests, and, to be thorough, the demo itself.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf-8");
}

main();
