'use client';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className='flex justify-center items-center min-h-screen py-10 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-7xl'>
        <div className='lg:w-1/2 lg:border-r-2 lg:border-neutral-800 lg:dark:border-white lg:pr-8'>
          <div className='space-y-6'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold dark:text-white text-neutral-800'>
              Contact me!
            </h1>
            <p className='text-lg text-neutral-800 dark:text-neutral-300 italic'>
              Email, call or complete the form to learn how I can be of service
              to you!
            </p>
            <div className='flex items-center'>
              <AiOutlineMail className='w-6 h-6 mr-3 text-neutral-600 dark:text-neutral-400' />
              <p className='text-lg text-neutral-800 dark:text-white'>
                lode.lode65@gmail.com
              </p>
            </div>
            <div className='flex items-center'>
              <BsTelephone className='w-6 h-6 mr-3 text-neutral-600 dark:text-neutral-400' />
              <p className='text-lg text-neutral-800 dark:text-white'>
                +32 468 18 08 82
              </p>
            </div>
          </div>
          <div className='flex justify-start items-center mt-8 gap-4'>
            <a
              href='https://www.facebook.com/Lodeehhh'
              target='_blank'
              className='p-2 border-2 border-neutral-800 dark:border-white rounded-full hover:bg-neutral-800 dark:hover:bg-white transition-all duration-300'>
              <FaFacebookF className='w-6 h-6 text-neutral-800 dark:text-white hover:text-white dark:hover:text-neutral-800' />
            </a>
            <a
              href='https://www.linkedin.com/in/lodevanbeneden/'
              target='_blank'
              className='p-2 border-2 border-neutral-800 dark:border-white rounded-full hover:bg-neutral-800 dark:hover:bg-white transition-all duration-300'>
              <FaLinkedinIn className='w-6 h-6 text-neutral-800 dark:text-white hover:text-white dark:hover:text-neutral-800' />
            </a>
            <a
              href='https://www.instagram.com/lodevb_/'
              target='_blank'
              className='p-2 border-2 border-neutral-800 dark:border-white rounded-full hover:bg-neutral-800 dark:hover:bg-white transition-all duration-300'>
              <FaInstagram className='w-6 h-6 text-neutral-800 dark:text-white hover:text-white dark:hover:text-neutral-800' />
            </a>
          </div>
        </div>
        <div className='lg:w-1/2'>
          <form className='space-y-6 dark:bg-neutral-900 bg-neutral-200 p-6 sm:p-8 rounded-xl shadow-xl dark:shadow-black'>
            <div>
              <h1 className='text-3xl sm:text-4xl tracking-[0.015em] font-bold'>
                Get in touch!
              </h1>
              <p className='text-md text-neutral-500 dark:text-neutral-300 italic'>
                You can reach me anytime!
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type='text'
                id='firstName'
                name='firstName'
                placeholder='First name'
                className='w-full rounded-full px-4 py-2 border border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-white dark:bg-neutral-800 dark:text-white dark:border-white'
              />
              <input
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Last name'
                className='w-full rounded-full px-4 py-2 border border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-white dark:bg-neutral-800 dark:text-white dark:border-white'
              />
            </div>
            <div className='relative'>
              <AiOutlineMail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-500 dark:text-neutral-400' />
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Your email'
                className='w-full rounded-full px-4 py-2 border border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-white dark:bg-neutral-800 dark:text-white dark:border-white pl-10'
              />
            </div>
            <div className='relative'>
              <BsTelephone className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-500 dark:text-neutral-400' />
              <input
                type='tel'
                id='phone'
                name='phone'
                placeholder='Phone number (e.g. +32 412 34 45 67)'
                className='w-full rounded-full px-4 py-2 border border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-white dark:bg-neutral-800 dark:text-white dark:border-white pl-10'
              />
            </div>
            <div>
              <textarea
                id='content'
                name='content'
                rows={4}
                placeholder='How can I help you?'
                className='w-full rounded-xl px-4 py-2 border border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-white dark:bg-neutral-800 dark:text-white dark:border-white'></textarea>
            </div>
            <button className='w-full inline-flex justify-center py-2 px-4 border-2 rounded-full font-semibold dark:bg-white bg-neutral-800 text-white border-neutral-800 dark:border-white dark:text-neutral-800'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
