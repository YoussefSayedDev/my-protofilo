import SectionTitle from "@/components/SectionTitle";
import SkillsContainer from "@/components/skills/SkillsContainer";
import { Effect } from "@/components/ui/effects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabsItems } from "@/constants/tab-items";
import { getSkills } from "@/lib/skills";

const SkillsSection = async () => {
  const frontendSkills = await getSkills("frontend");
  const backendSkills = await getSkills("backend");
  const toolsSkills = await getSkills("tools");
  return (
    <section id='skills' className='relative space-y-6 px-5'>
      <Effect className='-right-20 bottom-8 md:-right-36 md:bottom-2' />
      <SectionTitle title='skills' description='my technical proficiency' />
      <Tabs defaultValue={tabsItems[0].value}>
        <div className='grid md:grid-cols-3 gap-4 md:gap-8'>
          {/* Tabs List */}
          <TabsList className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2 w-full h-fit'>
            {tabsItems.map((item) => {
              const { value, label, icon: Icon } = item;
              return (
                <TabsTrigger key={value} value={value} className='w-full gap-2'>
                  <Icon className='size-4' />
                  <span className='capitalize'>{label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs Content */}
          <div className='md:col-span-2 bg-background/50 select-none'>
            <TabsContent value='frontend'>
              <SkillsContainer data={frontendSkills} label='frontend' />
            </TabsContent>
            <TabsContent value='backend'>
              <SkillsContainer data={backendSkills} label='backend' />
            </TabsContent>
            <TabsContent value='tools'>
              <SkillsContainer data={toolsSkills} label='tools' />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default SkillsSection;
