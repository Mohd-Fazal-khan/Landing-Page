'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Cardsection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cards = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      image: '/cardone.png',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      image: '/cardtwo.png',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      image: '/cardthree.png',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      image: '/cardfour.png',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 md:px-12 bg-[url('/bg-card.png')] bg-no-repeat bg-cover">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-12"
      >
        <div className="text-center md:text-left max-w-4xl mx-auto">
          <p
            className="mb-2"
            style={{
              color: '#1959AC',
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            Lorem ipsum dolor sit amet
          </p>
          <h2
            className="mb-4 text-[32px] md:text-[42px]"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#222222',
              lineHeight: '1.2',
            }}
          >
            LOREM IPSUM DOLOR SIT
          </h2>
          <p
            className="max-w-2xl mx-auto md:mx-0 text-[14px] sm:text-[16px]"
            style={{
              color: '#222222',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.02em',
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </p>
        </div>
      </motion.div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="p-6">
                <h3
                  className="mb-2 text-[18px] sm:text-[20px]"
                  style={{
                    color: '#222222',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="leading-relaxed mb-4 text-[14px]"
                  style={{
                    color: '#222222',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '-0.02em',
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.
                </p>
                <a
                  href="#"
                  style={{
                    color: '#1959AC',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                  }}
                  className="hover:underline hover:text-[#0546D2] transition-colors"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Cardsection;
