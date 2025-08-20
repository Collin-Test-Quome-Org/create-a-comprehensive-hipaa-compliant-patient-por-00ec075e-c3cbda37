import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="relative w-full h-[32rem] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}>
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-['Roboto'] font-bold text-4xl md:text-5xl text-white mb-6 drop-shadow-lg"
        >
          Welcome to Medishield Portal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-slate-200 mb-8"
        >
          Your health, your records, your peace of mind. Access, schedule, and communicate securely—all in one place.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-4"
        >
          <Button asChild id="cta-get-started" className="text-lg px-6 py-3 font-semibold bg-primary hover:bg-primary/90">
            <Link to="/signup">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild id="cta-login" variant="secondary" className="text-lg px-6 py-3 font-semibold">
            <Link to="/login">
              Login
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
