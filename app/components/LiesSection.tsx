"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { XOctagon, AlertTriangle } from "lucide-react"

const lies = [
  {
    title: "Dieta resolve tudo",
    reality:
      "Dieta tira gordura do corpo, mas retenção hídrica facial, flacidez e falta de tônus muscular não saem com frango e batata doce. Seu rosto precisa de estímulo biomecânico localizado.",
  },
  {
    title: "Cosméticos caros funcionam",
    reality:
      "Cremes agem apenas na superfície. Eles não têm o poder de reestruturar a musculatura, não drenam o inchaço profundo e definitivamente não marcam sua mandíbula. É jogar dinheiro fora esperando um milagre estrutural.",
  },
  {
    title: "Academia muda o rosto",
    reality:
      "Você treina o corpo inteiro, mas ignora os dezenas de músculos do seu rosto. O resultado? Um corpo atlético com um rosto inchado, redondo e sem harmonia. Músculo não treinado atrofia.",
  },
  {
    title: "Perder peso define o maxilar",
    reality:
      "Falso. Emagrecer não garante definição facial se você tem a postura da língua incorreta, respira pela boca e tem os músculos da face fracos. Se perder muito peso sem treinar o rosto, ele apenas 'derrete'.",
  },
]

export default function LiesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 bg-[#121212] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B28B52]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
            <AlertTriangle size={14} />
            Chega de historinha
          </div>
          <h2 className="text-[#C5C5C5] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2">
            As Maiores Mentiras Que <br className="hidden md:block" />
            <span className="text-red-500">Te Contaram Sobre Estética.</span>
          </h2>
          <p className="text-[#C5C5C5]/60 mt-6 max-w-2xl mx-auto text-lg">
            A indústria lucra bilhões com a sua frustração. Eles querem que você acredite que a genética te amaldiçoou ou que o próximo pote de creme vai salvar seu rosto. Acorde.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {lies.map((lie, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1a1a1a] border border-red-900/30 rounded-2xl p-8 relative overflow-hidden group hover:border-red-500/40 transition-colors"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <XOctagon size={100} className="text-red-500" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-500/20 p-2 rounded-lg text-red-500">
                    <XOctagon size={24} />
                  </div>
                  <h3 className="text-[#C5C5C5] text-xl font-bold line-through decoration-red-500 decoration-2">
                    {lie.title}
                  </h3>
                </div>

                <div className="pl-0 md:pl-12">
                  <div className="text-[#B28B52] text-xs font-black uppercase tracking-wider mb-2">A Realidade Nua e Crua:</div>
                  <p className="text-[#C5C5C5]/70 leading-relaxed text-sm">
                    {lie.reality}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
