import React from 'react'
import { motion } from 'framer-motion'

const Certifications = () => {
  const items = [
    { title: 'Intro to Machine Learning', org: 'Coursera', year: '2023' },
    { title: 'Docker Essentials', org: 'IBM Skills Network', year: '2024' },
    { title: 'Git & GitHub', org: 'Udemy', year: '2022' },
  ]
  return (
    <section className="relative w-full bg-black py-24 text-zinc-200">
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="mb-8 text-2xl font-semibold text-white">Certifications</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <p className="font-medium text-white">{c.title}</p>
              <p className="text-sm text-zinc-300/90">{c.org}</p>
              <p className="text-xs text-zinc-500">{c.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
