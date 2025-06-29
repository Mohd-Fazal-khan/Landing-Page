"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundWrapper from "./BackgroundWrapper";

const GallerySection = () => {
  return (
    <BackgroundWrapper imageUrl="/bg.png">
      <div className="bg-gray-100 pt-20 pb-5 px-6 md:px-12 mt-15">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
            <div className="space-y-4 max-w-xs text-left self-start">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "#1959AC",
                }}
              >
                NO LIMITS
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontSize: "42px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#222222",
                  lineHeight: "1.2",
                }}
              >
                LOREM IPSUM DOLOR SIT AMET
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "#222222",
                  lineHeight: "1.7",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
                porttitor pharetra tempor quis arcu. Ipsum nullam.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                style={{
                  backgroundColor: "#1959AC",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0546D2")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1959AC")
                }
              >
                Lorem Ipsum
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full h-[500px] relative rounded-xl overflow-hidden"
            >
              <Image
                src="/grouped_bike.png"
                alt="Motorcycle"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default GallerySection;
