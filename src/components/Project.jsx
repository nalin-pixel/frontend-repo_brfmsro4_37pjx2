import React from 'react'
import { Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <section className="relative w-full bg-black py-24 text-zinc-200">
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-sm"
        >
          <div className="mb-8 flex items-center gap-3 text-white">
            <Cpu className="h-6 w-6 text-emerald-300" />
            <h3 className="text-2xl font-semibold">Major Project</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold text-white">AI-Based Vulnerability Scanner</h4>
              <p className="mt-3 text-zinc-300/90">
                A scanning system that detects common website security vulnerabilities using AI-based pattern recognition and rule-analysis techniques.
              </p>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-400/10 via-transparent to-transparent blur-xl" />
              <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15),transparent_45%)]" />
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%,transparent)] [background-size:12px_12px] mix-blend-soft-light" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Project
