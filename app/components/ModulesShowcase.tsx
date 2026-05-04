"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"

const modules = [
  {
    id: "debloat",
    label: "Projeto Debloat",
    tag: "Mais Pedido",
    image: "/projeto-debloat-new.png",
    description:
      "O protocolo que destrói o inchaço facial em dias. Drenagem forçada, reposicionamento estrutural e rotinas que esculpem seu rosto como bisturi — sem tocar em um.",
    benefits: [
      "Inchaço eliminado em 5-7 dias",
      "Modulação facial completa",
      "Zero equipamentos necessários",
      "Garantia incondicional de 14 dias",
    ],
  },
]

export default function ModulesShowcase() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="modulos" className="py-24 px-4 bg-[#121212]">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#B28B52] text-xs font-bold uppercase tracking-[0.3em]">O que você recebe</span>
          <h2 className="text-[#C5C5C5] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
            O Arsenal Científico.{" "}
            <span className="text-[#B28B52]">Zero Enrolação.</span>
          </h2>
          <p className="text-[#C5C5C5]/60 mt-4 max-w-xl mx-auto">
            Cada módulo foi desenvolvido para atacar um ponto específico. Juntos, formam o sistema completo.
          </p>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="bg-[#1a1a1a] border border-[#23363C]/40 rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image side */}
              <div className="flex items-center justify-center p-10 bg-gradient-to-br from-[#23363C]/10 to-[#121212] border-b md:border-b-0 md:border-r border-[#23363C]/30">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#B28B52]/10 rounded-xl blur-2xl" />
                  <Image
                    src={modules[active].image}
                    alt={modules[active].label}
                    width={220}
                    height={320}
                    className="relative drop-shadow-2xl rotate-[-4deg] hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Info side */}
              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#121212] bg-[#B28B52] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {modules[active].tag}
                  </span>
                </div>

                <h3 className="text-[#C5C5C5] text-2xl md:text-3xl font-extrabold mb-4">
                  {modules[active].label}
                </h3>

                <p className="text-[#C5C5C5]/60 text-base leading-relaxed mb-8">
                  {modules[active].description}
                </p>

                <div className="space-y-3">
                  {modules[active].benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#B28B52]/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#B28B52]" />
                      </div>
                      <span className="text-[#C5C5C5]/80 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
