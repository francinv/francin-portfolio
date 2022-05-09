import { fetchCommits } from "../services/fetchData"

export const getGithubCommits = async (owner: string, year: number) => {
    const data = await fetchCommits("francinv", 2022);
    let commitCount = 0;
    data.contributions.forEach(contribution => {
        contribution.days.forEach(day => {
            commitCount += day.count;
        }
        )
    }
    )
    return commitCount;
}
