import { gql } from "@apollo/client";

export const FETCH_PROFILE_PIC = gql`
    {
        viewer {
            avatarUrl
        }
    }
`;

export const FETCH_GITHUB_STATISTICS = gql`
    {
        viewer {
        pullRequests {
            totalCount
        }
        contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
        }
        repositoriesContributedTo(
            contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
        ) {
            totalCount
        }
        issues {
            totalCount
        }
        repositories(first: 100, ownerAffiliations: OWNER) {
            totalCount
            nodes {
            stargazers {
                totalCount
            }
            }
        }
        }
    }
`;

export const FETCH_LANGUAGES = gql`
    {
        viewer {
        repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
            nodes {
            languages(first: 100, orderBy: {field: SIZE, direction: DESC}) {
                totalSize
                edges {
                size
                node {
                    color
                    name
                }
                }
            }
            }
        }
        }
    }
`;

export const FETCH_REPOS = gql`
{
  viewer {
    repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
      nodes {
        description
        name
        issues {
          totalCount
        }
        languages(first: 100) {
          nodes {
            name
          }
        }
        pullRequests {
          totalCount
        }
        url
        deployments(last: 1) {
          nodes {
            latestStatus {
              state
            }
          }
        }
        openGraphImageUrl
      }
    }
  }
}
`;