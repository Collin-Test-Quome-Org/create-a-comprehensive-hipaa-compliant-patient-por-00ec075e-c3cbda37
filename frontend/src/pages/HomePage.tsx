import { Hero } from '@/components/Hero';
import { FeatureCards } from '@/components/FeatureCards';
import { motion } from 'framer-motion';

export function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <FeatureCards />
      <motion.section 
        className="max-w-3xl mx-auto text-center my-20 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold font-['Roboto'] text-blue-900 mb-4">Why SecureBridge Health?</h2>
        <p className="text-lg text-slate-700 mb-8 font-['Roboto']">
          At SecureBridge Health, we believe that health belongs in your hands—but protected by ours. 
          Peace of mind meets powerful health management with our secure, caring, and friendly platform. 
          Because you deserve clarity, confidence, and connection every step of your journey.
        </p>
      </motion.section>
    </main>
  );
}
