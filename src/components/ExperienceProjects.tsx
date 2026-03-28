"use client";

import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Shield, Users } from "lucide-react";

export default function ExperienceProjects() {
  const projects = [
    {
      title: "Machine Learning: Cancer Prediction",
      year: "2025",
      points: [
        "Single-cell RNA sequencing verisi kullanarak kanserli hücre tahmini",
        "Python (NumPy, pandas, scikit-learn) ile veri ön işleme, feature selection ve modelleme",
        "Yüksek doğrulukta tahminler elde edildi ve sonuçlar görselleştirildi",
      ],
      icon: <FolderGit2 className="w-6 h-6 text-accent" />
    },
    {
      title: "Statistics: Mean Age Analysis",
      year: "2025",
      points: [
        "WHO ve Our World in Data datasetleri ile analiz",
        "R kullanarak multivariate regression ve model seçimi uygulaması",
        "Sosyo-ekonomik faktörler ile yaş ortalaması arasındaki ilişkilerin incelenmesi",
      ],
      icon: <FolderGit2 className="w-6 h-6 text-accent" />
    }
  ];

  const involvements = [
    { title: "Prof. Dr. Nihat Berker ile Quantum Mechanics", role: "Asistanlık" },
    { title: "Women in STEM", role: "Proje Üyesi" },
    { title: "Hephaestus Applied AI Assoc.", role: "Academy Üyesi" },
    { title: "CMS Physics Masterclass", role: "Katılım" },
  ];

  const leadership = [
    { title: "AI & IT Coordinator", org: "Universal Rotaract (AI dijital dergi)" },
    { title: "Mentor & PR Manager", org: "FIRST Robotics Competition" },
    { title: "Başkan", org: "STEM Club" },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-end gap-4 mb-16">
            <div className="h-[1px] flex-1 bg-gradient-to-l from-accent/50 to-transparent"></div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-accent text-right">
              &lt;Deneyim & Projeler /&gt;
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Featured Projects */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <FolderGit2 className="text-accent" /> Öne Çıkan Projeler
              </h3>
              <div className="space-y-6">
                {projects.map((proj, idx) => (
                  <div key={idx} className="glass-card p-6 futuristic-border group">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-accent group-hover:text-accent-light transition-colors">{proj.title}</h4>
                      <span className="text-xs font-mono bg-accent/20 text-accent px-2 py-1 rounded">[{proj.year}]</span>
                    </div>
                    <ul className="space-y-2">
                      {proj.points.map((point, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-accent mt-1">▹</span> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic, Leadership & Volunteering */}
            <div className="space-y-12">
              
              {/* Academic */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Shield className="text-accent" /> Akademik & Teknik
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {involvements.map((inv, idx) => (
                    <div key={idx} className="border border-accent/20 p-4 bg-earth-800/50 hover:bg-accent/10 transition-colors">
                      <div className="text-xs text-accent uppercase mb-1">{inv.role}</div>
                      <div className="font-semibold text-foreground/90">{inv.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Users className="text-accent" /> Liderlik
                </h3>
                <div className="space-y-4">
                  {leadership.map((lead, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-accent/10 pb-2">
                      <span className="font-bold text-accent">{lead.title}</span>
                      <span className="text-sm text-foreground/60 text-right">{lead.org}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volunteering */}
              <div className="glass-card p-6 border-l-2 border-l-accent uppercase text-xs tracking-wider">
                <strong className="text-accent block mb-2 text-sm bg-earth-900 inline-block px-2">Sosyal & Gönüllülük:</strong>
                <p className="text-foreground/70 leading-relaxed">
                  Italian Tech Week // Bocconi Turkish Students Association // 
                  STEM Eğitimi // Kanserle Dans Vakfı (Organizasyon desteği) // 
                  ACI Klasik Müzik Orkestrası (Keman)
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
