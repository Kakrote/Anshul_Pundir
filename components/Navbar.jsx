'use client';
import React, { useState } from 'react';
import { navLink } from '@/data/information';
import { Menu, X } from 'lucide-react';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full fixed top-0 left-0 z-50 font-serif bg-white ">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo or name */}
        <div className="text-2xl font-semibold text-gray-800 tracking-wide">
          Anshul Pundir
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {navLink.map((link, idx) => (
            <li key={idx}>
              <a href={link.url} className="hover:text-indigo-600 transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className='text-black'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-700">
            {navLink.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.url}
                  className="block hover:text-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
