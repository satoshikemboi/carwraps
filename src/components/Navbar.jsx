import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Cars', href: '#cars' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        <a href="/" className="text-gray-800 text-2xl font-bold tracking-wider">
            Autowraps
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden pr-120 md:flex space-x-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-semibold font-serif transition duration-150"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {/* Show the appropriate icon based on the state */}
            <FontAwesomeIcon 
              icon={isOpen ? faTimes : faBars} 
              className="text-xl" 
            />
          </button>
        </div>

      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 bg-gray-700 rounded-lg p-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              // Close the menu after clicking a link
              onClick={toggleMenu} 
              className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-150"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;