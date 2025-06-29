"use client";

import { useState } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-stretch bg-white">
      
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-12">
        <div className="max-w-xl">
        
          <h1
            className="text-[42px] font-bold tracking-[-0.02em] mb-6"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              color: "#222222",
            }}
          >
            Lorem ipsum dolor <br />
            <span style={{ color: "#222222" }}>sit amet</span>
          </h1>

         
          <p
            className="text-[20px] md:text-[24px] tracking-[-0.02em] leading-snug mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              color: "#666666",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
            elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
            morbi libero imperdiet neque.
          </p>

          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-auto flex-1 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1959AC] text-[#222222] font-semibold tracking-[-0.02em]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <button
              className="px-6 py-3 bg-[#1959AC] text-white font-semibold rounded-lg hover:bg-[#0546D2] transition-all duration-200 flex items-center hover:scale-105 tracking-[-0.02em]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Subscribe
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        
          <div
            className="flex items-center mt-6 text-[#1959AC] text-[20px] font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <div className="w-5 h-5 rounded-full bg-[#1959AC] text-white flex items-center justify-center mr-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            No credit card required!
          </div>
        </div>
      </div>

      
      <div className="hidden lg:block w-1/2 relative">
        <div className="absolute inset-0 clip-diagonal">
          <img
            src="/Hero-Section.png"
            alt="Motorcycle riders"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(12% 0, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>

      
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Roboto+Condensed:wght@700&display=swap");
      `}</style>
    </div>
  );
}
