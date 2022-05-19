export type repositoriesType = {
    description: string;
    name: string;
    issues: {
        totalCount: number;
    };
    languages: {
        nodes: [
            {
                name: string;
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