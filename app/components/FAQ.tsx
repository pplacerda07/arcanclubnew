"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    category: "Resultados",
    items: [
      {
        q: "Quem realmente vê resultado com o método?",
        a: "Quem aplica. Resultado só vem com execução diária e disciplina mínima. O método é direto e exige que você faça sua parte todos os dias.",
      },
      {
        q: "Em quanto tempo vejo diferença real?",
        a: "14 dias já mostram mudança visível. 30 dias fecham o ciclo completo. A consistência acelera tudo. Pular dias atrasa o resultado.",
      },
      {
        q: "Funciona pra qualquer pessoa?",
        a: "Funciona pra quem segue. O método exige ação, não é mágica. Diferentes biotipologias respondem em ritmos distintos, mas o sistema foi testado em uma ampla variedade de perfis.",
      },
    ],
  },
  {
    category: "Sobre o Método",
    items: [
      {
        q: "Preciso de equipamentos ou algo caro?",
        a: "Não. Só seu rosto, espelho e disposição. Nada além disso. Nenhum produto caro, nenhum equipamento especial. Só técnica e consistência.",
      },
      {
        q: "O método é seguro?",
        a: "Completamente. Todas as técnicas são naturais, sem invasão e sem uso de substâncias. São práticas de otimização estética usadas ao redor do mundo, sem nenhum risco à saúde.",
      },
      {
        q: "Como recebo o acesso após a compra?",
        a: "Imediatamente. Após confirmar o pagamento, você recebe o acesso no e-mail cadastrado automaticamente. Sem espera, sem frete, sem complicação.",
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-colors ${
        open ? "border-[#B28B52]/40" : "border-[#23363C]/30"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-[#1a1a1a] hover:bg-[#23363C]/10 transition-colors"
      >
        <span className="text-[#C5C5C5] font-medium text-sm pr-4">{q}</span>
        <div className="shrink-0 w-6 h-6 rounded-full border border-[#B28B52]/30 flex items-center justify-center">
          {open ? (
            <Minus size={12} className="text-[#B28B52]" />
          ) : (
            <Plus size={12} className="text-[#B28B52]" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-4 bg-[#121212] border-t border-[#23363C]/20">
              <p className="text-[#C5C5C5]/60 text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="faq" className="py-24 px-4 bg-[#1a1a1a]">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#B28B52] text-xs font-bold uppercase tracking-[0.3em]">Dúvidas frequentes</span>
          <h2 className="text-[#C5C5C5] text-3xl md:text-4xl font-extrabold tracking-tight mt-3">
            Perguntas Frequentes
          </h2>
        </motion.div>

        {/* FAQ grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {faqs.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
            >
              <p className="text-[#B28B52] text-xs font-bold uppercase tracking-wider mb-4">{cat.category}</p>
              <div className="space-y-3">
                {cat.items.map((item, i) => (
                  <FAQItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
