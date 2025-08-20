import { Calendar, FileText, MessageSquare, Bell, Pill, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'Appointments',
    description: 'View, schedule, or manage your upcoming appointments with ease.',
    icon: Calendar,
    link: '/appointments',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Medical Records',
    description: 'Access and upload your health records securely.',
    icon: FileText,
    link: '/medical-records',
    color: 'bg-slate-100 text-slate-700',
  },
  {
    title: 'Messaging',
    description: 'Communicate securely with your care team.',
    icon: MessageSquare,
    link: '/messaging',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Notifications',
    description: 'Stay updated with timely alerts and reminders.',
    icon: Bell,
    link: '/notifications',
    color: 'bg-slate-100 text-slate-700',
  },
  {
    title: 'Prescriptions',
    description: 'Track, renew, and view your prescriptions.',
    icon: Pill,
    link: '/prescriptions',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'File Upload',
    description: 'Add important documents to your secure vault.',
    icon: FolderOpen,
    link: '/file-upload',
    color: 'bg-slate-100 text-slate-700',
  },
];

export function DashboardCards() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-lg shadow-lg p-6 flex flex-col gap-3 transition-all ${card.color}`}
          >
            <Link to={card.link} className="flex flex-col items-start gap-2">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow">
                <Icon size={28} />
              </span>
              <h2 className="text-xl font-bold" style={{fontFamily: 'Roboto, sans-serif'}}>{card.title}</h2>
              <p className="text-base opacity-80">{card.description}</p>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
