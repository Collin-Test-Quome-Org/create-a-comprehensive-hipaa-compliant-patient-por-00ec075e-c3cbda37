import { Card, CardContent } from '@/components/ui/card';
import { Bell, CheckCircle2, FileText, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const mockNotifications = [
  {
    id: 'notif-1',
    type: 'Lab Results',
    message: 'New cholesterol panel results available. View in Medical Records.',
    time: 'Just now',
    icon: <FileText className="text-blue-700" />,
    unread: true,
  },
  {
    id: 'notif-2',
    type: 'Appointment',
    message: 'Appointment with Dr. Lee Tran confirmed for June 20th.',
    time: '2 hours ago',
    icon: <Calendar className="text-blue-700" />,
    unread: false,
  },
  {
    id: 'notif-3',
    type: 'Prescription',
    message: 'Atorvastatin refill approved. Ready for pickup.',
    time: 'Yesterday',
    icon: <CheckCircle2 className="text-green-600" />,
    unread: false,
  },
];

export function Notifications() {
  return (
    <motion.div
      className="container mx-auto py-10 px-4"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Bell className="text-blue-700" />
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Notifications
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNotifications.map((notif) => (
          <motion.div key={notif.id} whileHover={{ scale: 1.025 }}>
            <Card className={`h-full border-blue-100 shadow-sm ${notif.unread ? 'ring-2 ring-blue-300' : ''}`}>
              <CardContent className="flex flex-row items-center gap-3 py-6">
                <div className="flex-shrink-0">{notif.icon}</div>
                <div>
                  <div className="font-semibold text-blue-900 mb-1">{notif.type}</div>
                  <div className="text-slate-700 text-sm mb-1">{notif.message}</div>
                  <div className="text-xs text-slate-500">{notif.time}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
