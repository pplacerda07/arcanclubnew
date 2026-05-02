"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShieldCheck } from "lucide-react"

export default function Guarantee() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-[#121212]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[#B28B52]/20 rounded-full blur-2xl" />
              <div className="relative w-28 h-28 rounded-full border-2 border-[#B28B52] flex flex-col items-center justify-center bg-[#1a1a1a]">
                <ShieldCheck size={32} className="text-[#B28B52] mb-1" />
                <span className="text-[#B28B52] text-xs font-black uppercase tracking-wide leading-tight text-center">
                  7 Dias<br />Garantia
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-[#C5C5C5] text-3xl md:text-4xl font-extrabold mb-4">
            7 Dias Para Mudar.{" "}
            <span className="text-[#B28B52]">Ou Devolvemos Tudo.</span>
          </h2>

          <p className="text-[#C5C5C5]/60 text-base leading-relaxed max-w-xl mx-auto mb-8">
            Se em 7 dias você aplicar o método e não ver absolutamente nenhuma diferença, devolvemos 100% do valor. Sem
            perguntas, sem burocracia, sem enrolação.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Sem perguntas", "Sem burocracia", "100% do valor"].map((item, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] border border-[#B28B52]/20 rounded-xl py-4 px-6"
              >
                <span className="text-[#B28B52] font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
