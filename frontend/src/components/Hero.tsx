import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <motion.section
      className="relative w-full bg-cover bg-center h-96"
      style={{ backgroundImage: `url('/branding/assets/hero-0.png')` }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Roboto']"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Secure, Effortless Health Access
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-slate-100 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          Welcome to ConnectCare – where your medical world is always at your fingertips. Stay connected, stay secure, stay healthy. 
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <Button asChild id="cta-get-started" size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-bold">
            <Link to="/signup" className="flex items-center gap-2">
              Get Started
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
