import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const DashboardCard = ({ title, description, icon: Icon, to }: {
  title: string;
  description: string;
  icon: React.ElementType;
  to: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.03, boxShadow: "0 6px 30px 0 rgba(29,78,216,0.12)" }}
    className="flex flex-col gap-3 bg-white shadow rounded-2xl p-6 border border-slate-100 h-full"
  >
    <div className="flex items-center gap-4">
      <span className="rounded-full bg-blue-100 text-blue-700 p-2">
        <Icon size={28} />
      </span>
      <h2 className="text-xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>{title}</h2>
    </div>
    <div className="flex-1 text-slate-600 text-base" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>{description}</div>
    <Link to={to} className="flex items-center gap-1 text-blue-700 font-semibold hover:underline mt-2 group" id={`dashboard-card-link-${title.toLowerCase().replace(/\s+/g, '-')}`}>View <ArrowRight className="group-hover:translate-x-1 transition-transform duration-150" size={18} /></Link>
  </motion.div>
);
