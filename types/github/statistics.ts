export interface StatisticsResponse {
  viewer: {
    pullRequests: {
      totalCount: number;
    };
    issues: {
      totalCount: number;
    };
    repositories: {
      nodes: StatisticsNode[];
    };
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
      };
      totalCommitContributions: number;
    };
  };
}

interface StatisticsNode {
  stargazerCount: number;
}
