import { motion, AnimatePresence } from 'framer-motion';

const companyVoice = [
  'Medivault: Security in every byte, care in every click.',
  'Welcome, Health Hero! Your digital care journey starts here.',
  'Your records, your rules—always protected, always accessible.',
];

export function WelcomeMarquee() {
  return (
    <div className="overflow-hidden bg-blue-50 py-2 w-full shadow-sm border-b border-blue-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={companyVoice[0]}
          className="whitespace-nowrap text-blue-800 text-md font-semibold tracking-wide font-['Roboto'] animate-marquee px-4"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          exit={{ x: '-100%' }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        >
          {companyVoice.join('  •  ')}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
