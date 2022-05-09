
export type ResponseCommits = {
    username: string,
    year: string,
    min: number,
    max: number,
    median: number,
    p80: number,
    p90: number,
    p99: number,
    contributions: contributionsType[],
}

export type contributionsType = {
    week: number,
    days: daysType[],
}

type daysType = {
    count: number,
}