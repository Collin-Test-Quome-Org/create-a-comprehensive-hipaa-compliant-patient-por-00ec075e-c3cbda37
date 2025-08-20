import { motion } from 'framer-motion';

export const WelcomeBanner = ({ name }: { name: string }) => (
  <motion.div 
    className="w-full py-6 px-6 bg-blue-50 border-b border-blue-100 flex items-center gap-4"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <img src="/branding/assets/logo-2.png" className="h-10 w-10 rounded-full" />
    <div>
      <h2 className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
        Welcome back, {name}!
      </h2>
      <p className="text-slate-700" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
        Your secure health dashboard is ready.
      </p>
    </div>
  </motion.div>
);
