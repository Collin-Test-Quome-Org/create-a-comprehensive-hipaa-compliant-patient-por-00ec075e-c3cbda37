import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => (
  <section className="relative w-full min-h-[26rem] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
    <motion.div 
      className="relative z-20 flex flex-col items-center max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-white text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
        Welcome to SentinelHealth Portal
      </h1>
      <p className="text-slate-200 text-lg mb-6 max-w-xl" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
        Securely connect with your care. Effortlessly access medical records, schedule appointments, and stay in control of your health journey—all with SentinelHealth's trusted protection.
      </p>
      <div className="flex gap-4 justify-center">
        <Button asChild id="cta-get-started" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg rounded-full shadow-lg">
          <Link to="/signup">Get Started</Link>
        </Button>
        <Button asChild variant="secondary" id="cta-learn-more" className="bg-slate-200 hover:bg-slate-300 text-blue-900 px-8 py-3 text-lg rounded-full">
          <Link to="/login">Log In</Link>
        </Button>
      </div>
    </motion.div>
  </section>
);
