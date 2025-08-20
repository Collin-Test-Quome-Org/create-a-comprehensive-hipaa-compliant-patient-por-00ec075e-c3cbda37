import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-cover bg-center relative h-[410px] md:h-[450px] flex items-center justify-center"
      style={{ backgroundImage: `url('/branding/assets/hero-0.png')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="flex flex-col items-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white text-3xl md:text-5xl font-bold mb-5 text-center drop-shadow-lg"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Welcome to CareShield
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-slate-100 text-lg md:text-2xl mb-8 max-w-xl text-center"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            The secure, connected way to take control of your health—
            access records, manage appointments, and message your care team with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex space-x-4"
          >
            <Button
              asChild
              id="hero-get-started"
              size="lg"
              className="bg-blue-700 hover:bg-blue-900 text-white px-8 py-5 font-bold rounded-lg shadow-md shadow-blue-200"
            >
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button
              asChild
              id="hero-login"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700 hover:text-white"
            >
              <Link to="/login">Sign In</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
