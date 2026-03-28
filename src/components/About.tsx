"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Database, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-accent">
              &lt;Hakkımda /&gt;
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Bio Text Space */}
            <div className="lg:col-span-7 glass-card p-8 rounded-none border-l-4 border-l-accent relative group">
              <div className="absolute top-0 right-0 p-2 bg-accent text-earth-900 text-xs font-bold uppercase">
                Sistem.Günlüğü
              </div>
              <Terminal className="text-accent/30 w-12 h-12 absolute -top-4 -left-4 bg-earth-900" />
              <p className="text-lg text-foreground/80 leading-relaxed mt-6 mb-4">
                Yapay zeka ve veri odaklı problem çözme üzerine yoğunlaşan bir öğrenciyim.
                Özellikle makine öğrenmesi, veri analizi ve bilimsel uygulamalar
                üzerinden gerçek dünya problemlerini çözmek ilgimi çekiyor.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Bocconi Üniversitesi’nden <strong className="text-accent">%100 başarı bursuyla</strong> kabul aldım ve
                eğitimime devam ediyorum. Akademik çalışmalarımda hem teorik hem de
                uygulamalı projelerde yer alarak veri odaklı içgörüler üretmeye 
                odaklanıyorum.
              </p>
            </div>

            {/* Quick Stats / Areas of Interest */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-6 flex flex-col items-center justify-center text-center futuristic-border hover:-translate-y-2 transition-transform">
                <BrainCircuit className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-bold text-accent">Makine Öğrenmesi</h3>
                <p className="text-sm text-foreground/60 mt-2">Tahmine Dayalı Modeller</p>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center text-center futuristic-border hover:-translate-y-2 transition-transform">
                <Database className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-bold text-accent">Veri Analizi</h3>
                <p className="text-sm text-foreground/60 mt-2">Gerçek dünya içgörüleri elde etme</p>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center text-center futuristic-border hover:-translate-y-2 transition-transform sm:col-span-2">
                <Code className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-bold text-accent">Problem Çözme</h3>
                <p className="text-sm text-foreground/60 mt-2">Bilimsel uygulamalar ve araştırmalar</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
