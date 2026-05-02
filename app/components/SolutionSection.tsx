"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { X, Check } from "lucide-react"

const comparisons = [
  {
    others: "Resultados só com cirurgia",
    frost: "Transformação sem bisturi",
  },
  {
    common: "Resultados limitados pela genética",
    frost: "Técnica supera genética",
  },
  {
    common: "Meses para ver alguma diferença",
    frost: "14 dias para diferença visível",
  },
  {
    common: "Tentativas frustrantes e sem padrão",
    frost: "Sistema testado e comprovado",
  },
  {
    common: "Dependência de procedimentos",
    frost: "Só rosto, espelho e disciplina",
  },
]

export default function SolutionSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="metodo" className="py-24 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#121212] relative overflow-hidden">
      {/* bg orbs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#B28B52]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#23363C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#B28B52] text-xs font-bold uppercase tracking-[0.3em]">A diferença real</span>
            <h2 className="text-[#C5C5C5] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 mb-6">
              O Que o Método Frost Faz{" "}
              <span className="text-[#B28B52]">Que Nenhuma Outra Abordagem Faz</span>
            </h2>
            <p className="text-[#C5C5C5]/60 text-lg max-w-2xl mx-auto">
              Não é um truque de internet. É uma sequência usada por círculos fechados de otimização estética.
              Agora acessível e direta.
            </p>
          </motion.div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] rounded-2xl border border-[#23363C]/40 overflow-hidden"
          >
            {/* Table header */}
            <div className="grid grid-cols-2 bg-[#121212] border-b border-[#23363C]/40">
              <div className="px-6 py-4 text-center text-[#C5C5C5]/50 text-sm font-semibold uppercase tracking-wider">
                Outros métodos
              </div>
              <div className="px-6 py-4 text-center text-[#B28B52] text-sm font-semibold uppercase tracking-wider border-l border-[#B28B52]/20">
                Método Frost
              </div>
            </div>

            {comparisons.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="grid grid-cols-2 border-b border-[#23363C]/20 last:border-0 hover:bg-[#23363C]/5 transition-colors"
              >
                <div className="px-6 py-5 flex items-center gap-3">
                  <X size={16} className="text-red-500/60 shrink-0" />
                  <span className="text-[#C5C5C5]/50 text-sm">{c.others}</span>
                </div>
                <div className="px-6 py-5 flex items-center gap-3 border-l border-[#B28B52]/10">
                  <Check size={16} className="text-[#B28B52] shrink-0" />
                  <span className="text-[#C5C5C5] text-sm font-medium">{c.frost}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 text-center bg-gradient-to-r from-[#23363C]/10 via-[#B28B52]/10 to-[#23363C]/10 border border-[#B28B52]/30 rounded-xl p-8"
          >
            <p className="text-[#B28B52] text-xl md:text-2xl font-bold mb-3">
              É pra quem tá disposto a pagar o preço da transformação.
            </p>
            <p className="text-[#C5C5C5]/70 text-base">
              Com técnica, foco e execução. Sem bisturi. Sem desculpa. Sem genética como muleta.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
