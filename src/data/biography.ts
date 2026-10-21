// TODO(Zaccheus): replace placeholders with your own story. Oldest first.
export interface Milestone {
  period: string;
  title: string;
  detail: string;
}

export const biography = {
  intro: "PLACEHOLDER — a short introduction.",
  origin: "PLACEHOLDER — how you got into software engineering.",
  milestones: [
    { period: "PLACEHOLDER — dates", title: "PLACEHOLDER — milestone", detail: "PLACEHOLDER — details." },
    { period: "PLACEHOLDER — dates", title: "PLACEHOLDER — milestone", detail: "PLACEHOLDER — details." },
    { period: "PLACEHOLDER — dates", title: "PLACEHOLDER — milestone", detail: "PLACEHOLDER — details." },
  ] satisfies Milestone[],
};
