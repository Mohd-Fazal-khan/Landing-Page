import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="page-container mx-auto max-w-[60rem] py-12 md:py-20">
      <h2
        className="mb-8 md:mb-16 text-center"
        style={{
          fontFamily: "'Roboto Condensed', sans-serif",
          fontSize: "42px",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "#222222",
        }}
      >
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        {[
          "Lorem ipsum dolor sit amet consectetur?",
          "Lorem ipsum dolor sit amet consectetur?",
          "Lorem ipsum dolor sit amet consectetur?",
          "Lorem ipsum dolor sit amet consectetur?",
          "Lorem ipsum dolor sit amet consectetur?",
        ].map((question, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger
              className="text-left"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#222222",
              }}
            >
              {question}
            </AccordionTrigger>
            <AccordionContent
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                color: "#222222",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet
              morbi suspendisse convallis. Urna a urna lectus donec felis risus
              duis pellentesque. Pellentesque ultricies ipsum.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
