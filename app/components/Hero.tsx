"use client"

import { motion } from "framer-motion"

const CHECKOUT_URL = "https://arkan-club.mycartpanda.com/checkout/186242508:1"

function trackLead() {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    ;(window as any).fbq("track", "Lead")
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#121212] via-[#121212] to-[#1a1a1a] pt-16">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B28B52]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#23363C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-block mb-8"
        >
          <span className="text-[#B28B52] text-xs font-bold uppercase tracking-[0.3em] border border-[#B28B52]/30 px-4 py-1.5 rounded-full">
            O Método Frost
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-[#C5C5C5] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-8"
        >
          Você Já Tentou de Tudo.{" "}
          <span className="text-[#B28B52]">
            Agora Faça do Jeito Certo.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-[#C5C5C5]/60 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Sem bisturi. Sem desculpa. Sem depender de genética.
          Um sistema testado que entrega o que ninguém mais entrega:
          um novo rosto, uma nova presença.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <button
            onClick={() => { trackLead(); window.open(CHECKOUT_URL, "_blank") }}
            className="bg-[#B28B52] hover:bg-[#B28B52]/90 text-[#121212] font-bold text-base px-10 py-4 rounded-md transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#B28B52]/20"
          >
            Acessar o Protocolo Completo
          </button>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B28B52]/20 to-transparent" />
    </section>
  )
}
