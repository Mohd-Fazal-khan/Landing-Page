"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const Feature = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-16 px-4 lg:px-8">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-[90rem] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-6 lg:p-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p
                className="mb-2"
                style={{
                  color: "#1959AC",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                Lorem ipsum dolor sit
              </p>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontSize: "42px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#222222",
                  lineHeight: "1.2",
                }}
              >
                LOREM IPSUM <br /> DOLOR SIT AMET
              </h2>
              <p
                style={{
                  color: "#222222",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  letterSpacing: "-0.02em",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
                facilisis donec dui. Mi porttitor ut aliquam mattis maecenas
                eget integer in nam. Non nisi iaculis at felis aliquet.
                Hendrerit tellus at purus lectus.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  img: "/blogimg1.png",
                  text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
                },
                {
                  img: "/blogimg2.png",
                  text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
                },
                {
                  img: "/blogimg3.png",
                  text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisi morbi metus gravida eu facilisi enim.",
                },
              ].map(({ img, text }, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img
                    src={img}
                    alt="feature"
                    className="w-16 h-16 rounded-md object-cover shadow-sm"
                  />
                  <p
                    style={{
                      color: "#222222",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "16px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <button
                className="text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
                style={{ backgroundColor: "#1959AC" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0546D2")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1959AC")
                }
              >
                Loerum Ipsum
                <ArrowRight className="w-5 h-5" />
              </button>
              <div
                className="flex items-center font-medium gap-2"
                style={{
                  color: "#1959AC",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                <Phone className="w-5 h-5" />
                <span>123456789</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/motorcycleright.png"
              alt="Motorcycles"
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        <div className="h-3 bg-gradient-to-r from-[#1959AC] via-[#0546D2] to-purple-600 w-full"></div>
      </div>
    </div>
  );
};

export default Feature;
