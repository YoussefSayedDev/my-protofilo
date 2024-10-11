import { cn } from '@/lib/utils';
import { Project } from '@/types/interfaces';
import {
  Calendar,
  Eye,
  Github,
  LayoutDashboard,
  Tags
} from 'lucide-react';
import { FC } from 'react';
import { buttonVariants } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';
import { Separator } from '../ui/separator';
import Carousel from './Carousel';
import InfoProject from './InfoProject';
import ProjectCard from './ProjectCard';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: FC<ProjectItemProps> = ({project}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ProjectCard imageUrl={project.images[0]} title={project.title} />
      </DialogTrigger>
      <DialogContent className='p-0 sm:max-w-4xl lg:max-w-7xl'>
        <DialogHeader className='bg-muted p-4 md:p-6'>
          <DialogTitle className='text-foreground capitalize text-xl font-semibold truncate'>
            {project.title}
          </DialogTitle>
          <div className="grid lg:grid-cols-2 gap-4 p-4 max-h-[85vh] overflow-x-hidden overflow-y-auto">
            <Carousel images={project.images} />
            <div className="space-y-4 lg:space-y-6 p-2 lg:p-4 size-full">
              <p className="text-sm">{project.description}</p>
              <Separator className='bg-background' />
              <article className='space-y-2 lg:space-y-3'>
                <InfoProject icon={Calendar} label='published'>
                  <p className='font-semibold'>{project.publishedAt}</p>
                </InfoProject>
                <InfoProject icon={LayoutDashboard} label='layout'>
                  <p className='font-semibold'>
                    {project.isResponsive? "responsive" : "n/a"}
                  </p>
                </InfoProject>
                <InfoProject icon={Tags} label='tags'>
                  <div className='flex items-center flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                      <span key={tag} className="border rounded-sm py-1 px-2 bg-background/50 hover:bg-background cursor-pointer transition duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </InfoProject>
              </article>
              <Separator className='bg-background' />
              <div className="flex items-center gap-2">
                <a href={project.demoLink} target='_blank' className={buttonVariants()}>
                  <Eye className='size-4' />
                  <span>view demo</span>
                </a>
                <a href={project.githubLink} target='_blank' className={cn(buttonVariants({variant: "outline"}), "hover:border-black")}>
                  <Github className='size-4' />
                  <span>source code</span>
                </a>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectItem