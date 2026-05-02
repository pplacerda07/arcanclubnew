"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const CHECKOUT_URL = "https://arkan-club.mycartpanda.com/checkout/186242508:1"

function trackLead() {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    ;(window as any).fbq("track", "Lead")
  }
}

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setVisible(y < 80 || y < lastY)
      setLastY(y)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastY])

  const navLinks = [
    { label: "O Método", href: "#metodo" },
    { label: "Módulos", href: "#modulos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-[#23363C]/30"
        >
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <span className="text-[#B28B52] font-bold text-xl tracking-wider uppercase font-mono">
              ARKAN CLUB
            </span>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[#C5C5C5] hover:text-[#B28B52] text-sm font-medium transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => { trackLead(); window.open(CHECKOUT_URL, "_blank") }}
                className="hidden md:block bg-[#B28B52] hover:bg-[#B28B52]/90 text-[#121212] font-bold text-sm px-5 py-2.5 rounded-md transition-all duration-200 hover:scale-[1.02]"
              >
                ACESSAR PROTOCOLO
              </button>

              <button
                className="md:hidden text-[#C5C5C5] hover:text-[#B28B52] transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-[#23363C]/30 bg-[#121212]"
              >
                <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-[#C5C5C5] hover:text-[#B28B52] font-medium transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                  <button
                    onClick={() => { trackLead(); window.open(CHECKOUT_URL, "_blank") }}
                    className="bg-[#B28B52] text-[#121212] font-bold py-3 rounded-md mt-2"
                  >
                    ACESSAR PROTOCOLO AGORA
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
