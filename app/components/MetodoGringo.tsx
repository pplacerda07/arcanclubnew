"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Lock, Globe, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Círculos Fechados",
    description:
      "Desenvolvido e testado em comunidades de otimização estética inacessíveis ao público geral. Agora disponível de forma direta e acessível.",
  },
  {
    icon: Globe,
    title: "Validação Internacional",
    description:
      "Técnicas usadas por referências estéticas ao redor do mundo. Resultados que viralizam porque funcionam de verdade, não porque são modinha.",
  },
  {
    icon: TrendingUp,
    title: "Resultados que Escalam",
    description:
      "Cada técnica foi selecionada por ter resultado comprovado em diferentes biotipologias. O que funciona para um, funciona para todos que aplicam corretamente.",
  },
]

export default function MetodoGringo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 bg-[#121212] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B28B52]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Left: image + glow */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#B28B52]/15 rounded-full blur-3xl scale-110" />
              <div className="relative border border-[#B28B52]/20 rounded-2xl p-8 bg-[#1a1a1a]">
                <Image
                  src="/arkan-logo.png"
                  alt="Método Gringo - Frost Club"
                  width={280}
                  height={280}
                  className="drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="text-[#B28B52] text-xs font-bold uppercase tracking-[0.3em]">Origem do método</span>
              <h2 className="text-[#C5C5C5] text-3xl md:text-4xl font-extrabold tracking-tight mt-3 mb-6">
                Método{" "}
                <span className="text-[#B28B52]">Gringo</span>
              </h2>
              <p className="text-[#C5C5C5]/60 text-base leading-relaxed">
                Não é um truque de internet. É uma sequência usada por círculos fechados de otimização estética, agora
                revelada em versão acessível e direta. Os resultados falam por si e viralizam.
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#B28B52]/10 border border-[#B28B52]/20 flex items-center justify-center shrink-0">
                    <f.icon size={18} className="text-[#B28B52]" />
                  </div>
                  <div>
                    <h4 className="text-[#C5C5C5] font-bold text-base mb-1">{f.title}</h4>
                    <p className="text-[#C5C5C5]/50 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
