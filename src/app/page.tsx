"use client";
import dynamic from "next/dynamic";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MarqueeTicker from "@/components/sections/MarqueeTicker";

// Lazy load sections below the fold for better performance
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => <div style={{ minHeight: "50vh" }} />,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  loading: () => <div style={{ minHeight: "50vh" }} />,
});
const Process = dynamic(() => import("@/components/sections/Process"), {
  loading: () => <div style={{ minHeight: "40vh" }} />,
});
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  loading: () => <div style={{ minHeight: "40vh" }} />,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div style={{ minHeight: "40vh" }} />,
});

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <Projects />
      <Skills />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
