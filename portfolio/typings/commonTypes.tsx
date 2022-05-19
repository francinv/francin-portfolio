
export type RepositoryType = {
    description: string;
    name: string;
    issues: {
        totalCount: number;
    };
    languages: {
        nodes: [
            {
                name: string;
                color: string;
            }
        ]
    };
    pullRequests: {
        totalCount: number;
    };
    url: string;
    deployments: {
        nodes: [
            {
                latestStatus: {
                    state: string;
                }
            }
        ]
    };
    openGraphImageUrl: string;
}

export type ResponseType = {
    data: {
        viewer: {
            login: string;
            repositories: {
                nodes: RepositoryType[];
            }
        }
    }
}

export type LanguageType = {
  name: string;
  color: string;
  size: number;
}