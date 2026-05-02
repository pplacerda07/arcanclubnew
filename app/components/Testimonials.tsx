"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Lucas M.",
    location: "São Paulo, SP",
    time: "3 semanas atrás",
    text: "Comecei duvidando, mas na segunda semana já dava pra ver diferença no inchaço do rosto. O Projeto Debloat é absurdamente simples e funcional. Segui o método e me arrependo só de não ter feito antes.",
    result: "−inchaço facial em 8 dias",
    stars: 5,
  },
  {
    name: "Thiago R.",
    location: "Belo Horizonte, MG",
    time: "1 mês atrás",
    text: "Sempre achei que minha genética era o problema. O método me provou errado. A rotina AM/PM + Dry Cut juntos fizeram mais em 30 dias do que qualquer produto caro que já comprei.",
    result: "Mandíbula definida em 30 dias",
    stars: 5,
  },
  {
    name: "Caio V.",
    location: "Rio de Janeiro, RJ",
    time: "2 semanas atrás",
    text: "Simples, direto, sem enrolação. Exatamente o que estava procurando. O Face Training parece coisa boba mas quando você vê o resultado no espelho entende porque funcionou em círculos fechados lá fora.",
    result: "+definição no contorno em 14 dias",
    stars: 5,
  },
  {
    name: "Pedro A.",
    location: "Curitiba, PR",
    time: "5 semanas atrás",
    text: "Não sou de deixar review mas esse merece. R$ 20,99 pelo conteúdo que tem aqui é uma aberração. Passei anos comprando coisa cara achando que era o produto, mas era o método que tava errado.",
    result: "Ciclo completo concluído",
    stars: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="depoimentos" className="py-24 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#B28B52] text-xs font-bold uppercase tracking-[0.3em]">Depoimentos</span>
          <h2 className="text-[#C5C5C5] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
            O que as pessoas falam{" "}
            <span className="text-[#B28B52]">sobre o método.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-[#1a1a1a] border border-[#23363C]/40 rounded-2xl p-6 hover:border-[#B28B52]/30 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#B28B52] fill-[#B28B52]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#C5C5C5]/70 text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Result badge */}
              <div className="bg-[#B28B52]/10 border border-[#B28B52]/20 rounded-lg px-3 py-2 mb-5 inline-block">
                <span className="text-[#B28B52] text-xs font-bold">{t.result}</span>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-[#23363C]/30 pt-4">
                <div>
                  <p className="text-[#C5C5C5] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#C5C5C5]/40 text-xs">{t.location}</p>
                </div>
                <span className="text-[#C5C5C5]/30 text-xs">{t.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
