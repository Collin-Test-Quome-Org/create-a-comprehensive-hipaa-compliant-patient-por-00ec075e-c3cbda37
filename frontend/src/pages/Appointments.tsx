import { CalendarDays, CheckCircle2, Clock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const mockAppointments = [
  {
    id: 'appt1',
    provider: 'Dr. Jane Smith',
    date: '2024-06-12',
    time: '9:30 AM',
    location: 'Main Clinic - Room 102',
    status: 'Confirmed',
  },
  {
    id: 'appt2',
    provider: 'Dr. Alex Jang',
    date: '2024-07-02',
    time: '2:00 PM',
    location: 'Televisit',
    status: 'Scheduled',
  }
];

export function Appointments() {
  return (
    <div className="container mx-auto py-10 min-h-[calc(100vh-72px)]">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 font-[Roboto]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Your Upcoming Appointments
      </motion.h1>
      <div className="flex flex-col gap-6 max-w-2xl">
        {mockAppointments.map(appt => (
          <motion.div
            key={appt.id}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="rounded-xl border border-slate-100 shadow-md hover:shadow-lg transition">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <CalendarDays className="text-blue-600 w-7 h-7" />
                <CardTitle className="font-[Roboto] text-lg text-slate-800">
                  {appt.date} &bull; {appt.time}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-slate-600 mb-2">
                  <User className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">{appt.provider}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 mb-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">{appt.location}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-600">{appt.status}</span>
                </div>
                <Button variant="outline" className="w-full" id={`reschedule-appt-${appt.id}`}>Reschedule</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-10">
        <Button id="schedule-appointment" size="lg">+ Schedule New Appointment</Button>
      </div>
    </div>
  );
}
