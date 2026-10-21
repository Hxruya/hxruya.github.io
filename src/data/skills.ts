// Levels drive the badge colour.
export type Level = "Daily use" | "Comfortable" | "Learning";

export interface SkillGroup {
  title: string;
  description: string;
  skills: { name: string; level: Level }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "What I write code in.",
    skills: [
      { name: "Python", level: "Comfortable" },
      { name: "Java", level: "Comfortable" },
      { name: "C", level: "Comfortable" },
      { name: "Rust", level: "Learning" },
    ],
  },
  {
    title: "Web",
    description: "Building for the browser.",
    skills: [
      { name: "HTML", level: "Comfortable" },
      { name: "CSS", level: "Comfortable" },
      { name: "JavaScript", level: "Comfortable" },
    ],
  },
  {
    title: "AI-assisted development",
    description: "Working alongside coding agents.",
    skills: [
      { name: "Claude Code", level: "Comfortable" },
      { name: "Codex", level: "Comfortable" },
      { name: "Agent skills & loops", level: "Learning" },
    ],
  },
  {
    title: "Back end & data",
    description: "Servers, databases and the plumbing in between.",
    skills: [
      { name: "PHP", level: "Comfortable" },
      { name: "MySQL", level: "Comfortable" },
      { name: "Apache", level: "Comfortable" },
      { name: "MariaDB", level: "Learning" },
      { name: "MongoDB", level: "Learning" },
    ],
  },
  {
    title: "Tools & practices",
    description: "How I ship.",
    skills: [
      { name: "Git & GitHub", level: "Comfortable" },
      { name: "Linux", level: "Comfortable" },
    ],
  },
];
