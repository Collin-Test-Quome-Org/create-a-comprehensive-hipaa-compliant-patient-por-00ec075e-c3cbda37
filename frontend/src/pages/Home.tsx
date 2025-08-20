import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] bg-white">
      <Hero />
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="container mx-auto px-4 py-16 flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Healthcare and Security, Hand in Hand
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mb-6 max-w-2xl text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
          At CareShield, we believe every connection to your health should feel safe, simple, and empowering. 
          Join a community where trust is built in, and clarity is always at the forefront.
        </p>
      </motion.section>
    </div>
  );
}
