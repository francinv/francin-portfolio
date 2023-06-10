import { gql } from '@apollo/client';

export const FETCH_GITHUB_STATS = gql`
  {
    viewer {
      pullRequests {
        totalCount
      }
      issues {
        totalCount
      }
      repositories(first: 100) {
        nodes {
          stargazerCount
        }
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
        totalCommitContributions
      }
    }
  }
`;

export const FETCH_GITHUB_LANGUAGES = gql`
  {
    viewer {
      repositories(first: 100, isFork: false, ownerAffiliations: [OWNER, COLLABORATOR]) {
        nodes {
          languages(first: 100, orderBy: { field: SIZE, direction: DESC }) {
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

export const FETCH_GITHUB_REPOS = gql`
  {
    viewer {
      repositories(
        first: 100
        ownerAffiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]
        isFork: false
        privacy: PUBLIC
      ) {
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
          isInOrganization
          owner {
            ... on Organization {
              name
            }
          }
        }
      }
    }
  }
`;
