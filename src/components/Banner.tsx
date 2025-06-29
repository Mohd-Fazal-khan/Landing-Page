"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-white mt-20">
        <Image
          src="/banner.png"
          alt="Cyberpunk Motorcycle"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="absolute top-6 left-6 z-20">
          <div className="bg-gray-200 px-4 py-2 rounded text-[#222222] text-xl font-bold">
            LOGO
          </div>
        </div>

        <main className="z-20 relative max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[28px] md:text-[32px] font-bold leading-tight mb-6 tracking-[-0.02em]"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              color: "white",
            }}
          >
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS
            EGESTAS ALIQUAM VIVERRA MI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] md:text-[18px] leading-relaxed mb-4 tracking-[-0.02em] font-semibold"
            style={{ fontFamily: "'Inter', sans-serif", color: "white" }}
          >
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
            volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
            justo pellentesque id sed. Id tellus id luctus id. At quis nunc
            libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum
            nulla quam.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[16px] md:text-[18px] leading-relaxed mb-8 tracking-[-0.02em] font-semibold"
            style={{ fontFamily: "'Inter', sans-serif", color: "white" }}
          >
            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
            condimentum ultrices non. Ornare semper in tincidunt pellentesque
            cras mauris in vitae. At viverra quis eu malesuada vel et porttitor.
            Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a
            pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#1959AC] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#0546D2] transition-colors text-lg inline-flex items-center gap-2"
          >
            Lorem Ipsum
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </main>
      </div>
    </>
  );
}
