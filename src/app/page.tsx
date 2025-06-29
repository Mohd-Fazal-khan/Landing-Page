// src/app/page.tsx
export const metadata = {
  title: "Motorcycle Experiences & Services | Best Rides, Tours & Deals",
  description:
    "Discover the best motorcycle experiences, tours, and services. Book your next adventure, find top brands, and connect with passionate riders.",
  keywords:
    "motorcycle, tours, rides, services, brands, adventure, booking, experiences",
  openGraph: {
    title: "Motorcycle Experiences & Services",
    description:
      "Discover the best motorcycle experiences, tours, and services.",
    url: "https://my.com/",
    type: "website",
    images: [
      {
        url: "https://my.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Motorcycle Adventure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Motorcycle Experiences & Services",
    description:
      "Discover the best motorcycle experiences, tours, and services.",
    images: ["https://my.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://my.com/",
  },
};

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

import Faq from "@/components/Faq";
import CTA from "@/components/Cta";

import Feature from "@/components/Feature";
import Highlight from "@/components/Highlight";
import Banner from "@/components/Banner";
import BrandsSection from "@/components/BrandsSection";
import Cardsection from "@/components/Cardsection";
import BannerTwo from "@/components/BannerTwo";
import Mockup from "@/components/Mockup";
import BikerJourneySection from "@/components/BikerJourneySection";
import Testimonial from "@/components/Testimonial";
import Partnership from "@/components/Partnership";
import ProductOverview from "@/components/ProductOverview";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Feature />
      <Highlight />
      <Banner />
      <BrandsSection />
      <Cardsection />
      <BannerTwo />
      <ContactForm />
      <Mockup />
      <GallerySection />
      <BikerJourneySection />
      <Testimonial />
      <Partnership />
      <ProductOverview />
      <ServicesSection />
      <Faq />
      <CTA />
      <Footer />
    </>
  );
}
