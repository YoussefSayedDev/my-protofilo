import { LucideIcon } from 'lucide-react';
import { FC } from 'react';

interface InfoProjectProps {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}

const InfoProject: FC<InfoProjectProps> = ({icon:Icon, label, children}) => {
  return <div className='grid grid-cols-3 items-start gap-2 capitalize'>
    <div className="flex items-center gap-2">
      <Icon className='size-5' />
      <span className="text-sm">{label}:</span>
    </div>
    <div className="col-span-2 text-foreground">
      {children}
    </div>
  </div>
}

export default InfoProject