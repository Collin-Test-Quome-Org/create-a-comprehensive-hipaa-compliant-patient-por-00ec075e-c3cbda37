import { motion } from 'framer-motion';

const heroBg = '/branding/assets/hero-0.png';

export function Hero() {
  return (
    <section className="relative w-full h-96 mb-12">
      <div
        style={{ backgroundImage: `url('${heroBg}')` }}
        className="bg-cover bg-center h-full w-full absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-10">
        <motion.h1
          className="text-white text-4xl md:text-5xl font-bold mb-4 font-['Roboto']"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to Medivault
        </motion.h1>
        <motion.p
          className="text-slate-100 text-lg md:text-xl max-w-xl text-center mb-8 font-['Roboto']"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Your secure, seamless vault for digital health. Effortlessly manage records, appointments, and care—all in one protected place.
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="/signup">
            <button
              id="hero-signup"
              className="bg-blue-700 hover:bg-blue-800 transition text-white font-bold py-2 px-6 rounded shadow-md text-lg"
            >
              Get Started
            </button>
          </a>
          <a href="/login">
            <button
              id="hero-login"
              className="bg-slate-200 hover:bg-slate-300 transition text-blue-900 font-semibold py-2 px-6 rounded shadow text-lg"
            >
              Login
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
