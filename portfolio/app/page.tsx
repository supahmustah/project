'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 font-[family-name:var(--font-poppins-reg)]'>
      <div className='flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-20 py-8 lg:py-16'>
        <div className='w-full lg:w-3/5 leading-relaxed text-justify'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-poppins-bold)] text-center mb-3 pt-4'>
            Lode Van Beneden
          </h1>
          <hr className='mb-4 w-2/3 relative left-1/2 -translate-x-1/2 border-neutral-800 border-2 dark:border-white' />
          <p className='p-4 lg:p-5 text-sm sm:text-base'>
            As a full-stack developer, my goal is to create scalable and
            effective web solutions. I enjoy solving problems and having the
            chance to assist projects in achieving their complete capability.
            Possessing back-end development experience, I produce programs that
            are not only efficient but are intended for sustained achievement.
            My love is transforming concepts into completely functional
            projects, making sure that each element works together to provide a
            smooth ultimate result.
          </p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-20 mt-6'>
            <a
              href='https://www.linkedin.com/in/lodevanbeneden/'
              className='w-full sm:w-auto border-neutral-800 dark:border-white relative cursor-pointer text-base lg:text-lg px-4 py-2 rounded-full border-2 border-collapse flex justify-center items-center dark:hover:bg-white dark:hover:text-neutral-800 hover:bg-neutral-800 hover:text-white transition-all duration-300'>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className='mr-2'
              />
              LinkedIn
            </a>
            <a
              href='https://github.com/yourusername'
              className='w-full sm:w-auto border-neutral-800 dark:border-white relative cursor-pointer text-base lg:text-lg px-4 py-2 rounded-full border-2 border-collapse flex justify-center items-center dark:hover:bg-white dark:hover:text-neutral-800 hover:bg-neutral-800 hover:text-white transition-all duration-300'>
              <FontAwesomeIcon
                icon={faGithub}
                className='mr-2'
              />
              Github
            </a>
          </div>
        </div>
        <div className='w-full sm:w-1/2 lg:w-1/3 mt-8 lg:mt-0'>
          <Image
            src='/images/placeholder.png'
            width={300}
            height={300}
            alt='Lode Van Beneden'
            className='w-full h-auto'
          />
        </div>
      </div>
    </div>
  );
}
