'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: '/travel.png',
    title: 'LOREM IPSUM DOLOR SIT AMET',
    subtitle: 'Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultrices.',
    sectionTitle: 'Entrepreneur & Innovator',
    sectionText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    linkText: 'Read Full Story →'
  },
  {
    id: 2,
    image: '/travel.png',
    title: 'LOREM IPSUM DOLOR SIT AMET',
    subtitle: 'Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultrices.',
    sectionTitle: 'Entrepreneur & Innovator',
    sectionText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    linkText: 'Read Full Story →'
  },
]

export default function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full bg-gray-50 py-16 mt-30">
      <div className="max-w-6xl mx-auto px-8 relative">
       
        <button
          onClick={prevSlide}
          aria-label="Previous"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-3 bg-white/80 hover:bg-white rounded-full shadow-md transition"
        >
          <ArrowLeft className="w-5 h-5 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-3 bg-white/80 hover:bg-white rounded-full shadow-md transition"
        >
          <ArrowRight className="w-5 h-5 text-gray-800" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
          
            <div className="text-center mb-12">
              <h1
                className="text-[42px] leading-tight tracking-[-0.02em] mb-4"
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 700,
                  color: '#222222',
                }}
              >
                {slides[currentSlide].title}
              </h1>
              <p
                className="max-w-3xl mx-auto text-[20px] tracking-[-0.02em]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  color: '#222222',
                }}
              >
                {slides[currentSlide].subtitle}
              </p>
            </div>

           
            <div className="flex flex-col lg:flex-row items-center gap-12">
              
              <div className="flex-1">
                <img
                  src={slides[currentSlide].image}
                  alt="Slide"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

           
              <div className="flex-1">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3
                    className="mb-4 text-[24px] tracking-[-0.02em]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      color: '#222222',
                    }}
                  >
                    {slides[currentSlide].sectionTitle}
                  </h3>
                  <p
                    className="mb-6 text-[20px] tracking-[-0.02em]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      color: '#222222',
                    }}
                  >
                    {slides[currentSlide].sectionText}
                  </p>
                  <a
                    href="#"
                    className="font-medium transition"
                    style={{
                      color: '#1959AC',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '20px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {slides[currentSlide].linkText}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#1959AC]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
