import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import { useInView } from 'react-intersection-observer'

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    })

    function animate(time) {
      lenis.raf(time)
      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-mono px-6 py-12">
      <header className="max-w-5xl mx-auto text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
        >
          CodexFlow
        </motion.h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-400">
          Automate workflows with AI, powered by your command line.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black text-lg px-6 py-4 rounded-2xl shadow-lg">
            Start Automating
          </button>
          <button className="border-gray-700 text-gray-300 px-6 py-4 rounded-2xl border">
            Learn More
          </button>
        </div>
      </header>

      <section className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl mb-6 font-semibold text-violet-400">Features</h2>
        <div className="grid gap-8 md:grid-cols-2 text-gray-300">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl font-bold"
            >
              🧠 Natural Language Agent Training
            </motion.h3>
            <p className="mt-2 text-sm">Describe it. Train it. Deploy it. No configs, just commands.</p>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl font-bold"
            >
              ⌨️ Command-Line Interface
            </motion.h3>
            <p className="mt-2 text-sm">Craft and control agents with keyboard-first flow. Hack the future.</p>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl font-bold"
            >
              ⚙️ Built-in API Integrations
            </motion.h3>
            <p className="mt-2 text-sm">Link agents to tools like Slack, Notion, GitHub in one line.</p>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl font-bold"
            >
              🌐 Shareable + Deployable
            </motion.h3>
            <p className="mt-2 text-sm">Make it public. Run in cloud. Embed anywhere. Monetize.</p>
          </div>
        </div>
      </section>

      <section className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Join the Waitlist</h2>
        <p className="text-gray-400 mb-6">Be the first to deploy agents that work like you do.</p>
        <div className="flex gap-4 justify-center">
          <input
            placeholder="you@futuremail.dev"
            className="w-full max-w-xs bg-gray-900 border-gray-700 text-white px-4 py-3 rounded-xl"
          />
          <button className="bg-violet-500 hover:bg-violet-400 text-black px-6 py-3 rounded-xl">
            Notify Me
          </button>
        </div>
      </section>
    </div>
  )
}
