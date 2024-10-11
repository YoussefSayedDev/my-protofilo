import SectionTitle from "@/components/SectionTitle";
import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { getStatistics } from "@/constants/statistics";
import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";

const AboutSection = () => {
  const { statistics } = getStatistics();

  return (
    <section id='about' className='relative'>
      <Effect className='-left-32 md:-left-44 -top-12' />
      <article className='relative max-w-[50rem] mx-auto bg-background/90 border rounded-lg p-6 flex flex-col gap-y-6'>
        <Effect
          variant='square'
          size='default'
          className='-top-4 -right-5 -z-10 rotate-12'
        />
        <SectionTitle
          title='about me'
          description='a quick introduction about me'
          className='items-start'
        />
        <p className='text-lg'>
          I’m Youssef, a passionate frontend developer with a keen eye for
          detail and design. I specialize in building responsive and intuitive
          web interfaces that provide seamless user experiences. With a focus on
          clean, maintainable code and modern development practices, I ensure
          that every project is both visually appealing and highly functional.
        </p>
        <p className='text-lg'>
          Constantly exploring new technologies and optimizing for performance,
          I bring both creativity and technical expertise to everything I work
          on. Let&apos;s connect and create something exceptional together!
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 items-end text-center md:text-start'>
          {statistics.map((stat) => (
            <div key={stat.label} className='flex flex-col'>
              <p className='text-foreground text-2xl md:text-4xl font-bold'>
                +{stat.value}
              </p>
              <p className='whitespace-nowrap text-sm md:text-lg'>
                {stat.label}
              </p>
            </div>
          ))}
          <a
            href='#skills'
            className={cn(
              buttonVariants({ size: "lg" }),
              "col-span-2 md:col-span-1"
            )}
          >
            <span>discover skills</span>
            <ArrowRightCircle className='size-4' />
          </a>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
