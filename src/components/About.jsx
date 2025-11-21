import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-zinc-200">
      {/* Soft gradient divider top */}
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <h2 className="text-3xl font-semibold text-white md:text-4xl">About</h2>
            <p className="mt-6 text-zinc-300/90 leading-relaxed">
              I’m Shridhar from Dharwad, Karnataka — a final-year AIML student passionate about creating intelligent digital systems.
              I focus on building clean, modern, high-performance software and AI solutions with precision and creativity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
              <div className="relative h-72 w-full overflow-hidden rounded-2xl">
                <img
                  src="https://drive.google.com/uc?export=view&id=1pNHyQ1y1yEFfnUd_aVGTvjs52WeHdvvD"
                  alt="Background"
                  className="h-full w-full object-cover object-center opacity-80"
                  style={{ maskImage: 'radial-gradient(120%_140% at 0% 100%, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(120% 140% at 0% 100%, black 40%, transparent 70%)', mixBlendMode: 'soft-light', filter: 'grayscale(40%) contrast(110%) brightness(95%) blur(0.2px)' }}
                />
                {/* Glow and grain */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-300/10 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:3px_3px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
