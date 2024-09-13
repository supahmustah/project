'use client';
import ThemeSwitch from './themeSwitch';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className='absolute w-full text-lg font-[family-name:var(--font-poppins-reg)] py-5 flex gap-20 pr-20 justify-end border-b dark:border-zinc-900'>
      <div className='flex gap-20 relative'>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`relative group hover:cursor-pointer`}>
            <span>{link.name}</span>
            <span
              className={`absolute  bottom-0 h-[2px] bg-zinc-900 dark:bg-zinc-300 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0
              ${
                pathname === link.href ? 'w-full left-0' : 'w-0 left-1/2'
              }`}></span>
          </Link>
        ))}
      </div>
      <ThemeSwitch />
    </nav>
  );
}
