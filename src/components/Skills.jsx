import React from 'react'
import { motion } from 'framer-motion'
import { SiJava, SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiMysql, SiDocker, SiYaml, SiGit, SiGithub, SiVercel, SiVisualstudiocode, SiPytorch, SiTensorflow, SiCanva, SiMicrosoftexcel } from 'react-icons/si'

const tiles = [
  { label: 'Java', icon: SiJava },
  { label: 'Python', icon: SiPython },
  { label: 'JavaScript', icon: SiJavascript },
  { label: 'HTML', icon: SiHtml5 },
  { label: 'CSS', icon: SiCss3 },
  { label: 'React', icon: SiReact },
  { label: 'Node.js', icon: SiNodedotjs },
  { label: 'SQL', icon: SiMysql },
  { label: 'Docker', icon: SiDocker },
  { label: 'YAML', icon: SiYaml },
  { label: 'Deep Learning', icon: SiPytorch },
  { label: 'Git', icon: SiGit },
  { label: 'GitHub', icon: SiGithub },
  { label: 'VS Code', icon: SiVisualstudiocode },
  { label: 'Excel', icon: SiMicrosoftexcel },
  { label: 'Canva', icon: SiCanva },
]

const Skills = () => {
  return (
    <section className="relative w-full bg-black py-24 text-zinc-200">
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-white">Skills</h3>
          <p className="text-sm text-zinc-400">App-style tiles with subtle 3D lift</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {tiles.map((t, i) => {
            const Icon = t.icon
            return (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.5, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-emerald-200/10 to-transparent" />
                  <div className="absolute -inset-8 -z-10 blur-2xl bg-emerald-400/10" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-black/40 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{t.label}</p>
                    <p className="text-xs text-zinc-400">Skill</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
