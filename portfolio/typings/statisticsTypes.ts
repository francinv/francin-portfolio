export type statistics = {
    stars: number;
    commits: number;
    prs: number;
    issues: number;
    contributions: number;
}

export type repoNodeStars = {
    stargazers: {
        totalCount: number
    }
}