import { languageNode } from "./languageTypes"
import { repositoriesType } from "./repoTypes"
import { repoNodeStars } from "./statisticsTypes"

export type statResponse = {
    viewer: {
        pullRequests: {
            totalCount: number
        },
        contributionsCollection: {
            totalCommitContributions: number,
            restrictedContributionsCount: number
        },
        repositoriesContributedTo: {
            totalCount: number
        },
        issues: {
            totalCount: number
        },
        repositories: {
            totalCount: number
            nodes: repoNodeStars[]
        }
    }
}

export type langResponse = {
    viewer: {
        repositories: {
            nodes: languageNode[]
        }
    }
}

export type repoResponse = {
    viewer: {
        repositories: {
            nodes: repositoriesType[];
        }
    }
}

