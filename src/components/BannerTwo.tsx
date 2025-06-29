"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BannerTwo() {
  return (
    <>
      <div className="relative min-h-[500px] flex items-center justify-center overflow-hidden text-white">
        <Image
          src="/mainimg.png"
          alt="Cyberpunk Motorcycle"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="absolute top-6 left-6 z-20">
          <div
            className="bg-gray-200 px-4 py-2 rounded text-[#222222] text-xl font-bold tracking-[-0.02em]"
            style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
          >
            LOGO
          </div>
        </div>

        <main className="z-20 relative max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[42px] font-bold leading-relaxed mb-6 max-w-3xl mx-auto tracking-[-0.02em]"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              color: "white",
            }}
          >
            Dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
            viverra mi. Dolor sit amet consectetur. Quis adipiscing purus
            egestas aliquam viverra mi.
          </motion.h1>
        </main>
      </div>
    </>
  );
}
