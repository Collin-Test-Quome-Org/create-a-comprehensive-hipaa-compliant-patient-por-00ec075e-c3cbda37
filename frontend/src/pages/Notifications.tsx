import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCircle2, FileText } from 'lucide-react';

const mockNotifs = [
  {
    id: 'notif-1',
    type: 'Appointment Confirmed',
    detail: 'Your appointment with Dr. Lee is confirmed for 6/12/2024 at 11:00 AM.',
    date: '2024-06-08',
    unread: true,
  },
  {
    id: 'notif-2',
    type: 'Lab Result Ready',
    detail: 'Your blood test results are available in Medical Records.',
    date: '2024-06-06',
    unread: false,
  },
];

export function Notifications() {
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => setIsLoaded(true), 100);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      className="container mx-auto px-4 py-12 min-h-[calc(100vh-80px)]"
    >
      <div className="flex items-center gap-3 mb-4">
        <Bell className="text-blue-700" />
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Notifications
        </h1>
      </div>
      <p className="text-slate-600 mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Stay updated on your appointments, results, and important account alerts.
      </p>
      <ul className="divide-y divide-slate-200 bg-white rounded-xl shadow">
        {mockNotifs.map((notif) => (
          <li
            key={notif.id}
            className={`flex items-start py-4 px-6 gap-4 ${notif.unread ? 'bg-blue-50' : ''}`}
          >
            <div className="flex flex-col items-center pt-1">
              {notif.type.includes('Lab') ? (
                <FileText className="w-6 h-6 text-blue-700" />
              ) : (
                <CheckCircle2 className="w-6 h-6 text-green-700" />
              )}
            </div>
            <div className="flex-1">
              <div className="font-bold text-blue-900">{notif.type}</div>
              <div className="text-slate-700 mb-1">{notif.detail}</div>
              <div className="text-xs text-slate-400">{notif.date}</div>
            </div>
            {notif.unread && <span className="mt-1 text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-900">New</span>}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
