import { Skill } from '@/types/interfaces';
import { FC } from 'react';
import SkillItem from './SkillItem';

interface SkillsContainerProps {
  data: Skill[];
  label: string;
}

const SkillsContainer: FC<SkillsContainerProps> = ({data, label}) => {
  return <article className='border border-primary rounded-lg'>
    <h2 className="capitalize text-primary text-2xl font-semibold py-4 px-6 border-b border-primary">
      {label}
    </h2>
    <div className="py-4 px-6 space-y-6">
      {data.map((item) => (
        <SkillItem key={item._id} item={item} />
      ))}
    </div>
  </article>
}

export default SkillsContainer