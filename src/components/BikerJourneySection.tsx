"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundWrapper from "./BackgroundWrapper";

export default function BikerJourneySection() {
  return (
    <BackgroundWrapper imageUrl="/bg.png">
      <div className="bg-white min-h-screen flex flex-col overflow-visible pb-20 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col lg:flex-row flex-1 overflow-visible relative">
          <motion.div
            className="lg:w-1/2 relative z-10 -mt-20 lg:-mt-32 overflow-visible"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-50 lg:h-[85vh] w-full">
              <Image
                src="/bike.png"
                alt="Two motorcyclists on a scenic road"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 bg-gray-50 p-8 lg:p-16 flex flex-col justify-center z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-sm font-semibold mb-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#1959AC",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Lorem ipsum
            </motion.p>

            <motion.h1
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: "42px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#222222",
                lineHeight: "1.2",
              }}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span style={{ color: "#1959AC" }}>LOREM</span> IPSUM DOLOR SIT
              AMET CONSECTETUR. ENIM DONEC.
            </motion.h1>

            <motion.p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "#222222",
                lineHeight: "1.7",
              }}
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
              amet non.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-y-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {[...Array(6)].map((_, i) => (
                <div key={i}>
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: "#222222",
                    }}
                  >
                    Lorem Ipsum
                  </h3>
                </div>
              ))}
            </motion.div>

            <motion.button
              className="text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition duration-200"
              style={{
                backgroundColor: "#1959AC",
                fontFamily: "'Inter', sans-serif",
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0546D2")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1959AC")
              }
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
          </motion.div>
        </div>

        <motion.div
          className="h-4 md:h-6 bg-gradient-to-r from-[#1959AC] to-[#0546D2] -mt-5 z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </div>
    </BackgroundWrapper>
  );
}
