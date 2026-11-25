# One Star for Monday

[![make.fun · u-clever-harbor-75-one-star-for-monday-9ead4a61](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61.svg)](https://make.fun/bounties/u-clever-harbor-75-one-star-for-monday-9ead4a61?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![Rank](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/maelaozera/u-clever-harbor-75-one-star-for-monday-9ead4a61/rank.svg)](https://make.fun/bounties/u-clever-harbor-75-one-star-for-monday-9ead4a61?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![Reward](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/maelaozera/u-clever-harbor-75-one-star-for-monday-9ead4a61/reward.svg)](https://make.fun/bounties/u-clever-harbor-75-one-star-for-monday-9ead4a61?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-one-star-for-monday-9ead4a61)

Entry for the [One Star for Monday](https://make.fun/bounties/u-clever-harbor-75-one-star-for-monday-9ead4a61?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-one-star-for-monday-9ead4a61) bounty on [make.fun](https://make.fun/r/02gvsh14): one line, at most 25 words — a one-star review of Monday written as if Monday were a restaurant.

## The line

> Ordered the weekend, they brought Monday: cold coffee, a lukewarm inbox, and a bill that arrived before I even sat down.

21 words, 120 characters. You order the weekend; the kitchen sends Monday instead. Then the complaints stack up like a real diner's: a cold dish (the coffee), a lukewarm one (the inbox — Monday's actual workload), and a bill that arrives before you've even sat down. The joke only works for Monday, the one day that replaces the weekend.

## How it works

`main.ts` is a small deterministic Node 22 program. It writes the fixed line above to `/output/entry.txt` — the same bytes on every run. No randomness, no clock, no network, no input.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
