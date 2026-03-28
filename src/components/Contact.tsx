"use client";

import { motion } from "framer-motion";
import { Mail, ChevronRight, User, Globe, MousePointerClick } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background glow for contact */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-earth-800 rounded-full mb-6 border border-accent/20 hover:border-accent transition-colors">
            <Mail className="w-8 h-8 text-accent animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase text-foreground">
            İLETİŞİM <span className="text-accent underline decoration-accent/30 underline-offset-8">KUR</span>
          </h2>
          
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto">
            Yeni projeler, akademik çalışmalar veya sadece fikir alışverişi için benimle iletişime geçebilirsiniz.
          </p>

          <a 
            href="mailto:seb.kur2004@gmail.com"
            className="inline-flex items-center gap-4 bg-accent text-earth-900 px-8 py-4 rounded font-bold hover:bg-accent-light transition-all text-lg group hover:scale-105"
          >
            <span>seb.kur2004@gmail.com</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Social Links placeholder */}
          <div className="mt-16 pt-10 border-t border-accent/10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm font-mono text-foreground/50">
              © {new Date().getFullYear()} Şebnem Kurban. <br/> Built with Next.js + Tailwind CSS.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-earth-800 rounded-full border border-earth-700 hover:border-accent text-foreground hover:text-accent transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-earth-800 rounded-full border border-earth-700 hover:border-accent text-foreground hover:text-accent transition-colors">
                <User className="w-5 h-5" />
              </a>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
