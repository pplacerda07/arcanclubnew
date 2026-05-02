"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const volumes = [
  {
    badge: "Fase 1",
    title: "Desinchaço e Ativação",
    subtitle: "A fundação do método",
    image: "/projeto-debloat-new.png",
    description:
      "O primeiro passo para revelar seu verdadeiro rosto. Foco total em eliminar a retenção hídrica, desinchar e ativar a circulação correta para resultados rápidos.",
    modules: ["Projeto Debloat", "Rotina AM/PM"],
  },
  {
    badge: "Fase 2",
    title: "Estrutura e Definição",
    subtitle: "A base muscular",
    image: "/face-training-ebook.png",
    description:
      "Construção de uma base sólida. Exercícios focados e técnicas de secagem que trabalham a mandíbula, maçãs do rosto e pescoço para criar ângulos marcantes.",
    modules: ["Face Training", "Dry Cut"],
  },
  {
    badge: "Fase 3",
    title: "Refinamento e Lapidação",
    subtitle: "O polimento final",
    image: "/skin-care-ebook.png",
    description:
      "A lapidação completa dos resultados. Cuidados essenciais com a pele e técnicas avançadas que fecham o pacote para manter e maximizar sua nova estrutura.",
    modules: ["Skin Care", "Método Gringo", "Manutenção"],
  },
]

export default function ProductSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 bg-[#1a1a1a]">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#B28B52] text-xs font-bold uppercase tracking-[0.3em]">Jornada Frost</span>
          <h2 className="text-[#C5C5C5] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
            As 3 Fases da{" "}
            <span className="text-[#B28B52]">Transformação.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {volumes.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`bg-[#121212] border rounded-2xl overflow-hidden flex flex-col ${
                i === 2
                  ? "border-[#B28B52]/40 shadow-lg shadow-[#B28B52]/5"
                  : "border-[#23363C]/40"
              }`}
            >
              {/* Badge */}
              <div className={`px-6 py-3 text-xs font-bold uppercase tracking-wider text-center ${
                i === 2 ? "bg-[#B28B52] text-[#121212]" : "bg-[#23363C]/20 text-[#B28B52]"
              }`}>
                {v.badge}
              </div>

              {/* Image */}
              <div className="flex items-center justify-center py-8 bg-gradient-to-b from-[#23363C]/10 to-transparent">
                <Image
                  src={v.image}
                  alt={v.title}
                  width={140}
                  height={180}
                  className="drop-shadow-xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[#B28B52] text-xs font-semibold uppercase tracking-wider mb-1">{v.subtitle}</p>
                <h3 className="text-[#C5C5C5] text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-[#C5C5C5]/50 text-sm leading-relaxed mb-6 flex-1">{v.description}</p>

                <div className="space-y-2 border-t border-[#23363C]/30 pt-4">
                  {v.modules.map((m, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B28B52]" />
                      <span className="text-[#C5C5C5]/70 text-sm">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
