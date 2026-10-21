import type { ImageMetadata } from "astro";
import brawlhallaS40 from "@/assets/gaming/brawlhalla-season-40.jpg";
import brawlhallaS41 from "@/assets/gaming/brawlhalla-season-41.jpg";
import tftDoubleUpSet10 from "@/assets/gaming/tft-double-up-set-10.png";

export interface GameAchievement {
  game: string;
  genre: string;
  platform?: string;
  region?: string;
  years?: string;
  peakRank: string;
  /** Game mode the rank was earned in. */
  mode: string;
  /** Peak rating, e.g. Elo. */
  peakRating?: string;
  /** Best leaderboard placement. */
  leaderboard?: string;
  /** Short badge text, e.g. the seasons the rank was held. */
  badge?: string;
  /** One line explaining what the rank means, for readers who don't play the game. */
  rankNote?: string;
  milestones: string[];
  /** Proof screenshots, imported from src/assets/gaming/. */
  screenshots?: { src: ImageMetadata; alt: string }[];
  featured?: boolean;
}

export const gaming: GameAchievement[] = [
  {
    game: "Teamfight Tactics",
    genre: "Auto battler",
    platform: "PC",
    region: "SEA",
    years: "Set 3 – present",
    peakRank: "Challenger",
    mode: "Double Up",
    rankNote: "Challenger is the highest tier in TFT, and Rank 1 is the top spot on the entire SEA Double Up ladder.",
    leaderboard: "#1 SEA",
    badge: "Masters in 5+ sets",
    milestones: [
      "Reached Rank 1 Challenger in Double Up on the SEA server in Set 10 (Remix Rumble)",
      "Reached Masters in ranked across more than five sets",
    ],
    screenshots: [
      { src: tftDoubleUpSet10, alt: "Set 10 Double Up Challenger ladder on SEA, at 536 LP" },
    ],
    featured: true,
  },
  {
    game: "Brawlhalla",
    genre: "Platform fighter",
    platform: "PC",
    region: "SEA",
    years: "2024 – present",
    peakRank: "Valhallan",
    mode: "Ranked 2v2 (solo queue)",
    rankNote: "Valhallan is Brawlhalla's highest tier, held only by the top-rated players in each region.",
    peakRating: "~2,040 Elo",
    leaderboard: "#46 SEA",
    badge: "Seasons 40 & 41",
    milestones: [
      "Reached Valhallan, the highest ranked tier, in 2v2 in Season 40, peaking at #46 in SEA",
      "Reached Valhallan again in Season 41, at 2,040 Elo",
      "Got there within two years of first picking up the game",
    ],
    screenshots: [
      { src: brawlhallaS40, alt: "Season 40: Valhallan, 2,000 Elo, SEA rank 46 in ranked 2v2 solo queue" },
      { src: brawlhallaS41, alt: "Season 41: Valhallan, 2,040 Elo, SEA rank 47 in ranked 2v2 solo queue" },
    ],
  },
  {
    game: "Valorant",
    genre: "Tactical shooter",
    platform: "PC",
    region: "SEA",
    years: "2020 – present",
    peakRank: "Immortal 2",
    mode: "Competitive",
    rankNote: "Immortal is Valorant's second-highest tier, just below Radiant, and is reached by roughly the top 1 to 2% of ranked players.",
    peakRating: "107 RR",
    badge: "Episodes 3–7",
    milestones: [
      "Peaked at Immortal 2 (107 RR) in Episode 3 Act 2",
      "Reached Immortal in every episode from Episode 3 through Episode 7",
    ],
  },
];
