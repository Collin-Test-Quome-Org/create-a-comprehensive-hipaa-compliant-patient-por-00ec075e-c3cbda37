import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative h-[32rem] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <motion.div 
        className="relative z-20 text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-white text-5xl font-bold font-['Roboto'] mb-6 drop-shadow-xl">
          Welcome to SecureBridge Health
        </h1>
        <p className="text-slate-200 text-lg max-w-xl mx-auto mb-8 font-['Roboto']">
          The gateway to your health, securely connected. Manage appointments, records, prescriptions, and more—all with confidence and care.
        </p>
        <div className="flex gap-4">
          <Button asChild id="get-started-cta" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg font-bold">
            <Link to="/signup" className="flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></Link>
          </Button>
          <Button asChild variant="outline" id="learn-more-cta" className="text-white border-white border-2 px-8 py-3 text-lg font-bold bg-transparent hover:bg-slate-700/30">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
