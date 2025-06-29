"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Partnership = () => {
  const [activeTab, setActiveTab] = useState("Research");

  const tabs = ["Research", "Plan", "Design"];

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
       
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-[42px] leading-tight tracking-[-0.02em]"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 700,
              color: "#222222",
            }}
          >
            LOREM IPSUM DOLOR SIT AMET
          </h2>

         
          <div className="flex border border-gray-200 rounded-lg overflow-hidden w-fit divide-x divide-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-[20px] tracking-[-0.02em] font-semibold transition ${
                  activeTab === tab
                    ? "bg-[#1959AC] text-white"
                    : "bg-white text-[#222222] hover:bg-gray-50"
                }`}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                {tab}
              </button>
            ))}
          </div>

          
          <p
            className="max-w-lg text-[20px] leading-relaxed tracking-[-0.02em]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              color: "#222222",
            }}
          >
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
            pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac
            turpis at amet. Purus malesuada placerat arcu at enim elit in
            accumsan.
          </p>

         
          <a
            href="#"
            className="inline-flex items-center text-[20px] tracking-[-0.02em] transition"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#1959AC",
            }}
          >
            Check tools
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

       
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-xl">
            <img
              src="/handshake.png"
              alt="Business handshake"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;
