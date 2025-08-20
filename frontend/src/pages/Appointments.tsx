import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Plus, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Mock appointments
const mockAppointments = [
  {
    id: 'appt-1',
    date: '2024-07-12',
    time: '9:30 AM',
    type: 'Primary Care',
    provider: 'Dr. Amy Carter',
    status: 'Confirmed',
  },
  {
    id: 'appt-2',
    date: '2024-06-20',
    time: '2:00 PM',
    type: 'Dermatology',
    provider: 'Dr. Lee Tran',
    status: 'Upcoming',
  },
  {
    id: 'appt-3',
    date: '2024-05-05',
    time: '11:00 AM',
    type: 'Lab Work',
    provider: 'Lab Department',
    status: 'Completed',
  },
];

export function Appointments() {
  const [canceledId, setCanceledId] = useState<string | null>(null);

  return (
    <motion.div
      className="container mx-auto py-10 px-4"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Appointments
        </h1>
        <Button id="new-appointment-btn" className="bg-blue-700 text-white hover:bg-blue-900 flex gap-1" size="sm">
          <Plus className="w-4 h-4" /> Schedule
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockAppointments.map((appt) => (
          <motion.div key={appt.id} whileHover={{ scale: 1.025 }}>
            <Card className="h-full border-blue-100 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Calendar className="text-blue-600 mr-2" />
                <CardTitle className="text-lg font-semibold text-blue-900">
                  {appt.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-700 mb-1 text-sm">
                  {appt.provider}
                </div>
                <div className="text-xs text-slate-500 mb-1">
                  {appt.date} &bull; {appt.time}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  {appt.status === 'Confirmed' && (
                    <span className="flex items-center text-green-600 text-xs font-semibold"><CheckCircle2 className="w-4 h-4 mr-1" /> Confirmed</span>
                  )}
                  {appt.status === 'Upcoming' && (
                    <span className="flex items-center text-blue-600 text-xs font-semibold"><Calendar className="w-4 h-4 mr-1" /> Upcoming</span>
                  )}
                  {appt.status === 'Completed' && (
                    <span className="flex items-center text-slate-500 text-xs font-semibold"><CheckCircle2 className="w-4 h-4 mr-1" /> Completed</span>
                  )}
                </div>
                {appt.status !== 'Completed' && !canceledId && (
                  <Button
                    id={`cancel-appointment-${appt.id}`}
                    variant="destructive"
                    size="sm"
                    className="mt-4"
                    onClick={() => setCanceledId(appt.id)}
                  >
                    <XCircle className="w-4 h-4 mr-1" /> Cancel
                  </Button>
                )}
                {canceledId === appt.id && (
                  <motion.div
                    className="mt-4 text-xs text-red-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Appointment canceled (demo only).<br />A secure notification will be sent to your care team.
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
