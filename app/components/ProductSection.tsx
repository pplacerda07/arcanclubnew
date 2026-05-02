"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const volumes = [
  {
    badge: "Comece Aqui",
    title: "Protocolo Base",
    subtitle: "A fundação do método",
    image: "/projeto-debloat-new.png",
    description:
      "O ponto de entrada obrigatório. Entende o mecanismo, aplica as primeiras técnicas e vê as primeiras mudanças. Sem isso, nada mais funciona.",
    modules: ["Projeto Debloat", "Face Training", "Rotina AM/PM"],
  },
  {
    badge: "Potencialize",
    title: "Método Avançado",
    subtitle: "Refinamento e aceleração",
    image: "/dry-cut-ebook.png",
    description:
      "Para quem já sentiu a primeira mudança e quer acelerar. Técnicas de definição e skin care que combinam com o protocolo base para resultados mais rápidos.",
    modules: ["Dry Cut", "Skin Care", "Método Gringo"],
  },
  {
    badge: "Completo",
    title: "Arsenal Total",
    subtitle: "Tudo junto. Zero enrolação.",
    image: "/impact-ebook.png",
    description:
      "O pacote completo com todos os módulos. Um sistema de ponta a ponta que cobre cada aspecto da transformação estética, do debloat ao refinamento final.",
    modules: ["Todos os 5 módulos", "AM/PM estruturado", "Suporte WhatsApp"],
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
          <span className="text-[#B28B52] text-xs font-bold uppercase tracking-[0.3em]">Estrutura do método</span>
          <h2 className="text-[#C5C5C5] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
            Um Sistema Completo.{" "}
            <span className="text-[#B28B52]">Zero Enrolação.</span>
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
