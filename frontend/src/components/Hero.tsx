import { motion } from 'framer-motion';

export const Hero = () => (
  <section className="relative w-full h-96 overflow-hidden">
    <div
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      className="absolute inset-0 bg-cover bg-center"
    />
    <div className="relative z-10 bg-black bg-opacity-60 h-full flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-white text-5xl md:text-6xl font-bold font-['Roboto'] tracking-tight mb-4 text-center drop-shadow-lg"
      >
        Welcome to Medivault
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="text-slate-100 text-lg md:text-2xl font-['Roboto'] text-center max-w-2xl mb-6"
      >
        Your health, your data, your control. Secure. Simple. Always available.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex gap-4"
      >
        <a href="/signup">
          <button id="hero-signup-btn" className="px-7 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold shadow-lg transition-colors text-lg">Get Started</button>
        </a>
        <a href="/login">
          <button id="hero-login-btn" className="px-7 py-3 rounded-lg border border-white text-white font-semibold bg-transparent hover:bg-slate-700 transition-colors text-lg">Login</button>
        </a>
      </motion.div>
    </div>
  </section>
);
