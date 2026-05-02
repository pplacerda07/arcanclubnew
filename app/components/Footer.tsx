"use client"

import { Instagram, CheckCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-[#23363C]/30 pt-12 pb-8 px-4">
      <div className="container mx-auto">
        {/* Delivery info */}
        <div className="max-w-3xl mx-auto bg-[#23363C]/10 border border-[#B28B52]/20 rounded-xl p-8 mb-12">
          <p className="text-[#C5C5C5]/70 text-sm leading-relaxed mb-4 text-center">
            Após confirmar sua compra em nosso ambiente de pagamento seguro, você recebe automaticamente o acesso ao
            Método Frost no e-mail que cadastrou.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            {["Sem frete.", "Sem enrolação.", "Comece ainda hoje."].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#B28B52]" />
                <span className="text-[#C5C5C5]/70 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#121212] border border-[#23363C]/30 rounded-lg p-4">
            <p className="text-[#C5C5C5]/50 text-xs text-center">
              <strong className="text-[#B28B52]">Importante:</strong> verifique se digitou seu e-mail corretamente. O
              envio é automático e imediato após o pagamento.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[#B28B52] font-bold text-xl tracking-wider uppercase font-mono">FROST CLUB</span>

          <div className="flex items-center gap-6">
            <a href="#" className="text-[#C5C5C5]/50 hover:text-[#B28B52] transition-colors text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-[#C5C5C5]/50 hover:text-[#B28B52] transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-[#C5C5C5]/40 hover:text-[#B28B52] transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[#C5C5C5]/30 text-xs">© 2024 Frost Club. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
