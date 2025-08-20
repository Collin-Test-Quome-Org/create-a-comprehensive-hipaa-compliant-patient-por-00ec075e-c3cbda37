import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CalendarCheck, FileText, MessageCircle, Pill, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const dashboardItems = [
  {
    icon: <CalendarCheck className="text-primary" size={32} />,
    title: 'Appointments',
    path: '/appointments',
    description: 'View, schedule, and manage your medical appointments.'
  },
  {
    icon: <FileText className="text-primary" size={32} />,
    title: 'Medical Records',
    path: '/medical-records',
    description: 'Securely access your health history and reports.'
  },
  {
    icon: <Pill className="text-primary" size={32} />,
    title: 'Prescriptions',
    path: '/prescriptions',
    description: 'Track and renew your medications easily.'
  },
  {
    icon: <MessageCircle className="text-primary" size={32} />,
    title: 'Messaging',
    path: '/messaging',
    description: 'Communicate securely with your healthcare providers.'
  },
  {
    icon: <Bell className="text-primary" size={32} />,
    title: 'Notifications',
    path: '/notifications',
    description: 'Stay up to date with important alerts.'
  }
];

export const DashboardCards = () => (
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
    {dashboardItems.map((item, i) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.12, duration: 0.5 }}
      >
        <Link to={item.path} aria-label={item.title}>
          <Card className="group hover:shadow-2xl transition-shadow duration-200 focus:ring-2 focus:ring-primary/60">
            <CardHeader className="flex flex-row items-center gap-4">
              {item.icon}
              <CardTitle className="text-lg font-bold font-[Roboto] text-slate-800 group-hover:text-primary">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 font-[Roboto] text-sm">
              {item.description}
            </CardContent>
          </Card>
        </Link>
      </motion.div>
    ))}
  </div>
);
