import { motion } from 'framer-motion';

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-16 min-h-[60vh] flex flex-col items-center bg-slate-50"
    >
      <img src="/branding/assets/logo-2.png" className="h-16 w-16 mb-6" />
      <h1 className="text-4xl font-bold text-blue-900 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
        About CareShield
      </h1>
      <p className="text-lg text-slate-700 max-w-2xl text-center mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
        CareShield is your trusted partner in secure healthcare access and communication. Our mission is to create a seamless, reassuring digital experience for patients and providers alike, harnessing modern technology and heartfelt understanding. Welcome to a new era of clarity and care.
      </p>
    </motion.div>
  );
}
