import { motion } from 'framer-motion';
import { ShieldCheck, CalendarCheck, FileText, MessageSquare, Bell, Pill, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <ShieldCheck className="text-blue-700 w-10 h-10 mb-2" />,
    title: 'Medical Records',
    desc: 'Access your health history securely, anytime.',
    link: '/medical-records',
    cta: 'View Records',
    id: 'feature-medical-records'
  },
  {
    icon: <CalendarCheck className="text-blue-700 w-10 h-10 mb-2" />,
    title: 'Appointments',
    desc: 'Book, manage, and track your appointments easily.',
    link: '/appointments',
    cta: 'Schedule Now',
    id: 'feature-appointments'
  },
  {
    icon: <Pill className="text-blue-700 w-10 h-10 mb-2" />,
    title: 'Prescriptions',
    desc: 'Refills, tracking, and reminders in one place.',
    link: '/prescriptions',
    cta: 'Manage Prescriptions',
    id: 'feature-prescriptions'
  },
  {
    icon: <MessageSquare className="text-blue-700 w-10 h-10 mb-2" />,
    title: 'Messaging',
    desc: 'Connect with your care providers securely.',
    link: '/messaging',
    cta: 'Message Now',
    id: 'feature-messaging'
  },
  {
    icon: <Bell className="text-blue-700 w-10 h-10 mb-2" />,
    title: 'Notifications',
    desc: 'Stay updated with real-time health alerts.',
    link: '/notifications',
    cta: 'View Alerts',
    id: 'feature-notifications'
  },
  {
    icon: <FileText className="text-blue-700 w-10 h-10 mb-2" />,
    title: 'File Upload',
    desc: 'Easily upload health documents securely.',
    link: '/file-upload',
    cta: 'Upload Files',
    id: 'feature-file-upload'
  },
];

export function FeatureGrid() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.14
            }
          }
        }}
      >
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            className="rounded-xl bg-white shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 }
            }}
          >
            {f.icon}
            <h3 className="text-xl font-bold font-['Roboto'] mb-2 text-blue-900">{f.title}</h3>
            <p className="text-slate-700 mb-4">{f.desc}</p>
            <Button asChild id={f.id} variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold">
              <Link to={f.link} className="flex items-center gap-2">
                {f.cta} <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
