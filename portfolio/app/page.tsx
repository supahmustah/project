'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { WavyBackground } from '@/app/components/ui/wavy-background';
import { useTheme } from 'next-themes';

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen mx-36 font-[family-name:var(--font-poppins-reg)]'>
      <div className='flex items-center justify-center w-full gap-20 p-16'>
        <div className='w-3/5 leading-relaxed text-justify'>
          <h1 className='text-5xl font-[family-name:var(--font-poppins-bold)] text-center mb-3 pt-4'>
            Lode Van Beneden
          </h1>
          <hr className='mb-4 w-2/3 relative left-1/2 -translate-x-1/2 border-zinc-800 border-2 dark:border-white' />
          <p className='p-5'>
            As a full-stack developer, my goal is to create scalable and
            effective web solutions. I enjoy solving problems and having the
            chance to assist projects in achieving their complete capability.
            Possessing back-end development experience, I produce programs that
            are not only efficient but are intended for sustained achievement.
            My love is transforming concepts into completely functional
            projects, making sure that each element works together to provide a
            smooth ultimate result.
          </p>
          <div className='flex justify-center items-center gap-20'>
            <a
              href='https://www.linkedin.com/in/lodevanbeneden/'
              className='border-zinc-800 dark:border-white relative cursor-pointer text-lg px-5 py-2 rounded-full border-2 border-collapse flex justify-center items-center dark:hover:bg-white dark:hover:text-zinc-800 hover:bg-zinc-800 hover:text-white transition-all duration-300'>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className='mr-2'
              />
              LinkedIn
            </a>
            <a
              href='https://www.linkedin.com/in/lodevanbeneden/'
              className='border-zinc-800 dark:border-white relative cursor-pointer text-lg px-5 py-2 rounded-full border-2 border-collapse flex justify-center items-center dark:hover:bg-white dark:hover:text-zinc-800 hover:bg-zinc-800 hover:text-white transition-all duration-300'>
              <FontAwesomeIcon
                icon={faGithub}
                className='mr-2'
              />
              Github
            </a>
          </div>
        </div>
        <Image
          src='/images/placeholder.png'
          width={400}
          height={400}
          alt='Lode Van Beneden'
        />
      </div>
    </div>
  );
}
