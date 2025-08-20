import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export function Hero() {
  return (
    <motion.section
      className="relative w-full h-[28rem] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl font-bold mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>Welcome to Medivault</h1>
        <p className="text-white text-lg mb-6 max-w-xl" style={{fontFamily: 'Roboto, sans-serif'}}>
          Securely manage your health information, appointments, and communications—all in one modern, trusted space.
        </p>
        <div className="flex gap-4">
          <a href="/signup">
            <button id="hero-cta-signup" className="bg-[#1d4ed8] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-lg transition-all">
              Get Started
            </button>
          </a>
          <a href="/login">
            <button id="hero-cta-login" className="bg-white text-[#1d4ed8] hover:bg-blue-100 font-bold py-3 px-6 rounded shadow-lg transition-all">
              Login
            </button>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
