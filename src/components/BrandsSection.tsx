"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "Hero", src: "/hero.png" },
  { name: "Honda", src: "/honda.png" },
  { name: "Bajaj", src: "/bajaj.png" },
  { name: "TVS", src: "/tvs.png" },
  { name: "Royal Enfield", src: "/royalenfield.png" },
  { name: "Yamaha", src: "/yamaha.png" },
  { name: "KTM", src: "/ktm.png" },
  { name: "Ather", src: "/ather.png" },
  { name: "Ola Electric", src: "/ola.png" },
  { name: "Revolt", src: "/revolt.png" },
  { name: "Ultraviolette", src: "/ultraviolette.png" },
  { name: "Tork Motors", src: "/tork.png" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function BrandsSection() {
  return (
    <section className="min-h-screen bg-white py-24 px-6">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h2
          className="mb-12"
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontSize: "42px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#222222",
            lineHeight: "1.2",
          }}
          variants={fadeIn}
        >
          LOREM IPSUM DOLOR SIT AMET <br />
          CONSECTETUR COMMODO LEO AMET.
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-items-center">
          {logos.map((brand, i) => (
            <motion.div
              key={brand.name}
              className="w-full flex items-center justify-center"
              custom={i}
              variants={fadeIn}
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
