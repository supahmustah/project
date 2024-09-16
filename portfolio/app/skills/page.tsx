'use client';

import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import skills from '@/public/files/skillsArray';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<(typeof skills)[0] | null>(
    null
  );
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 9;

  const handlePrevPage = () => setCurrentIndex((prev) => Math.max(prev - 3, 0));
  const handleNextPage = () =>
    setCurrentIndex((prev) => Math.min(prev + 3, skills.length - 3));

  const displayedSkills = skills.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const totalPages = Math.ceil(skills.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / 3) + 1;

  useEffect(() => {
    if (slideDirection) {
      const timer = setTimeout(() => setSlideDirection(null), 300); // Match this with your transition duration
      return () => clearTimeout(timer);
    }
  }, [slideDirection]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-16'>
      <div className='flex items-center w-full justify-center'>
        {/* Pagination buttons */}
        <div className='w-24 flex justify-center'>
          {' '}
          {/* Fixed width container */}
          {currentIndex > 0 ? (
            <button
              onClick={handlePrevPage}
              className='text-8xl text-gray-500 hover:text-gray-700 transition-colors'>
              <FaChevronLeft />
            </button>
          ) : (
            <div className='w-24'></div>
          )}
        </div>
        {/* Grid of skills */}
        <div className='grid grid-flow-col grid-rows-3 w-3/4 max-w-2xl gap-4'>
          {displayedSkills.map((skill, index) => (
            <div
              key={index}
              className='aspect-square flex flex-col justify-center items-center p-2 relative overflow-hidden group hover:cursor-pointer'
              style={{ backgroundColor: skill.bgColor }}
              onClick={() => setSelectedSkill(skill)}>
              <skill.icon className='text-9xl text-white absolute transition-all duration-300 group-hover:-translate-x-[150%] group-hover:opacity-0' />
              <FaArrowRight className='text-9xl text-white absolute transition-all duration-300 translate-x-[150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100' />
            </div>
          ))}
        </div>
        {/* Pagination buttons */}
        <div className='w-24 flex justify-center'>
          {' '}
          {/* Fixed width container */}
          {currentIndex < skills.length - itemsPerPage ? (
            <button
              onClick={handleNextPage}
              className='text-8xl text-gray-500 hover:text-gray-700 transition-colors'>
              <FaChevronRight />
            </button>
          ) : (
            <div className='w-24'></div>
          )}
        </div>
      </div>
      {/* Pagination indicator */}
      <div className='flex justify-center items-center mt-8 h-4'>
        {Array.from({ length: totalPages }, (_, i) => (
          <div
            key={i}
            className={`rounded-full mx-1 transition-all duration-300 ${
              i + 1 === currentPage
                ? 'w-4 h-4 bg-neutral-800 dark:bg-white'
                : 'w-3 h-3 bg-neutral-400 dark:bg-neutral-600'
            }`}></div>
        ))}
      </div>
      {/* Skill details modal */}
      {selectedSkill && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 '>
          <div className='bg-white dark:bg-neutral-800 p-8 rounded-lg max-w-md w-full relative overflow-hidden shadow-2xl'>
            <div
              className='absolute inset-0 opacity-20'
              style={{ backgroundColor: selectedSkill.bgColor }}></div>
            <button
              onClick={() => setSelectedSkill(null)}
              className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <div className='flex items-center mb-6'>
              <selectedSkill.icon
                className='text-5xl mr-4'
                style={{ color: selectedSkill.bgColor }}
              />
              <h2 className='text-3xl font-bold'>{selectedSkill.name}</h2>
            </div>
            <p className='mb-4 text-gray-700 dark:text-gray-300'>
              {selectedSkill.description}
            </p>
            <div className='mt-6 pt-4 border-t border-gray-200 dark:border-gray-700'>
              <h3 className='text-lg font-semibold mb-2'>Key Features:</h3>
              <ul className='list-disc list-inside text-gray-700 dark:text-gray-300'>
                {selectedSkill.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
