import { Bell, CalendarCheck2, FileText, FlaskConical } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const mockNotifications = [
  {
    id: 'notif-1',
    type: 'appointment',
    title: 'Appointment Confirmed',
    message: 'Your appointment with Dr. Jane Smith is confirmed for July 12 at 10:00 AM.',
    timestamp: '2024-06-10 10:05',
    icon: <CalendarCheck2 className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 'notif-2',
    type: 'lab',
    title: 'Lab Results Ready',
    message: 'Your CBC results are now available in Medical Records.',
    timestamp: '2024-06-09 15:40',
    icon: <FlaskConical className="w-5 h-5 text-green-600" />,
  },
  {
    id: 'notif-3',
    type: 'document',
    title: 'New Document Uploaded',
    message: 'MRI Scan report has been added to your records.',
    timestamp: '2024-06-06 11:10',
    icon: <FileText className="w-5 h-5 text-slate-500" />,
  },
];

export function Notifications() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12 min-h-[calc(100vh-128px)]"
    >
      <div className="mb-8 flex items-center gap-3">
        <Bell className="w-7 h-7 text-blue-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Notifications
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        {mockNotifications.map((notif, i) => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.3, type: 'spring' }}
          >
            <Card className="border-blue-100 flex flex-row items-center gap-3">
              <CardHeader className="pr-3 flex items-center justify-center">
                {notif.icon}
              </CardHeader>
              <CardContent className="flex-1">
                <CardTitle className="text-blue-900 text-lg font-semibold" style={{ fontFamily: 'Roboto, sans-serif' }}>{notif.title}</CardTitle>
                <div className="text-slate-600 text-sm mb-1">{notif.message}</div>
                <div className="text-xs text-slate-400">{notif.timestamp}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
