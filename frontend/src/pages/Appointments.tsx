import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const mockAppts = [
  {
    id: 'a1',
    provider: 'Dr. Samantha Grey',
    type: 'Primary Care',
    date: '2024-06-20',
    time: '10:30 AM',
    status: 'Confirmed',
  },
  {
    id: 'a2',
    provider: 'Dr. Alan White',
    type: 'Dermatology',
    date: '2024-07-02',
    time: '2:00 PM',
    status: 'Pending',
  },
];

export function Appointments() {
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-8 bg-blue-50 border-blue-100">
        <CardHeader className="flex flex-row items-center gap-2">
          <CalendarDays className="text-blue-700 h-7 w-7" />
          <CardTitle className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Appointments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
            View, schedule, or manage your appointments.
          </p>
          <Button id="schedule-appointment" className="mt-2" variant="default">
            <PlusCircle className="h-4 w-4 mr-1" /> Schedule New
          </Button>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6 border border-blue-100">
          <h3 className="font-semibold text-blue-800 mb-5 text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Upcoming Appointments
          </h3>
          <div className="divide-y divide-blue-50">
            {mockAppts.map(appt => (
              <div key={appt.id} className="py-3 flex items-center justify-between group">
                <div>
                  <span className="font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>{appt.date} <span className="text-blue-500">{appt.time}</span></span><br />
                  <span className="text-slate-700 text-sm">{appt.provider} • {appt.type}</span>
                </div>
                <span className={`text-xs rounded px-2 py-0.5 font-semibold ${appt.status === 'Confirmed' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>{appt.status}</span>
              </div>
            ))}
            {mockAppts.length === 0 && (
              <div className="text-slate-400 py-8 text-center">No upcoming appointments</div>
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border border-blue-100 flex flex-col items-center">
          <h3 className="font-semibold text-blue-800 mb-5 text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Appointment Calendar
          </h3>
          <Calendar
            id="appointment-calendar"
            mode="single"
            selected={selected}
            onSelect={setSelected}
            className="rounded-md border shadow-sm"
          />
        </div>
      </div>
    </motion.div>
  );
}
