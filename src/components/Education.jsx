import React from 'react'
import { GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <section className="relative w-full bg-black py-24 text-zinc-200">
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        >
          <div className="mb-6 flex items-center gap-3 text-white">
            <GraduationCap className="h-6 w-6 text-emerald-300" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          <div className="grid gap-2 text-zinc-300/90">
            <p className="text-lg font-medium">B.E. in Artificial Intelligence & Machine Learning</p>
            <p>KLS Vishwanathrao Deshpande Institute of Technology, Haliyal</p>
            <p className="text-zinc-400">2022–2026 (Expected)</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
