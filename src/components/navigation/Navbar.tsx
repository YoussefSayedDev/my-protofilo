import { navLinks } from '@/constants/nav-links';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='hidden md:flex items-center gap-x-4'>
      {navLinks.map((link) => (
        <a key={link.title} href={link.href} className='font-medium capitalize hover:text-foreground'>
          {link.title}
        </a>
      ))}
    </nav>
  )
}

export default Navbar;