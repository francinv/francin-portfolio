import { ViewProps } from './types';
import { FinderIcon, H6 } from '@/components';
import Link from 'next/link';

const SymbolView = ({ projects }: ViewProps) => (
  <div
    className="p-6 grid gap-2"
    style={{
      gridTemplateColumns: 'repeat(auto-fit, minmax(125px, 1fr))',
    }}
  >
    {projects.map((project) => (
      <Link
        href={project.projectUrl}
        key={project.name}
        className="flex flex-col items-center"
        target="_blank"
        rel="noreferrer"
      >
        <FinderIcon.Desktop />
        <H6 font="font-primary" className="text-center">
          {project.name}
        </H6>
      </Link>
    ))}
  </div>
);

export default SymbolView;
