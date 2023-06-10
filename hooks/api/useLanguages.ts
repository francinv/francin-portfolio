'use client';

import { DataResponse, LanguageResponse, LanguageStatistic } from '@/types';
import { useEffect, useState } from 'react';
import { useAppContext } from '@/hooks';

const useLanguages = (): DataResponse<LanguageStatistic[]> => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState<LanguageStatistic[]>();

  const { isSmallScreen } = useAppContext();

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    try {
      const res = await fetch('/api/github/languages');
      const responseData: LanguageResponse = await res.json();

      const languageSizes: { [key: string]: number } = {};

      responseData.viewer.repositories.nodes.forEach((node) => {
        node.languages.edges.forEach((edge) => {
          const { size, node: languageNode } = edge;
          if (languageSizes[languageNode.name]) {
            languageSizes[languageNode.name] += size;
          } else {
            languageSizes[languageNode.name] = size;
          }
        });
      });

      const top5Languages: LanguageStatistic[] = Object.entries(languageSizes)
        .sort((a, b) => b[1] - a[1]) // Sort by size, descending
        .slice(0, 5) // Only take the top 5
        .map(([name, totalSize]) => ({
          // Map to LanguageStatistic
          name,
          color:
            responseData.viewer.repositories.nodes
              .find((node) => node.languages.edges.some((edge) => edge.node.name === name))
              ?.languages.edges.find((edge) => edge.node.name === name)?.node.color || 'unknown',
          percentage: Math.round(
            (totalSize /
              responseData.viewer.repositories.nodes.reduce(
                (total, node) => total + node.languages.totalSize,
                0,
              )) *
              100,
          ),
        }));

      setData(top5Languages);

      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    void fetchData();
  }, []);

  useEffect(() => {
    if (data && data?.length > 4 && isSuccess && isSmallScreen) {
      setData(data.slice(0, 4));
    }
  }, [data, isSuccess, isSmallScreen]);

  return {
    isLoading,
    isError,
    isSuccess,
    data,
  };
};

export default useLanguages;
