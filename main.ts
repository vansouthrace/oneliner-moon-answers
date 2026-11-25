import { mkdirSync, writeFileSync } from "fs";

// The joke: the Moon has spent four billion years granting everyone's
// wishes and listening to their howls and late-night promises, and nobody
// has ever once wished anything back for the Moon itself. It is tired,
// it is wry, and it finally says so out loud — the oldest unpaid
// customer-service worker in the sky, asking for one wish of its own.
const entry = "Four billion years of wishes, howls, and 3 a.m. promises — and not one of you has ever once wished ME anything back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
