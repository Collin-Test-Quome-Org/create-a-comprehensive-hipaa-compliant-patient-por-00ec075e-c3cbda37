import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Bell, CheckCircle, FlaskConical, CalendarCheck2 } from 'lucide-react';
import { motion } from 'framer-motion';

const mockNotifications = [
  {
    id: 'notif-001',
    type: 'Appointment',
    message: 'Your appointment with Dr. Marquez is confirmed for June 17, 10:00 AM.',
    date: '2024-06-11',
    icon: <CalendarCheck2 className="text-blue-700" />,
  },
  {
    id: 'notif-002',
    type: 'Lab Result',
    message: 'New blood test results are now available in your medical records.',
    date: '2024-06-09',
    icon: <FlaskConical className="text-green-700" />,
  },
  {
    id: 'notif-003',
    type: 'Prescription',
    message: 'Your prescription for Lisinopril is ready for refill.',
    date: '2024-06-05',
    icon: <CheckCircle className="text-blue-500" />,
  },
];

export function Notifications() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Bell className="text-blue-700" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-2">Stay up to date on appointment confirmations, lab results, and more. All notifications are delivered securely and in real time.</p>
        </CardContent>
      </Card>
      <div className="space-y-4">
        {mockNotifications.map((notif) => (
          <motion.div
            key={notif.id}
            whileHover={{ scale: 1.01, boxShadow: '0 2px 12px rgba(29,78,216,0.08)' }}
          >
            <Card className="flex items-center gap-4 border-blue-100">
              <div className="p-3">{notif.icon}</div>
              <div className="flex flex-col">
                <span className="text-blue-900 font-medium">{notif.message}</span>
                <span className="text-xs text-slate-500">{notif.date}</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
