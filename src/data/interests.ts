// TODO(Zaccheus): replace placeholders with your real interests.
export interface Interest {
  name: string;
  summary: string;
}

export interface Current {
  label: string;
  value: string;
}

export const interestsIntro = "PLACEHOLDER — one line on what you like to do outside of work.";

export const interests: Interest[] = [
  { name: "Gaming", summary: "PLACEHOLDER — the games you play and what you enjoy about them." },
  { name: "PLACEHOLDER — interest 2", summary: "PLACEHOLDER — a sentence or two on why you enjoy this." },
  { name: "PLACEHOLDER — interest 3", summary: "PLACEHOLDER — a sentence or two on why you enjoy this." },
  { name: "PLACEHOLDER — interest 4", summary: "PLACEHOLDER — a sentence or two on why you enjoy this." },
];

export const currently: Current[] = [
  { label: "Watching", value: "PLACEHOLDER — show" },
  { label: "Playing", value: "PLACEHOLDER — game" },
  { label: "Reading", value: "PLACEHOLDER — book" },
  { label: "Learning", value: "PLACEHOLDER — technology or skill" },
];
