import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-96 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
    >
      <div className="bg-black bg-opacity-50 h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-tight font-['Roboto']" style={{fontWeight: 700}}>
          Welcome to CareSecure
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8 max-w-xl text-center font-['Roboto']">
          Empowering your health journey with secure, seamless access to medical records, appointments, and more.
        </p>
        <div className="flex gap-4">
          <a href="/signup" id="hero-signup-btn" className="inline-block bg-[#1d4ed8] hover:bg-[#2563eb] text-white px-6 py-3 rounded-md text-lg font-semibold shadow-lg transition">
            Get Started
          </a>
          <a href="/login" id="hero-login-btn" className="inline-block bg-white hover:bg-[#f1f5f9] text-[#1d4ed8] px-6 py-3 rounded-md text-lg font-semibold shadow-lg border border-[#1d4ed8] transition">
            Login
          </a>
        </div>
      </div>
    </motion.section>
  );
};
