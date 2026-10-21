// Newest first. Kept to roles relevant to software engineering; full history is on LinkedIn.
export interface Role {
  title: string;
  org: string;
  period: string;
  points: string[];
}

export const experience: Role[] = [
  {
    title: "Signal Operator",
    org: "Ministry of Defence, Singapore (National Service)",
    period: "Aug 2023 – May 2025",
    points: [
      "Managed networks and servers supporting day-to-day operations.",
      "Troubleshot connectivity and system issues and handled ad-hoc requests from users.",
    ],
  },
  {
    title: "Systems Integration Intern · Advanced Analytics",
    org: "Ensign InfoSecurity",
    period: "Apr 2022 – Sep 2022",
    points: [
      "Built a Python web scraper that retrieves and organises MITRE ATT&CK framework data.",
      "Used that data to map Splunk SIEM alerts to their matching attack technique IDs.",
    ],
  },
];
