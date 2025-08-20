import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { StatsBar } from '@/components/StatsBar';
import { CalendarCheck, FileText, MessageCircle, ShieldCheck, UserSquare2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const HomePage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Hero />
      <StatsBar />
      <section className="py-16 px-4 md:px-16 w-full bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1d4ed8] font-['Roboto']"
          style={{fontWeight: 700}}
        >
          Everything you need for your care journey
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={ShieldCheck}
            title="Private Medical Records"
            description="Access and manage your health records securely anytime, anywhere."
          />
          <FeatureCard
            icon={CalendarCheck}
            title="Easy Appointments"
            description="Book, reschedule, and track appointments with trusted providers."
          />
          <FeatureCard
            icon={FileText}
            title="Prescription Central"
            description="View and refill prescriptions in a few taps — always up to date."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <FeatureCard
            icon={MessageCircle}
            title="Secure Messaging"
            description="Communicate safely with your care team; share updates and get timely advice."
          />
          <FeatureCard
            icon={UserSquare2}
            title="Personalized Profile"
            description="Manage your information and preferences, tailored for you and your family."
          />
        </div>
      </section>
      <section className="py-8 px-4 md:px-16 bg-[#1d4ed8]">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-6">
          <div className="flex-1 text-white text-xl font-['Roboto']">
            <span className="font-bold" style={{fontWeight: 700}}>CareSecure</span> is your trusted partner in digital healthcare, bringing peace of mind and clarity to every step of your health journey. Our promise: Secure, simple, and always by your side.
          </div>
          <a href="/signup" id="home-cta-btn" className="mt-4 md:mt-0 inline-block bg-white text-[#1d4ed8] px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#f1f5f9] transition text-lg">
            Join Now
          </a>
        </div>
      </section>
    </main>
  );
};
