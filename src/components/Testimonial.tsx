"use client";

import React from "react";
import { Zap, Star, Shield, Clock } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      icon: <Zap className="w-8 h-8 text-[#1959AC]" />,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      name: "Jane Cooper",
    },
    {
      icon: <Star className="w-8 h-8 text-[#1959AC]" />,
      text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
      name: "Ralph Edwards",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#1959AC]" />,
      text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
      name: "Courtney Henry",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#1959AC]" />,
      text: "Hendrerit augue ut non, quis integer netus. Sagittis fusce rhoncus magnis habitant amet tellus cursus tellus ornare. Hendrerit blandit senectus. Mauris eget mi sed vitae praesent neque blandit.",
      name: "Cameron Williamson",
    },
  ];

  return (
    <section className="bg-[#1959AC] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div className="max-w-3xl">
            <p
              className="text-lg mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#E0EFFF',
              }}
            >
              Join other Sun harvesters
            </p>
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: '42px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                lineHeight: '1.2',
              }}
            >
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <p
              className="text-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '20px',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                color: '#E0EFFF',
              }}
            >
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi
              tristique condimentum congue fusce nunc, donec magnis commodo.
            </p>
          </div>
          <button
            className="mt-8 lg:mt-0 px-6 py-3 rounded-lg font-semibold shadow transition"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#1959AC',
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0546D2')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
          >
            Lorem Ipsum
          </button>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg h-full flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-6">{t.icon}</div>
              <p
                className="mb-8 leading-relaxed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '20px',
                  fontWeight: 200,
                  letterSpacing: '-0.02em',
                  color: '#222222',
                }}
              >
                {t.text}
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
                </div>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '20px',
                    fontWeight: 400, 
                    letterSpacing: '-0.02em',
                    color: '#222222',
                  }}
                >
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
