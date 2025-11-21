import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Shield, Users, Globe } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/40 supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center shadow-lg shadow-fuchsia-500/30">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold text-lg">JobHub</p>
            <p className="text-xs text-fuchsia-200/80">Reverse Hire Platform</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/80">
          <a className="hover:text-white transition" href="#how">How it works</a>
          <a className="hover:text-white transition" href="#talent">For Talent</a>
          <a className="hover:text-white transition" href="#teams">For Teams</a>
          <a className="hover:text-white transition" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex text-slate-200/90 hover:text-white text-sm">Log in</button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition">
            Get started
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}

function DitherBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Subtle grid + dither noise */}
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)`, backgroundSize: '22px 22px' }} />
      <div className="absolute inset-0 mix-blend-soft-light opacity-40" style={{ backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 200 200\"> 
          <filter id=\"n\"> 
            <feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/> 
            <feColorMatrix type=\"saturate\" values=\"0\"/> 
          </filter> 
          <rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.7\"/> 
        </svg>`)}')` }} />
      {/* Aurora glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[720px] w-[1200px] bg-[radial-gradient(closest-side,rgba(168,85,247,0.3),transparent_70%)] blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950/90 to-transparent" />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <DitherBackdrop />
      {/* Cyber glass headline layer */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
          >
            Your profile is the new job posting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-slate-300/90 max-w-xl"
          >
            JobHub flips hiring on its head. Showcase your skills once. Let teams pitch you with roles, compensation and culture that match.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3"
          >
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition">
              Create your profile
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5 transition">
              <Play className="h-5 w-5" />
              Watch demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 grid grid-cols-2 gap-6 text-slate-300/90"
          >
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-fuchsia-400" />
              <p>Privacy-first visibility controls</p>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-indigo-400" />
              <p>Verified teams pitch you directly</p>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-fuchsia-400" />
              <p>Global roles, tailored to your goals</p>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-indigo-400" />
              <p>AI-powered matching and insights</p>
            </div>
          </motion.div>
        </div>

        {/* Spline hero 3D */}
        <div className="relative h-[520px] md:h-[620px] lg:h-[680px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* gradient overlay to match cyberpunk vibe */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Shader stripes overlay for depth */}
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: `repeating-linear-gradient( 105deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 8px )` }} />
    </section>
  )
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 20% -20%, rgba(168,85,247,0.25), transparent 40%), radial-gradient(circle at 120% 120%, rgba(99,102,241,0.25), transparent 40%)' }} />
      <div className="relative z-10">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center mb-4">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
        <p className="text-slate-300/80 text-sm">{text}</p>
      </div>
    </div>
  )
}

function Sections() {
  const items = [
    { icon: Shield, title: 'Private until ready', text: 'Control who can view your full profile. Reveal details only after a match feels right.' },
    { icon: Users, title: 'Teams pitch you', text: 'No more cold applications. Compare offers side-by-side and pick what truly fits.' },
    { icon: Globe, title: 'Remote-first', text: 'Find roles across timezones with compensation transparency built in.' },
    { icon: Sparkles, title: 'AI copilots', text: 'Auto-generate a standout profile and negotiate smarter with real-time benchmarks.' },
  ]

  return (
    <section id="how" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="text-fuchsia-300/80 font-semibold tracking-wider uppercase text-xs mb-2">Why JobHub</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Designed for reverse hiring</h2>
          <p className="text-slate-300/80 mt-3 max-w-2xl mx-auto">A dark, futuristic aesthetic meets practical UX. Dither, shaders and 3D help tell your story without getting in the way.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <FeatureCard key={i.title} {...i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/50">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <p className="text-slate-300/80 text-sm">© {new Date().getFullYear()} JobHub. All rights reserved.</p>
        </div>
        <div className="text-slate-400 text-sm flex items-center gap-6">
          <a className="hover:text-white transition" href="#">Privacy</a>
          <a className="hover:text-white transition" href="#">Terms</a>
          <a className="hover:text-white transition" href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      <Nav />
      <Hero />
      <Sections />
      <Footer />
    </div>
  )
}
