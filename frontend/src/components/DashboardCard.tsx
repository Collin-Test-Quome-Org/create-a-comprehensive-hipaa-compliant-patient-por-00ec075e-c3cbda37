import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  description: string;
  to: string;
  icon: React.ReactNode;
  id: string;
}

export function DashboardCard({ title, description, to, icon, id }: DashboardCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 6px 32px 0 rgba(30, 64, 175, 0.09)' }}
      whileTap={{ scale: 0.97 }}
      className="w-full sm:w-1/2 md:w-1/3 px-2 mb-6"
    >
      <Card className="transition-all h-full group border-blue-100 hover:border-blue-700">
        <Link to={to} className="block h-full outline-none focus:ring-2 focus:ring-blue-400 rounded-lg" id={id}>
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <span className="rounded-full p-2 bg-blue-50 text-blue-700">
              {icon}
            </span>
            <CardTitle className="text-lg font-bold text-blue-800 group-hover:text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 text-sm mb-3 min-h-[2.5em]">{description}</p>
            <span className="inline-flex items-center text-blue-700 font-semibold group-hover:underline group-hover:text-blue-900 text-sm">
              Open <ArrowRight size={16} className="ml-1" />
            </span>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
}
