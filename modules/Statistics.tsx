import {
  CommitIcon,
  ContributionsIcon,
  FlexContainer,
  H4,
  IssueIcon,
  P,
  PullRequestIcon,
  StarIcon,
} from "@/components"
import { stats } from "@/lib"
import { useDimensions } from "@/hooks"

const Statistics = () => {
  const statistics = stats

  const Container = ({ children }) => (
    <FlexContainer.Row className="mt-2 hover:translate-x-1 transition-transform">
      {children}
    </FlexContainer.Row>
  )

  return (
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
        <P className="text-gray-200 font-black md:font-normal">
          Total contributions:
        </P>
        <H4 className="ml-auto font-light md:font-black">
          {statistics.contributions}
        </H4>
      </Container>
    </>
  )
}

export default Statistics
