export interface Project {
  name: string;
  summary: string;
  tech: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "This website",
    summary:
      "My personal site, built with AI-assisted development using Claude Code. Astro, Tailwind CSS and TypeScript, deployed to GitHub Pages with GitHub Actions.",
    tech: ["Astro", "Tailwind CSS", "TypeScript", "Claude Code", "GitHub Actions"],
    repo: "https://github.com/Hxruya/hxruya.github.io",
    live: "https://hxruya.github.io",
    featured: true,
  },
  {
    name: "MITRE ATT&CK scraper for SIEM alerts",
    summary:
      "Built during my internship at Ensign InfoSecurity. A Python web scraper that pulls and organises MITRE ATT&CK framework data, so Splunk SIEM alerts can be matched to the attack techniques behind them.",
    tech: ["Python", "Web scraping", "MITRE ATT&CK", "Splunk"],
  },
  {
    name: "MCSR Ranked Statistics Tracker",
    summary:
      "A university team project: a Flask web app for tracking MCSR Ranked Minecraft speedrun players. Match summaries live in MariaDB, with seeds, timelines and raw API data in MongoDB. It covers player profiles, Elo charts, head-to-head comparisons, seed analysis and a panel that shows the queries behind each page.",
    tech: ["Python", "Flask", "MariaDB", "MongoDB", "pytest"],
    repo: "https://github.com/Hxruya/mcsr_tracker",
  },
  {
    name: "CineBook",
    summary:
      "A five-person university team project: a movie ticket booking system on a LAMP stack. Users browse and search movies, pick seats on an interactive seat map with live availability, check out and get an emailed receipt. Admins manage movies, showtimes, bookings and users from a dashboard with an audit log. I set up the LAMP stack and built the authentication pages, Google login, password reset and user profile page, keeping every page W3C-valid and WCAG-compliant.",
    tech: ["PHP", "MySQL", "Apache", "JavaScript", "Bootstrap", "PHPMailer"],
  },
];
