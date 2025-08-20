import { AlertCircle, CalendarDays, FileText, Pill } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const notifications = [
  {
    id: 1,
    icon: <CalendarDays className="w-5 h-5 text-blue-600" />,
    title: 'Appointment Confirmed',
    description: 'Your appointment with Dr. Jane Smith is confirmed for June 12, 2024 at 9:30 AM.',
    date: '2024-06-01',
  },
  {
    id: 2,
    icon: <FileText className="w-5 h-5 text-green-600" />,
    title: 'Lab Results Available',
    description: 'Your CBC results are now available in your Medical Records.',
    date: '2024-05-28',
  },
  {
    id: 3,
    icon: <Pill className="w-5 h-5 text-yellow-600" />,
    title: 'Prescription Ready for Refill',
    description: 'You may request a refill for your Atorvastatin prescription.',
    date: '2024-05-15',
  },
  {
    id: 4,
    icon: <AlertCircle className="w-5 h-5 text-rose-600" />,
    title: 'Security Alert',
    description: 'A new device was used to access your account. If this wasn’t you, please update your password.',
    date: '2024-05-09',
  },
];

export function Notifications() {
  return (
    <div className="container mx-auto py-10 min-h-[calc(100vh-72px)]">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 font-[Roboto]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Notifications
      </motion.h1>
      <div className="flex flex-col gap-4 max-w-2xl">
        {notifications.map(note => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 }}
          >
            <Card className="rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition">
              <CardContent className="flex items-center gap-4 py-5 px-4">
                <div>{note.icon}</div>
                <div>
                  <div className="font-bold font-[Roboto] text-slate-700 mb-1">{note.title}</div>
                  <div className="text-sm text-slate-600 mb-1">{note.description}</div>
                  <div className="text-xs text-slate-400">{note.date}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
