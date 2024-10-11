"use client";
import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { socialLinks } from "@/constants/social-links";
import { cn } from "@/lib/utils";
import { ArrowRightCircle, Download } from "lucide-react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section
      id='home'
      className='grid md:grid-cols-12 items-center gap-6 px-5 justify-center'
    >
      {/* Social Links */}
      <ul className='flex md:flex-col gap-4 items-center size-max mx-auto py-2 md:py-8 px-8 md:px-2 border rounded-3xl'>
        {socialLinks.map((link) => {
          const { href, icon: Icon } = link;
          return (
            <li
              key={href}
              className='hover:text-primary transition-all duration-300'
            >
              <a href={href} target='_blank' title='Social Media Link'>
                <Icon className='size-5' />
              </a>
            </li>
          );
        })}
      </ul>
      {/* Presentation */}
      <div className='md:col-span-6 flex flex-col items-center md:items-start gap-y-4'>
        <h2 className='text-3xl md:text-5xl font-bold capitalize text-foreground'>
          Hi👋, I&apos;m Youssef
        </h2>
        <h5 className='text-xl md:text-2xl font-semibold capitalize'>
          frontend developer
        </h5>
        <p className='leading-7 md:text-lg md:max-w-[85%] text-center md:text-justify'>
          I create modern, responsive user interfaces with clean, efficient
          code. I focus on delivering visually appealing and functional web
          applications that ensure seamless user experiences. With expertise in
          optimizing performance and crafting pixel-perfect designs, I strive to
          bring creativity and precision to every project.
        </p>
        <div className='flex items-center gap-2 py-4'>
          <a
            href='#projects'
            className={cn(buttonVariants({ size: "lg" }), "px-6 md:px-8")}
          >
            <span>My Works</span>
            <ArrowRightCircle className='size-4' />
          </a>
          <a
            href='#'
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "px-6 md:px-8"
            )}
            target='_blank'
            download={true}
          >
            <span>Download CV</span>
            <Download className='size-4' />
          </a>
        </div>
      </div>
      {/* Image */}
      <div className='md:col-span-5 grid place-content-center'>
        <div className='relative flex items-center justify-center size-80 md:size-96'>
          <Effect className='size-full' />
          <Effect
            variant='square'
            size='sm'
            className='top-[8%] left-[25%] -rotate-12'
          />
          <Effect
            variant='square'
            size='sm'
            className='top-[50%] right-[2%] -rotate-12'
          />
          <Effect
            variant='square'
            size='sm'
            className='bottom-[18%] left-[12%] rotate-6'
          />
          <Image
            src='/me.jpg'
            width={420}
            height={420}
            alt='Profile'
            className='object-fill size-[80%] rounded-full border-2 ring-4 ring-primary ring-offset-4 ring-offset-background'
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
