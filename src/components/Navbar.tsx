'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Roboto+Condensed:wght@700&display=swap"
        rel="stylesheet"
      />

      <nav
        className={`flex items-center justify-between p-4 fixed w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
       
        <div
          className="bg-gray-200 px-4 py-2 rounded text-[#222222] text-xl font-bold tracking-[-0.02em]"
          style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
        >
          LOGO
        </div>

        
        <div className="hidden md:flex gap-8">
          {['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'].map((menu) => (
            <div key={menu} className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 cursor-pointer tracking-[-0.02em]"
                style={{ fontFamily: "'Inter', sans-serif", color: '#1959AC' }}
              >
                <span>{menu}</span>
                <svg
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="#1959AC"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>

             
              <div className="absolute left-0 mt-2 w-32 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {['Option 1', 'Option 2', 'Option 3'].map((option) => (
                  <a
                    key={option}
                    className="block px-4 py-2 cursor-pointer tracking-[-0.02em] text-[#222222] hover:bg-gray-100"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      
        <div className="hidden md:block">
          <button
            className="px-6 py-2 bg-[#1959AC] text-white rounded-lg hover:bg-[#0546D2] transition-colors duration-200 font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Sign Up
          </button>
        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-[#222222]"
        >
          ☰
        </button>

        
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-16 right-4 bg-white shadow-md p-4 rounded-lg flex flex-col gap-4"
          >
            {['Menu 1', 'Menu 2', 'Menu 3'].map((menu) => (
              <div key={menu}>
                <div
                  className="flex items-center gap-1 cursor-pointer tracking-[-0.02em]"
                  style={{ fontFamily: "'Inter', sans-serif", color: '#1959AC' }}
                >
                  {menu}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="#1959AC"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="flex flex-col ml-2 mt-2">
                  {['Option 1', 'Option 2', 'Option 3'].map((option) => (
                    <a
                      key={option}
                      className="cursor-pointer py-1 tracking-[-0.02em] text-[#222222] hover:bg-gray-100"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {option}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <button
              className="px-6 py-2 bg-[#1959AC] text-white rounded-lg hover:bg-[#0546D2] transition-colors duration-200 font-semibold tracking-[-0.02em]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Sign Up
            </button>
          </motion.div>
        )}
      </nav>
    </>
  );
}
