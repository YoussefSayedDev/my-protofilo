import ProjectItem from "@/components/projects/ProjectItem";
import SectionTitle from "@/components/SectionTitle";
import { Effect } from "@/components/ui/effects";
import { getProject } from "@/lib/projects";

const ProjectsSection = async () => {
  const projects = await getProject();

  return (
    <section id='projects' className='relative space-y-6 px-5'>
      <Effect className='top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' />
      <SectionTitle title='projects' description="some things i've built" />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projects.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
