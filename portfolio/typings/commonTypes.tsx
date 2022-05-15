/**
 * {
              "description": "This is a repository for an admin panel. Will be built with django and react. ",
              "name": "schmell-admin-panel",
              "issues": {
                "totalCount": 46
              },
              "languages": {
                "nodes": [
                  {
                    "name": "Python",
                    "color": "#3572A5"
                  },
                  {
                    "name": "JavaScript",
                    "color": "#f1e05a"
                  },
                  {
                    "name": "HTML",
                    "color": "#e34c26"
                  },
                  {
                    "name": "CSS",
                    "color": "#563d7c"
                  },
                  {
                    "name": "Procfile",
                    "color": "#3B2F63"
                  }
                ]
              },
              "pullRequests": {
                "totalCount": 46
              },
              "url": "https://github.com/francinv/schmell-admin-panel",
              "deployments": {
                "nodes": [
                  {
                    "latestStatus": {
                      "state": "SUCCESS"
                    }
                  }
                ]
              },
              "openGraphImageUrl": "https://repository-images.githubusercontent.com/437527854/bbcf606a-49dc-408e-9fc0-8ca50d340e92"
            },
 */

export type RepositoryType = {
    description: string;
    name: string;
    issues: {
        totalCount: number;
    };
    languages: {
        nodes: [
            {
                name: string;
                color: string;
            }
        ]
    };
    pullRequests: {
        totalCount: number;
    };
    url: string;
    deployments: {
        nodes: [
            {
                latestStatus: {
                    state: string;
                }
            }
        ]
    };
    openGraphImageUrl: string;
}

export type ResponseType = {
    data: {
        viewer: {
            login: string;
            repositories: {
                nodes: RepositoryType[];
            }
        }
    }
}