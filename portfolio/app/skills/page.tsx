'use client';

import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiCsharp,
  SiMysql,
  SiTailwindcss,
} from 'react-icons/si';
import { IoLogoJavascript, IoLogoAndroid } from 'react-icons/io';
import { AiOutlineJava } from 'react-icons/ai';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

export default function Skills() {
  type Skill = {
    name: string;
    bgColor: string;
    icon: React.ElementType;
  };

  const skills = [
    { name: 'HTML', bgColor: '#F16529', icon: SiHtml5 },
    { name: 'CSS', bgColor: '#2965F1', icon: SiCss3 },
    { name: 'JavaScript', bgColor: '#FFDE24', icon: IoLogoJavascript },
    { name: 'React', bgColor: '#087EA4', icon: SiReact },
    { name: 'Tailwind', bgColor: '#38BDF8', icon: SiTailwindcss },
    { name: 'C#', bgColor: '#9F73D9', icon: SiCsharp },
    { name: 'SQL', bgColor: '#5283A2', icon: SiMysql },
    { name: 'Java', bgColor: '#01618A', icon: AiOutlineJava },
    { name: 'Android', bgColor: '#A4C639', icon: IoLogoAndroid },
  ];

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(skills.length / itemsPerPage);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));

  const displayedSkills = skills.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className='flex items-center justify-center min-h-screen py-16'>
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 0}
        className='text-8xl text-gray-500 hover:text-gray-700 transition-colors mr-4'>
        <FaChevronLeft />
      </button>
      <div className='grid grid-cols-3 w-3/4 max-w-2xl gap-4'>
        {skills.map((skill, index) => (
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
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages - 1}
        className='text-8xl text-gray-500 hover:text-gray-700 transition-colors ml-4'>
        <FaChevronRight />
      </button>
      {selectedSkill && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-8 rounded-lg max-w-md'>
            <h2 className='text-2xl font-bold mb-4'>{selectedSkill.name}</h2>
            <p className='mb-4'>
              More information about {selectedSkill.name} goes here...
            </p>
            <button
              onClick={() => setSelectedSkill(null)}
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
