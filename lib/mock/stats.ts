import { GeneralStatistics, LanguageStatistic } from "@/types"

export const languages: LanguageStatistic[] = [
  {
    name: "TypeScript",
    color: "#2b7489",
    percentage: 60.34,
  },
  {
    name: "Java",
    color: "#b07219",
    percentage: 40.29,
  },
  {
    name: "JavaScript",
    color: "#f1e05a",
    percentage: 23.77,
  },
  {
    name: "CSS",
    color: "#563d7c",
    percentage: 15.61,
  },
  {
    name: "HTML",
    color: "#e34c26",
    percentage: 4.33,
  },
]

export const stats: GeneralStatistics = {
  stars: 1,
  commits: 526,
  prs: 199,
  issues: 222,
  contributions: 20,
}
