"use client";

import { motion } from "framer-motion";
import { ArrowDown, Cpu, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-accent text-sm mb-8 futuristic-border"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI & Data Science Student</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
          >
            ŞEBNEM <span className="text-accent border-b-2 border-accent/30 border-dashed">KURBAN</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-earth-900 bg-accent/90 px-6 py-3 rounded-lg font-semibold max-w-2xl mb-12 shadow-[0_0_20px_rgba(196,164,130,0.3)]"
          >
            Bocconi Üniversitesi – Yapay Zeka için Matematik ve Bilgisayar Bilimleri, 3. Sınıf
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 bg-accent text-earth-900 px-8 py-4 rounded-none font-bold hover:bg-accent-light transition-all hover:shadow-[0_0_20px_rgba(196,164,130,0.5)] transform hover:-translate-y-1"
            >
              <Cpu className="w-5 h-5" />
              Projeleri İncele
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-transparent text-accent border border-accent/40 px-8 py-4 rounded-none font-bold hover:bg-accent/10 transition-all"
            >
              İletişime Geç
            </a>
          </motion.div>
        </div>

        {/* Right Image Container */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
           className="relative flex-shrink-0"
        >
          {/* Decorative scanner lines and borders behind image */}
          <div className="absolute inset-0 bg-accent/20 rounded blur-xl transform scale-110"></div>
          <div className="absolute -inset-4 border border-accent/30 rounded z-0 futuristic-border hidden md:block"></div>
          
          <div className="relative z-10 w-64 h-80 md:w-80 md:h-[400px] overflow-hidden rounded border border-accent/50 filter sepia-[0.3] hover:sepia-0 transition-all duration-500 shadow-[0_0_40px_rgba(196,164,130,0.2)]">
             <Image 
                src="/portre.jpg" 
                alt="Şebnem Kurban Portrait" 
                fill 
                className="object-cover object-center"
                priority
             />
             <div className="absolute inset-0 bg-earth-900/10 hover:bg-transparent transition-colors mix-blend-overlay"></div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-accent/50"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
}
