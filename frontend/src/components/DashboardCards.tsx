import { CalendarCheck, FileText, MessageCircle, Bell, ClipboardCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <CalendarCheck className="w-8 h-8 text-blue-700" />,
    title: 'Appointments',
    desc: 'Schedule and review your upcoming visits.',
    link: '/appointments',
    id: 'dashboard-appointments-link',
  },
  {
    icon: <FileText className="w-8 h-8 text-blue-700" />,
    title: 'Medical Records',
    desc: 'Access your health files anytime, anywhere.',
    link: '/medical-records',
    id: 'dashboard-medical-records-link',
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-blue-700" />,
    title: 'Messaging',
    desc: 'Communicate securely with your care team.',
    link: '/messaging',
    id: 'dashboard-messaging-link',
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-blue-700" />,
    title: 'Prescriptions',
    desc: 'Track and refill your medications.',
    link: '/prescriptions',
    id: 'dashboard-prescriptions-link',
  },
  {
    icon: <Bell className="w-8 h-8 text-blue-700" />,
    title: 'Notifications',
    desc: 'Stay updated with important alerts.',
    link: '/notifications',
    id: 'dashboard-notifications-link',
  },
];

export const DashboardCards = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    }}
    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8"
  >
    {features.map((f, idx) => (
      <motion.div
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        key={f.title}
      >
        <Card className="hover:shadow-xl transition-all border-blue-100 group">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="bg-blue-50 rounded-full p-2">{f.icon}</div>
            <CardTitle className="text-lg font-['Roboto'] text-blue-900">{f.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 text-sm font-['Roboto']">{f.desc}</p>
          </CardContent>
          <CardFooter>
            <Link to={f.link} id={f.id} className="text-blue-700 font-semibold underline underline-offset-4 group-hover:text-blue-900 transition-colors focus:outline-none">
              Go to {f.title}
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    ))}
  </motion.div>
);
