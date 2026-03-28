"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Languages, BookOpen, Music, Target } from "lucide-react";

export default function SkillsHobbies() {
  const skills = [
    "Python", "C", "R", "Veri Analizi", "Makine Öğrenmesi", "Microsoft Office", "Adobe Photoshop"
  ];

  const langs = [
    { name: "Türkçe", level: "Ana dil" },
    { name: "İngilizce", level: "C2" },
    { name: "Almanca", level: "B1" },
    { name: "İtalyanca", level: "A2" },
  ];

  const hobbies = [
    { title: "Sürekli Öğrenme", desc: "Bilim, teknoloji ve kişisel gelişim odaklı kitaplar", icon: <BookOpen className="w-6 h-6 text-accent mb-2" /> },
    { title: "Müzik Eğitimi", desc: "Keman ve mandolin eğitimi, disiplin ve yaratıcılık", icon: <Music className="w-6 h-6 text-accent mb-2" /> },
    { title: "Spor Stratejisi", desc: "Futbol, takım stratejileri ve rekabet dinamikleri", icon: <Target className="w-6 h-6 text-accent mb-2" /> },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-earth-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-accent">
              &lt;Yetenekler /&gt;
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Technical Skills Map */}
            <div className="lg:col-span-2 glass-card p-8 border-t-2 border-t-accent futuristic-border">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-6 uppercase tracking-wider text-accent-light">
                <Terminal className="text-accent" /> Teknoloji Yığını
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-earth-800 px-4 py-2 border border-accent/30 text-foreground text-sm font-semibold rounded group hover:bg-accent hover:text-earth-900 transition-colors cursor-default"
                  >
                    <span className="text-accent group-hover:text-earth-900 mr-2">/</span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card p-8 futuristic-border border-b-2 border-b-accent">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-6 uppercase tracking-wider text-accent-light">
                <Languages className="text-accent" /> Diller
              </h3>
              <div className="space-y-4">
                {langs.map((lang, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-earth-700 pb-2">
                    <span className="text-foreground/90 font-semibold">{lang.name}</span>
                    <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies / Interests Row */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {hobbies.map((hobby, i) => (
                <div key={i} className="glass-card p-6 flex flex-col items-start border-l border-accent/20 hover:border-accent hover:bg-earth-800 transition-colors">
                  {hobby.icon}
                  <h4 className="font-bold text-lg text-foreground mb-2 mt-2">{hobby.title}</h4>
                  <p className="text-sm text-foreground/70">{hobby.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
