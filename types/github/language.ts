export interface LanguageResponse {
  viewer: {
    repositories: {
      nodes: LanguageNode[];
    };
  };
}

interface LanguageNode {
  languages: {
    totalSize: number;
    edges: LanguageEdge[];
  };
}

interface LanguageEdge {
  size: number;
  node: {
    color: string;
    name: string;
  };
}
