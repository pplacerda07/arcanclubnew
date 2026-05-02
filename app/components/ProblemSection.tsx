"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const problems = [
  {
    number: "01",
    title: "Culpar a Genética",
    description:
      "A maioria das pessoas acredita que aparência é algo com que você nasce. Usam isso como desculpa para não agir e ficam anos esperando um milagre que nunca vem. A genética define o ponto de partida, não o destino.",
    consequence: "Resultado: anos sem mudança, frustração acumulada.",
  },
  {
    number: "02",
    title: "Esperar pela Cirurgia",
    description:
      "Cirurgia é cara, arriscada e não resolve tudo. Enquanto isso, pessoas ao redor aplicam técnicas simples e transformam a própria aparência sem passar por um bisturi. Você não precisa esperar nem se endividar para mudar.",
    consequence: "Resultado: postergação infinita, dinheiro desperdiçado.",
  },
  {
    number: "03",
    title: "Seguir Modinha sem Método",
    description:
      "Todo mês surge uma nova tendência viral. Você testa, não vê resultado em 3 dias e abandona. Sem um sistema estruturado e comprovado, qualquer esforço vira energia desperdiçada. Você fica no mesmo lugar.",
    consequence: "Resultado: ciclo de tentativas sem progresso real.",
  },
]

export default function ProblemSection() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const prev = () => setActive((a) => (a - 1 + problems.length) % problems.length)
  const next = () => setActive((a) => (a + 1) % problems.length)

  return (
    <section ref={ref} className="py-24 px-4 bg-[#121212] overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#B28B52] text-xs font-bold uppercase tracking-[0.3em]">Por que você não avança</span>
          <h2 className="text-[#C5C5C5] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
            Você Está Cometendo{" "}
            <span className="text-[#B28B52]">Esses Erros?</span>
          </h2>
        </motion.div>

        {/* Cards desktop */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#1a1a1a] border border-[#B28B52]/20 rounded-2xl p-8 hover:border-[#B28B52]/40 transition-colors"
            >
              <div className="text-[#B28B52]/30 text-6xl font-black mb-4 leading-none">
                #{p.number}
              </div>
              <h3 className="text-[#C5C5C5] text-xl font-bold mb-4">{p.title}</h3>
              <p className="text-[#C5C5C5]/60 text-sm leading-relaxed mb-6">{p.description}</p>
              <div className="border-t border-[#B28B52]/20 pt-4">
                <p className="text-[#B28B52] text-sm font-medium">{p.consequence}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cards mobile carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-[#1a1a1a] border border-[#B28B52]/20 rounded-2xl p-8"
              >
                <div className="text-[#B28B52]/30 text-6xl font-black mb-4 leading-none">
                  #{problems[active].number}
                </div>
                <h3 className="text-[#C5C5C5] text-xl font-bold mb-4">{problems[active].title}</h3>
                <p className="text-[#C5C5C5]/60 text-sm leading-relaxed mb-6">{problems[active].description}</p>
                <div className="border-t border-[#B28B52]/20 pt-4">
                  <p className="text-[#B28B52] text-sm font-medium">{problems[active].consequence}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#B28B52]/30 flex items-center justify-center text-[#B28B52] hover:bg-[#B28B52]/10 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {problems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-[#B28B52] w-6" : "bg-[#B28B52]/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#B28B52]/30 flex items-center justify-center text-[#B28B52] hover:bg-[#B28B52]/10 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
