export interface RepositoryResponse {
  viewer: {
    repositories: {
      nodes: RepositoryNode[];
    };
  };
}

interface LanguageNode {
  name: string;
}

interface DeploymentNode {
  latestStatus: {
    state: string;
  };
}

interface OrganizationOwner {
  name: string;
}

interface RepositoryNode {
  description: string | null;
  name: string;
  issues: {
    totalCount: number;
  };
  languages: {
    nodes: LanguageNode[];
  };
  pullRequests: {
    totalCount: number;
  };
  url: string;
  deployments: {
    nodes: DeploymentNode[];
  };
  openGraphImageUrl: string;
  isInOrganization: boolean;
  owner: OrganizationOwner;
}
