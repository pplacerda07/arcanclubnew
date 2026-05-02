"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 14, suffix: " dias", label: "para a 1ª mudança visível", prefix: "" },
  { value: 30, suffix: " dias", label: "para o ciclo completo", prefix: "" },
  { value: 0, suffix: "", label: "equipamentos necessários", prefix: "Zero" },
  { value: 7, suffix: " dias", label: "de garantia total", prefix: "" },
]

function CountUp({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    if (prefix) { setCount(target); return }
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target, prefix])

  return (
    <span ref={ref}>
      {prefix ? prefix : count}
      {suffix}
    </span>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-[#1a1a1a] border-y border-[#23363C]/40 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-[#B28B52] text-3xl md:text-4xl font-extrabold mb-1">
                {inView ? (
                  <CountUp target={s.value} prefix={s.prefix} suffix={s.suffix} />
                ) : (
                  <span>{s.prefix || "0"}</span>
                )}
              </div>
              <p className="text-[#C5C5C5]/60 text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
