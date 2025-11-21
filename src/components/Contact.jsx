import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-black py-24 text-zinc-200">
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-white"
          >
            Let’s build something intelligent.
          </motion.h3>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-300/90">
            Open to collaborations, internships, and freelance projects.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:shridhar@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-white/90 transition hover:border-white/30">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://github.com/" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-white/90 transition hover:border-white/30">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-white/90 transition hover:border-white/30">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
