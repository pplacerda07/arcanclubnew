"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { CheckCircle, ShieldCheck, MessageSquare, Zap } from "lucide-react"

const CHECKOUT_URL = "https://arkan-club.mycartpanda.com/checkout/186242508:1"

function trackLead() {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    ;(window as any).fbq("track", "Lead")
  }
}

const benefits = [
  "Projeto Debloat: protocolo anti-inchaço",
  "Face Training: exercícios de tonificação",
  "Rotina AM/PM: consistência diária",
  "Dry Cut: definição e estrutura",
  "Skin Care: rotina mínima e eficaz",
  "Acesso imediato após a compra",
  "Garantia de 7 dias",
  "Suporte no WhatsApp",
]

export default function Offer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 bg-[#121212] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B28B52]/30 to-transparent" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#B28B52]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#B28B52] text-xs font-bold uppercase tracking-[0.3em]">Oferta</span>
            <h2 className="text-[#C5C5C5] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">
              Pare de Perder Tempo.{" "}
              <span className="text-[#B28B52]">Sua Vez.</span>
            </h2>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] border border-[#B28B52]/30 rounded-2xl overflow-hidden shadow-2xl shadow-[#B28B52]/5"
          >
            <div className="grid md:grid-cols-2">
              {/* Left: mockup + price */}
              <div className="p-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#23363C]/10 to-[#121212] border-b md:border-b-0 md:border-r border-[#B28B52]/20">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-[#B28B52]/15 rounded-full blur-3xl" />
                  <Image
                    src="/projeto-debloat-new.png"
                    alt="Método Frost"
                    width={200}
                    height={280}
                    className="relative drop-shadow-2xl rotate-[-6deg] hover:rotate-0 transition-transform duration-500"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#C5C5C5]/50 text-sm mb-1">acesso completo ao método</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-[#C5C5C5]/40 text-lg">R$</span>
                    <span className="text-[#B28B52] text-6xl font-black">27</span>
                    <span className="text-[#B28B52] text-3xl font-black">,90</span>
                  </div>

                  <div className="mt-2 flex items-center justify-center gap-2">
                    <Zap size={14} className="text-[#B28B52]" />
                    <span className="text-[#B28B52] text-xs font-semibold">Acesso Liberado Hoje</span>
                  </div>
                </div>
              </div>

              {/* Right: benefits + CTA */}
              <div className="p-10">
                <h3 className="text-[#C5C5C5] text-xl font-bold mb-6">O que você leva:</h3>

                <div className="space-y-3 mb-8">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#B28B52] mt-0.5 shrink-0" />
                      <span className="text-[#C5C5C5]/70 text-sm">{b}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => { trackLead(); window.open(CHECKOUT_URL, "_blank") }}
                  className="w-full bg-[#B28B52] hover:bg-[#B28B52]/90 text-[#121212] font-bold text-base py-4 rounded-md transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#B28B52]/20 mb-4"
                >
                  ACESSAR PROTOCOLO AGORA
                </button>

                <div className="flex items-center justify-center gap-4 text-xs text-[#C5C5C5]/40">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-[#B28B52]" />
                    <span>Pagamento seguro</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageSquare size={13} className="text-[#B28B52]" />
                    <span>Suporte WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
