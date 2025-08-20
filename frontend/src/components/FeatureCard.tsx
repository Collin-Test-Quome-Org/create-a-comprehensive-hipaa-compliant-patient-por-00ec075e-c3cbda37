import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <motion.div
    whileHover={{ y: -6, boxShadow: '0 10px 24px rgba(29,78,216,0.09)' }}
    className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-slate-200"
  >
    <Icon className="w-12 h-12 text-[#1d4ed8] mb-4" />
    <h3 className="text-xl font-bold mb-2 font-['Roboto']" style={{fontWeight: 700}}>{title}</h3>
    <p className="text-slate-600 text-base font-['Roboto']">{description}</p>
  </motion.div>
);
