"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Highlight = () => {
  const features = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      desc: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      desc: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      desc: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-2 px-4 lg:px-8">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-[90rem] w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-6 lg:p-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <p
                className="mb-2"
                style={{
                  color: "#1959AC",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                Lorem ipsum dolor sit amet
              </p>
              <h2
                className="leading-snug"
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontSize: "42px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#222222",
                }}
              >
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR.
                <br />
                EU ELIT.
              </h2>
            </div>

            <p
              style={{
                color: "#222222",
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                letterSpacing: "-0.02em",
              }}
              className="max-w-2xl"
            >
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
              leo eleifend condimentum in vitae faucibus. Amet massa malesuada
              sit pretium. Donec pharetra erat lacus suspendisse ornare.
            </p>

            <div className="space-y-8">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <Image
                      src="/sectiontwologo.png"
                      alt="icon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4
                      className="mb-1"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        color: "#222222",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        color: "#222222",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[40rem]"
          >
            <Image
              src="/sectiontwoimg.png"
              alt="Business people"
              fill
              className="rounded-xl shadow-xl object-cover"
              priority
            />
          </motion.div>
        </div>

        <div className="h-3 bg-gradient-to-r from-[#1959AC] via-[#0546D2] to-purple-600 w-full"></div>
      </div>
    </div>
  );
};

export default Highlight;
