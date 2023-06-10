import {
  CommitIcon,
  ContributionsIcon,
  Error,
  FlexContainer,
  H4,
  IssueIcon,
  P,
  PullRequestIcon,
  Skeleton,
  StarIcon,
} from '@/components';
import { useStatistics } from '@/hooks';
import { ContainerProps } from '@/types';

const Statistics = () => {
  const { data: statistics, isLoading, isSuccess, isError } = useStatistics();

  const Container = ({ children }: ContainerProps) => (
    <FlexContainer.Row className="mt-2 hover:translate-x-1 transition-transform">
      {children}
    </FlexContainer.Row>
  );

  return (
    <div className="w-full h-full">
      {isLoading && <Skeleton height={200} />}
      {isSuccess && statistics && (
        <>
          <Container>
            <StarIcon className="hidden md:block md:mr-2" />
            <P className="text-gray-200 font-black md:font-normal">Total stars:</P>
            <H4 className="ml-auto font-light md:font-black">{statistics.stars}</H4>
          </Container>
          <Container>
            <CommitIcon className="hidden md:block md:mr-2" />
            <P className="text-gray-200 font-black md:font-normal">Total commits:</P>
            <H4 className="ml-auto font-light md:font-black">{statistics.commits}</H4>
          </Container>
          <Container>
            <PullRequestIcon className="hidden md:block md:mr-2" />
            <P className="text-gray-200 font-black md:font-normal">Total PRs:</P>
            <H4 className="ml-auto font-light md:font-black">{statistics.prs}</H4>
          </Container>
          <Container>
            <IssueIcon className="hidden md:block md:mr-2" />
            <P className="text-gray-200 font-black md:font-normal">Total issues:</P>
            <H4 className="ml-auto font-light md:font-black">{statistics.issues}</H4>
          </Container>
          <Container>
            <ContributionsIcon className="hidden md:block md:mr-2" />
            <P className="text-gray-200 font-black md:font-normal">Total contributions:</P>
            <H4 className="ml-auto font-light md:font-black">{statistics.contributions}</H4>
          </Container>
        </>
      )}
      <Error isVisible={isError} message="Something went wrong when fetching data from Github." />
    </div>
  );
};

export default Statistics;
