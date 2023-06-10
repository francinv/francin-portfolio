'use client';

import { DataResponse, Project, RepositoryResponse } from '@/types';
import { useEffect, useState } from 'react';

const useRepos = (): DataResponse<Project[]> => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState<Project[]>();

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    try {
      const res = await fetch('/api/github/repo');
      const responseData: RepositoryResponse = await res.json();

      const projects: Project[] = responseData.viewer.repositories.nodes.map((repo) => ({
        name: repo.name,
        projectUrl: repo.url,
        languages: repo.languages.nodes.map((language) => language.name),
        deploymentState:
          repo.deployments.nodes.length > 0
            ? repo.deployments.nodes[0].latestStatus.state
            : 'Not deployed',
        issuesTotalCount: repo.issues.totalCount,
        imageUrl: repo.openGraphImageUrl,
        description: repo.description ?? 'No description.',
        pullRequestsTotalCount: repo.pullRequests.totalCount,
      }));

      setData(projects);

      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    void fetchData();
  }, []);

  return {
    isLoading,
    isError,
    isSuccess,
    data,
  };
};

export default useRepos;
