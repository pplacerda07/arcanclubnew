"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, ShieldCheck } from "lucide-react"

const CHECKOUT_URL = "https://arkan-club.mycartpanda.com/checkout/186242508:1"

function trackLead() {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    ;(window as any).fbq("track", "Lead")
  }
}

const summary = [
  "5 módulos completos do protocolo",
  "Acesso imediato após a compra",
  "Método testado e comprovado",
  "Garantia de 7 dias",
  "Suporte no WhatsApp",
]

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#121212] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#B28B52]/3 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B28B52]/30 to-transparent" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-[#B28B52] text-xs font-bold uppercase tracking-[0.3em]">Última chance</span>

          <h2 className="text-[#C5C5C5] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-6">
            Transforme Sua Aparência.{" "}
            <span className="text-[#B28B52]">Comece Hoje.</span>
          </h2>

          <p className="text-[#C5C5C5]/60 text-base mb-10">
            Você já sabe o que está faltando. Agora é só dar o passo. O método está aqui. O resto é com você.
          </p>

          {/* Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left max-w-md mx-auto">
            {summary.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#B28B52] shrink-0" />
                <span className="text-[#C5C5C5]/70 text-sm">{s}</span>
              </div>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="bg-[#1a1a1a] border border-[#B28B52]/30 rounded-2xl p-8 mb-6">
            <p className="text-[#C5C5C5]/50 text-sm mb-2">acesso completo</p>
            <div className="flex items-baseline justify-center gap-1 mb-6">
              <span className="text-[#C5C5C5]/40 text-xl">R$</span>
              <span className="text-[#B28B52] text-7xl font-black">27</span>
              <span className="text-[#B28B52] text-4xl font-black">,90</span>
            </div>

            <button
              onClick={() => { trackLead(); window.open(CHECKOUT_URL, "_blank") }}
              className="w-full bg-[#B28B52] hover:bg-[#B28B52]/90 text-[#121212] font-bold text-lg py-5 rounded-md transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-[#B28B52]/20 mb-4"
            >
              ACESSAR PROTOCOLO AGORA
            </button>

            <div className="flex items-center justify-center gap-2">
              <ShieldCheck size={14} className="text-[#B28B52]" />
              <span className="text-[#C5C5C5]/40 text-xs">Pagamento 100% seguro · Garantia de 7 dias</span>
            </div>
          </div>

          <p className="text-[#C5C5C5]/30 text-xs">
            Foi testado por pessoas que estavam cansadas de parecer comuns.{" "}
            <span className="text-[#B28B52]/60">E funcionou porque eles fizeram o necessário.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
