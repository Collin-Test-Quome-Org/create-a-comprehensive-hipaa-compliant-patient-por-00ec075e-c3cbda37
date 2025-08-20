import { WelcomeBanner } from '@/components/WelcomeBanner';
import { DashboardCard } from '@/components/DashboardCard';
import { CalendarCheck2, FileText, MessageCircle, Bell, FileUp, Pill } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Appointments',
    description: 'View and schedule doctor appointments at your convenience.',
    icon: CalendarCheck2,
    to: '/appointments',
  },
  {
    title: 'Medical Records',
    description: 'Access all your medical records securely, anytime.',
    icon: FileText,
    to: '/medical-records',
  },
  {
    title: 'Prescriptions',
    description: 'Track prescriptions, refills, and medication history easily.',
    icon: Pill,
    to: '/prescriptions',
  },
  {
    title: 'Messaging',
    description: 'Communicate directly with your care team securely.',
    icon: MessageCircle,
    to: '/messaging',
  },
  {
    title: 'File Upload',
    description: 'Upload and manage your important health documents.',
    icon: FileUp,
    to: '/file-upload',
  },
  {
    title: 'Notifications',
    description: 'Stay up to date with critical alerts and messages.',
    icon: Bell,
    to: '/notifications',
  },
];

export const Dashboard = () => {
  // Fake user name for demonstration
  const userName = 'Alex';

  return (
    <main className="min-h-[calc(100vh-64px)] bg-slate-50">
      <WelcomeBanner name={userName} />
      <motion.section
        className="max-w-6xl mx-auto px-4 py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
        }}
      >
        {features.map((f, idx) => (
          <motion.div key={f.title} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
            <DashboardCard {...f} />
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
};
