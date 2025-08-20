import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => (
  <section className="relative bg-cover bg-center h-96 w-full" style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 font-[Roboto] tracking-tight drop-shadow-lg">
          Welcome to Medivault: Your Health, United and Secure
        </h1>
        <p className="text-slate-100 text-lg md:text-xl mb-6 font-[Roboto] font-normal">
          Experience the most trusted, user-friendly portal for all your healthcare records, appointments, and secure communications. Medivault is built for peace of mind—by people who care about your care.
        </p>
        <Button asChild id="cta-get-started" className="px-8 py-4 text-lg">
          <Link to="/signup" className="flex items-center gap-2">
            Get Started
            <ArrowRight size={20} />
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
);
