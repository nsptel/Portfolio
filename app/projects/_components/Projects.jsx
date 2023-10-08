import { ProjectItem } from '@/sections';

export function Projects({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {projects?.map((project, index) => (
        <ProjectItem key={project._id} project={project} index={index} />
      ))}
    </div>
  );
}
