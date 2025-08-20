import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarCheck, FileText, MessageCircle, ShieldCheck, Pill, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <ShieldCheck className="text-blue-700 w-8 h-8 mb-3" />,  
    title: 'Secure Records',
    description: 'Access and manage your health records with industry-leading encryption and privacy.'
  },
  {
    icon: <CalendarCheck className="text-blue-700 w-8 h-8 mb-3" />,
    title: 'Appointments',
    description: 'Book, view, and manage your appointments with ease and flexibility.'
  },
  {
    icon: <MessageCircle className="text-blue-700 w-8 h-8 mb-3" />,
    title: 'Messaging',
    description: 'Communicate directly with your healthcare team from anywhere, anytime.'
  },
  {
    icon: <Pill className="text-blue-700 w-8 h-8 mb-3" />,
    title: 'Prescriptions',
    description: 'Manage and refill prescriptions, view medication details, and reminders.'
  },
  {
    icon: <FileText className="text-blue-700 w-8 h-8 mb-3" />,
    title: 'File Uploads',
    description: 'Easily upload important health documents for seamless care.'
  },
  {
    icon: <Bell className="text-blue-700 w-8 h-8 mb-3" />,
    title: 'Notifications',
    description: 'Stay up-to-date with important health alerts and reminders.'
  },
];

export function FeatureCards() {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 max-w-6xl mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
      }}
    >
      {features.map((feature, idx) => (
        <motion.div
          key={feature.title}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <Card className="shadow-lg rounded-2xl border-blue-100 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <CardHeader className="flex flex-col items-center pt-6">
              {feature.icon}
              <CardTitle className="font-['Roboto'] text-xl text-blue-900 mb-1">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 text-center pb-6 font-['Roboto']">
              {feature.description}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
