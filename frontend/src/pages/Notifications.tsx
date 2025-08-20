import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const mockNotifications = [
  {
    id: 'n1',
    type: 'Appointment',
    message: 'Your appointment with Dr. Samantha Grey is confirmed for June 20, 10:30 AM.',
    date: '2024-06-10',
    unread: true,
  },
  {
    id: 'n2',
    type: 'Lab Result',
    message: 'Lab results for your annual physical have been uploaded.',
    date: '2024-06-07',
    unread: false,
  },
  {
    id: 'n3',
    type: 'Prescription',
    message: 'Your refill for Atorvastatin 20mg has been approved.',
    date: '2024-06-01',
    unread: false,
  },
];

export function Notifications() {
  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-8 bg-blue-50 border-blue-100">
        <CardHeader className="flex flex-row items-center gap-2">
          <Bell className="text-blue-700 h-7 w-7" />
          <CardTitle className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Stay updated about your healthcare.
          </p>
        </CardContent>
      </Card>
      <div className="bg-white rounded-lg shadow p-6 border border-blue-100 max-w-2xl mx-auto">
        <h3 className="font-semibold text-blue-800 mb-5 text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Recent Activity
        </h3>
        <div className="divide-y divide-blue-50">
          {mockNotifications.map(notif => (
            <div key={notif.id} className={`py-4 flex items-start gap-3 group ${notif.unread ? 'bg-blue-50' : ''}`}>
              <div className={`rounded-full h-10 w-10 flex items-center justify-center ${notif.unread ? 'bg-blue-200' : 'bg-slate-100'}`}>
                <Bell className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>{notif.type}</span>
                  <span className="text-xs text-slate-400">{notif.date}</span>
                </div>
                <span className="text-slate-700 text-sm line-clamp-2">{notif.message}</span>
              </div>
              {notif.unread && (
                <span className="rounded-full bg-blue-600 w-2 h-2 mt-2" />
              )}
            </div>
          ))}
          {mockNotifications.length === 0 && (
            <div className="text-slate-400 py-8 text-center">No notifications</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
