"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const CHECKOUT_URL = "https://arkan-club.mycartpanda.com/checkout/186242508:1"

function trackLead() {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    ;(window as any).fbq("track", "Lead")
  }
}

export default function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 100, opacity: 0, x: "-50%" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 left-1/2 z-[100] pointer-events-none"
        >
          <button
            onClick={() => { trackLead(); window.open(CHECKOUT_URL, "_blank") }}
            className="pointer-events-auto flex items-center gap-2 bg-[#B28B52] hover:bg-[#B28B52]/90 text-[#121212] font-bold text-sm md:text-base px-8 py-3.5 rounded-full shadow-2xl shadow-[#B28B52]/40 border border-[#B28B52]/20 whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <span>Quero mudar</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
