"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, X } from "lucide-react"

const forWho = [
  "Homens que sentem o rosto constantemente inchado, retido ou sem definição.",
  "Quem quer marcar a linha da mandíbula de forma natural, sem agulhas.",
  "Pessoas que treinam, fazem dieta, mas o rosto continua redondo.",
  "Homens dispostos a dedicar 15 minutos diários para a própria aparência.",
  "Quem busca um resultado permanente, fortalecendo a estrutura facial."
]

const notForWho = [
  "Quem busca uma 'pílula mágica' ou cirurgia que resolve tudo amanhã.",
  "Pessoas sem disciplina para seguir uma rotina básica de exercícios.",
  "Quem prefere gastar milhares de reais em procedimentos temporários.",
  "Homens que acham que cuidar da estética facial não é importante.",
]

export default function TargetAudienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 bg-[#1a1a1a]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#B28B52] text-xs font-bold uppercase tracking-[0.3em]">Alinhamento</span>
          <h2 className="text-[#C5C5C5] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
            Para quem é o <span className="text-[#B28B52]">Método Frost?</span>
          </h2>
          <p className="text-[#C5C5C5]/60 mt-4 max-w-2xl mx-auto text-lg">
            Nós não queremos o seu dinheiro se o método não for para você. Veja exatamente quem se beneficia do nosso protocolo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Para Quem É */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#121212] border border-[#B28B52]/40 rounded-2xl p-8 md:p-10 shadow-lg shadow-[#B28B52]/5"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#B28B52]/20 p-2 rounded-lg text-[#B28B52]">
                <Check size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#C5C5C5]">O Método É Para Você Se:</h3>
            </div>
            <ul className="space-y-5">
              {forWho.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-[#B28B52] shrink-0 mt-0.5" />
                  <span className="text-[#C5C5C5]/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Para Quem Não É */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#121212] border border-red-900/30 rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-500/10 p-2 rounded-lg text-red-500">
                <X size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#C5C5C5]">Não Compre Se:</h3>
            </div>
            <ul className="space-y-5">
              {notForWho.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X size={20} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="text-[#C5C5C5]/60 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
