import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  cta: string;
  to: string;
  color?: string;
}

export function DashboardCard({ title, description, icon, cta, to, color }: DashboardCardProps) {
  return (
    <motion.div
      className={`rounded-2xl shadow-lg bg-white px-7 py-8 flex flex-col justify-between h-full border-t-4 ${color ? color : 'border-blue-700'}`}
      whileHover={{ y: -6, boxShadow: '0 8px 36px rgba(30,64,175,0.18)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-blue-900 font-['Roboto']">{title}</h2>
      </div>
      <p className="text-slate-700 text-base flex-1 mb-6 font-['Roboto']">{description}</p>
      <a href={to} className="flex items-center group mt-auto">
        <span className="text-blue-700 font-semibold text-base group-hover:underline" id={`dashboardcard-cta-${title.toLowerCase().replace(/\s/g, '-')}`}>{cta}</span>
        <ArrowRight className="ml-1 text-blue-700 group-hover:translate-x-1 transition-transform" size={18} />
      </a>
    </motion.div>
  );
}
