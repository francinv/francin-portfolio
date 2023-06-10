'use client';

import { DataResponse, GeneralStatistics, StatisticsResponse } from '@/types';
import { useEffect, useState } from 'react';

const useStatistics = (): DataResponse<GeneralStatistics> => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState<GeneralStatistics>();

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const res = await fetch('/api/github/stats/');
      const responseData: StatisticsResponse = await res.json();
      const statistics: GeneralStatistics = {
        issues: responseData.viewer.issues.totalCount,
        prs: responseData.viewer.pullRequests.totalCount,
        commits: responseData.viewer.contributionsCollection.totalCommitContributions,
        contributions:
          responseData.viewer.contributionsCollection.contributionCalendar.totalContributions,
        stars: responseData.viewer.repositories.nodes.reduce(
          (acc, repo) => acc + repo.stargazerCount,
          0,
        ),
      };

      setData(statistics);
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

export default useStatistics;
