import { motion } from 'framer-motion';

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-16 min-h-[calc(100vh-64px)] flex flex-col justify-center items-center bg-white"
    >
      <h1
        className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 text-center"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        About CareShield
      </h1>
      <p className="text-lg md:text-xl text-slate-700 mb-4 max-w-2xl text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
        CareShield is your partner in healthcare empowerment. We combine patient-first design with ironclad HIPAA security, giving you full control over your health journey. With secure access to records, seamless appointments, prescription management, and encrypted messaging, our portal is built for those who value trust, transparency, and modern care.
      </p>
      <p className="text-md md:text-lg text-slate-600 max-w-2xl text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Our mission: to connect you with your health providers in a way that's as safe as it is simple. At CareShield, your privacy is our promise, and your clarity is our craft.
      </p>
    </motion.section>
  );
}
