'use client';
import ThemeSwitch from './themeSwitch';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`z-20 absolute w-full text-lg font-[family-name:var(--font-poppins-reg)] py-5 flex justify-end px-10 ${
        isMobile ? '' : 'border-b dark:border-neutral-900'
      }`}>
      {' '}
      {isMobile ? (
        <div className='flex items-center gap-4 pr-4'>
          <ThemeSwitch />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='z-30 text-2xl'>
            {isMenuOpen ? '✕' : '☰'}
          </button>
          {isMenuOpen && (
            <div className='absolute top-full right-0 w-48 bg-white dark:bg-neutral-800 py-4 shadow-md'>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-neutral-700'
                  onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <div className='flex gap-20 relative pr-20'>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative group hover:cursor-pointer`}>
                <span>{link.name}</span>
                <span
                  className={`absolute bottom-0 h-[2px] bg-neutral-900 dark:bg-neutral-300 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0
                  ${
                    pathname === link.href ? 'w-full left-0' : 'w-0 left-1/2'
                  }`}></span>
              </Link>
            ))}
          </div>
          <ThemeSwitch />
        </>
      )}
    </nav>
  );
}
