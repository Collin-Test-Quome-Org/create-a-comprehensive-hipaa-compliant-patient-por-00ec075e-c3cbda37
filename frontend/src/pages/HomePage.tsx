import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HomePage = () => (
  <main>
    <Hero />
    <section className="max-w-5xl mx-auto px-4 py-16">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src="/branding/assets/logo-1.png" className="h-32 w-32 rounded-full shadow-xl border-4 border-blue-200" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-900 mb-3" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
            Why SentinelHealth?
          </h2>
          <ul className="text-slate-700 text-lg mb-6 pl-4 list-disc" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
            <li>Bank-grade security for your sensitive medical data</li>
            <li>Instant access to appointments, prescriptions, and records</li>
            <li>Seamless communication with your care team</li>
            <li>Modern, friendly, and always available for you</li>
          </ul>
          <Button asChild id="homepage-cta" className="bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow hover:bg-blue-800">
            <Link to="/signup">Join SentinelHealth Now</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  </main>
);
