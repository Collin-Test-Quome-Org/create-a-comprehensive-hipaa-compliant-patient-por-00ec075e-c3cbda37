import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      className="bg-cover bg-center h-96 w-full relative"
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Welcome to CareShield
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-slate-100 text-lg md:text-xl mb-8 max-w-2xl text-center"
          style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
        >
          Security, care, and clarity for your connected world. Experience healthcare access and communication with trust and ease.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button asChild id="get-started-cta" size="lg" className="text-lg px-8 py-6 font-bold bg-blue-700 hover:bg-blue-900">
            <Link to="/signup" className="flex items-center gap-2">
              Get Started
              <ArrowRight size={22} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
