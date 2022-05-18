type RepoNodeStargazers = {
    stargazers: {
        totalCount: number
    }
}

export type LanguageEdge = {
    size: number,
    node: {
        color: string,
        name: string
    }
}

export type LanguageNode = {
    languages: {
        totalSize: number,
        edges: LanguageEdge[]
    }
}

export type StatisticsRepoResponse = {
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
            nodes: RepoNodeStargazers[]
        }
    }
}

export type LanguageResponse = {
    viewer: {
        repositories: {
            nodes: LanguageNode[]
        }
    }
}