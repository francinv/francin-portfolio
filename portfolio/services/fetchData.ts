import { ResponseCommits } from "../typings/apiResonse"

export const fetchCommits = async (
    owner: string,
    year: number,
): Promise<ResponseCommits> => {
    const response = await fetch(
        `https://skyline.github.com/${owner}/${year}.json`
    )
    const data = await response.json()
    return data
}
