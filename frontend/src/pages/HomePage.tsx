import { Hero } from '@/components/Hero';
import { DashboardCards } from '@/components/DashboardCards';
import { motion } from 'framer-motion';

export const HomePage = () => (
  <>
    <Hero />
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="max-w-6xl mx-auto px-4 md:px-8 mt-[-4rem] z-10 relative"
    >
      <div className="rounded-2xl bg-white shadow-xl p-8">
        <h2 className="font-[Roboto] font-bold text-2xl md:text-3xl mb-4 text-slate-900">
          Medivault: Your Central Health Command
        </h2>
        <p className="text-slate-700 font-[Roboto] mb-6">
          Welcome to Medivault, where health meets harmony! Effortlessly manage appointments, access medical records, renew prescriptions, and securely message your care team—all in one beautifully secure, friendly portal. Built for patients who value clarity, control, and peace of mind.
        </p>
        <DashboardCards />
      </div>
    </motion.section>
  </>
);
