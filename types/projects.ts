export interface Project {
  description: string;
  name: string;
  issuesTotalCount: number;
  languages: string[];
  pullRequestsTotalCount: number;
  projectUrl: string;
  deploymentState: string;
  imageUrl: string;
}
