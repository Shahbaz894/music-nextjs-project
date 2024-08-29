import React from 'react';
import Link from 'next/link';
import { Spotlight } from './ui/spotlight';
import { Button } from './ui/moving-border';

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col 
    items-center justify-center relative text-white overflow-hidden mx-auto py-10 md:py-0'>
        <Spotlight className="-top-50 left-0 md:left-80 md:-top-20"
        fill="white" />
      <div className='p-4 relative z-10 w-full text-center'>

        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl
        font-bold bg-clip-text text-white bg-gradient-to-b from-neutal-50 to-neutral-400'>Master the Art of Music</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
          Dive into our comprehensive music courses and transform your musical journey today. Whether you are
          a beginner or looking to refine your skills, we have something for everyone.
        </p>
        <div className='mt-4'>
          <Link href='/courses'>
          <Button
            borderRadius="1.75rem"
            className="bd-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
            Explore Courses
            </Button>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


