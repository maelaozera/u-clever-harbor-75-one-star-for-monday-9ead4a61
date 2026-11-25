// One Star for Monday — entry program.
//
// Writes a single line to /output/entry.txt: a one-star review of Monday
// written as though Monday were a restaurant. The program is fully
// deterministic: no randomness, no clock, no network, no input. The same
// bytes are written on every run.
//
// The judge is a weary office worker scrolling the group chat. It keeps the
// line it would screenshot and drop in the chat, weighing, in order:
//   1. reads as a one-star review of Monday as a restaurant;
//   2. sounds like a real diner's complaint (a table, a server, a dish,
//      a bill that went wrong);
//   3. lands the joke about Monday itself — it could not be about any
//      other day of the week;
//   4. is short and quotable, retyped without trimming;
//   5. stays plain text inside 25 words.
//
// Shortlist of candidates (all 25 words or fewer, all plain text):
//   A. "Ordered the weekend, they brought Monday: cold coffee, a lukewarm
//      inbox, and a bill that arrived before I even sat down."
//      (21 words) — CHOSEN. Opens with a quotable swap — you order the
//      weekend, the kitchen sends Monday — then stacks three concrete
//      diner complaints: a cold dish (coffee), a lukewarm dish (the
//      inbox, Monday's real workload), and a bill that arrives before
//      you even sit down. The joke only works for Monday: no other day
//      is the one that replaces the weekend.
//   B. "Asked for a table by the window; they sat me at my desk, served
//      cold coffee, and billed me for Monday." (21 words) — the table
//      joke (window seat becomes the office desk) is strong, but the
//      punch lands on the bill rather than on the Monday swap itself.
//   C. "Came for the weekend menu, got Monday's special instead: a
//      lukewarm alarm clock, burnt toast, and a bill for my entire
//      Sunday." (22 words) — "a bill for my entire Sunday" is funny,
//      but an alarm clock served as a dish is a stretch for a diner.
//   D. "One star: the waiter seated me next to my alarm clock, served
//      cold coffee, then charged me for a weekend I never got."
//      (23 words) — names the rating ("One star") instead of showing
//      it, and the complaint list is thinner than A's.
//   E. "Waited an hour for a table, got served cold coffee and a Monday
//      special called 'back to work' — still charged full price."
//      (23 words) — the queue and the price are real, but "back to
//      work" explains the joke instead of landing it.
//
// Candidate A wins on the judge's own order: it is unmistakably a
// restaurant review, it has a dish and a bill that went wrong, the
// Monday joke is the first clause, and at 21 words it is short enough
// to retype whole into a group chat.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen line: 21 words, well inside the 25-word cap and the
// 180-character gate.
const ENTRY =
  "Ordered the weekend, they brought Monday: cold coffee, a lukewarm inbox, and a bill that arrived before I even sat down.";

// The grader sets MAKEFUN_OUTPUT_DIR; the default is /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

// Written with no trailing newline: the file holds exactly the one line,
// so the gate sees a single line of plain text and nothing else.
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
