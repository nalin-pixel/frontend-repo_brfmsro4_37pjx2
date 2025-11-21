import React from 'react'
import { motion } from 'framer-motion'
import SafeSpline from './SafeSpline'

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <SafeSpline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Vignette and grain overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.65)_85%,rgba(0,0,0,0.9))]"></div>
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:3px_3px]"></div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 pt-28 md:flex-row md:items-end md:justify-between md:pt-36">
        {/* Left: Text */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl font-semibold tracking-tight md:text-7xl"
          >
            Shridhar P Bhovi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
            className="mt-4 text-lg text-zinc-300 md:text-xl"
          >
            AI & Software Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-zinc-300/90"
          >
            I build intelligent systems, smooth digital experiences, and high-quality modern solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#about" className="group relative inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-black transition-transform duration-300 will-change-transform hover:scale-[1.03]">
              <span className="relative z-10 font-medium">Explore</span>
              <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-white blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-60"></span>
            </a>
            <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-white/80 backdrop-blur-md transition hover:border-white/40 hover:text-white">
              Contact
            </a>
          </motion.div>
        </div>

        {/* Right: Profile image with cinematic masking and glow */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md md:max-w-lg"
        >
          {/* Soft backlight */}
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] bg-gradient-to-b from-emerald-400/10 via-transparent to-transparent blur-2xl" />
          {/* Subtle rim light */}
          <div className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(0,255,170,0.1),transparent,rgba(0,255,170,0.08),transparent)] blur-3xl" />

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_80px_120px_-40px_rgba(0,0,0,0.8)]">
            <div className="relative overflow-hidden rounded-[28px] bg-black/60">
              <img
                src="https://drive.google.com/uc?export=view&id=1IhJ849-0jmYpyRACgEvUzR8_mEV8qUIS"
                alt="Shridhar P Bhovi"
                className="h-[520px] w-full object-cover object-center grayscale contrast-125 brightness-105 mix-blend-screen"
                style={{ maskImage: 'radial-gradient(120%_140% at 100% 0%, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(120% 140% at 100% 0%, black 40%, transparent 70%)' }}
              />
              {/* Overlay subtle abstract shape with side photo */}
              <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay">
                <img
                  src="https://drive.google.com/uc?export=view&id=1I5qChzdbODJg-VDF1lYIHlmHByQs9XBX"
                  alt="Overlay"
                  className="h-full w-full object-cover object-center blur-[2px] scale-105"
                  style={{ mixBlendMode: 'soft-light' }}
                />
              </div>
              {/* Grain */}
              <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:3px_3px]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs text-white/60">
        <div className="mx-auto h-8 w-[1px] bg-gradient-to-b from-transparent via-white/70 to-transparent" />
      </div>
    </section>
  )
}

export default Hero
