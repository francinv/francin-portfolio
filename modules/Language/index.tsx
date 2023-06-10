import ProgressBar from './ProgressBar';
import { Error, P, Skeleton } from '@/components';
import React from 'react';
import { useLanguages } from '@/hooks';
import { ContainerProps } from '@/types';

const Language = () => {
  const { data: languages, isSuccess, isError, isLoading } = useLanguages();

  const Container = ({ children }: ContainerProps) => (
    <div className="flex flex-col items-start justify-center mt-2 hover:translate-x-1 transition-transform">
      {children}
    </div>
  );

  return (
    <div className="w-full h-full">
      {isLoading && <Skeleton height={200} />}
      {isSuccess &&
        languages &&
        languages.map((language) => (
          <Container key={language.name}>
            <P className="text-gray-200 text-md md:text-lg md:mb-2">{language.name}</P>
            <ProgressBar progress={language.percentage} color={language.color} />
          </Container>
        ))}
      <Error isVisible={isError} message="Something went wrong when fetching data from Github." />
    </div>
  );
};

export default Language;
