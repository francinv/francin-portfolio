import { Project } from '@/types';

export const projects: Project[] = [
  {
    name: 'schmell-admin-panel',
    description: 'This is a repository for an admin panel. Will be built with django and react.',
    projectUrl: 'https://github.com/francinv/schmell-admin-panel/',
    issuesTotalCount: 38,
    pullRequestsTotalCount: 29,
    deploymentState: 'Success',
    languages: ['Python', 'JavaScript', 'HTML', 'CSS'],
    imageUrl: '/mock/schmell-admin-panel.png',
  },
  {
    name: 'francin-portfolio',
    description: 'Repository for portfolio page.',
    projectUrl: 'https://github.com/francinv/francin-portfolio/',
    issuesTotalCount: 0,
    deploymentState: 'Not deployed',
    pullRequestsTotalCount: 0,
    imageUrl: '/mock/francin-portfolio.png',
    languages: ['None'],
  },
  {
    name: 'IT2805-Studentmegleren',
    description:
      'This is a repository for a school project. The group created a website for an imaginary company.',
    projectUrl: 'https://github.com/francinv/IT2805-Studentmegleren/',
    issuesTotalCount: 0,
    deploymentState: 'Not deployed',
    pullRequestsTotalCount: 0,
    languages: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: '/mock/studentmegleren.png',
  },
  {
    name: 'TDT4140-Middagsdeling',
    description:
      'This is a repository for a project in the course TDT4140. APP built with Django for backend, and static HTML for frontend.',
    projectUrl: 'https://github.com/francinv/TDT4140-Middagsdeling/',
    issuesTotalCount: 0,
    deploymentState: 'Success',
    pullRequestsTotalCount: 0,
    languages: ['Python', 'HTML', 'CSS', 'JavaScript'],
    imageUrl: '/mock/tdt4140.png',
  },
  {
    name: 'schmell-app',
    description: 'The official Schmell application',
    projectUrl: 'https://github.com/francinv/schmell-app/',
    issuesTotalCount: 0,
    deploymentState: 'Not deployed',
    pullRequestsTotalCount: 0,
    languages: [],
    imageUrl: '/mock/schmell-app.png',
  },
];
