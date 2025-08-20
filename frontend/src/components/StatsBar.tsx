import { motion } from 'framer-motion';
import { HeartPulse, CalendarCheck, FileText, MessageCircle } from 'lucide-react';

const stats = [
  { icon: HeartPulse, label: 'Records Secured', value: '19,800+' },
  { icon: CalendarCheck, label: 'Appointments Booked', value: '6,500+' },
  { icon: FileText, label: 'Prescriptions Managed', value: '12,200+' },
  { icon: MessageCircle, label: 'Messages Sent', value: '48,300+' },
];

export const StatsBar = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="w-full bg-[#1d4ed8] py-8 flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0"
  >
    {stats.map((stat) => (
      <div key={stat.label} className="flex items-center gap-3">
        <stat.icon className="w-8 h-8 text-white" />
        <div>
          <div className="text-white text-xl font-bold leading-tight font-['Roboto']" style={{fontWeight: 700}}>{stat.value}</div>
          <div className="text-white text-sm font-['Roboto']">{stat.label}</div>
        </div>
      </div>
    ))}
  </motion.div>
);
