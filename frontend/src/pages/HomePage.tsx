import { Hero } from '@/components/Hero';
import { DashboardCards } from '@/components/DashboardCards';
import { motion } from 'framer-motion';

export const HomePage = () => (
  <main>
    <Hero />
    <section className="max-w-6xl mx-auto px-4 py-14">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-['Roboto'] text-blue-900 text-center mb-8"
      >
        Discover the Medivault Advantage
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-slate-700 max-w-2xl mx-auto text-center mb-10"
      >
        Medivault speaks your language: clarity, confidence, and care. Our platform is designed for modern health advocates who take charge of their wellness journey. With secure access, seamless records, and compassionate support, your health data is always in your hands.
      </motion.p>
      <DashboardCards />
    </section>
  </main>
);
