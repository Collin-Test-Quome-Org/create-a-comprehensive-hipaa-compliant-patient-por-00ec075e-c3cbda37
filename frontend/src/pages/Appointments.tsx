import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, User, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const mockAppointments = [
  {
    id: 'appt-1',
    provider: 'Dr. Harper Lee',
    type: 'Telehealth',
    date: '2024-06-12',
    time: '11:00 AM',
    status: 'Confirmed',
  },
  {
    id: 'appt-2',
    provider: 'Dr. Amir Patel',
    type: 'In-person',
    date: '2024-06-21',
    time: '2:30 PM',
    status: 'Requested',
  },
];

export function Appointments() {
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => setIsLoaded(true), 200);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      className="container mx-auto px-4 py-12 min-h-[calc(100vh-80px)]"
    >
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="text-blue-700" />
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Your Appointments
        </h1>
      </div>
      <p className="text-slate-600 mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Schedule, manage, and review your appointments securely. Video visits and in-person options available.
      </p>
      <Button asChild id="schedule-appt-btn" className="mb-6 bg-blue-700 text-white hover:bg-blue-900">
        <Link to="/appointments/new">+ Schedule New Appointment</Link>
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockAppointments.map((appt) => (
          <Card key={appt.id} className="hover:shadow-lg transition-shadow group">
            <CardHeader className="flex flex-row items-center gap-2 justify-between">
              <CardTitle className="text-blue-900 flex gap-2 items-center">
                <User className="w-5 h-5 text-blue-700" /> {appt.provider}
              </CardTitle>
              <span className="text-xs text-slate-400">{appt.date} @ {appt.time}</span>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-semibold text-slate-700">{appt.type}</span>
                {appt.status === 'Confirmed' ? (
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-yellow-500" />
                )}
                <span className="text-xs text-slate-500">{appt.status}</span>
              </div>
              <Button asChild id={`appt-view-${appt.id}`} variant="outline" className="w-full group-hover:bg-blue-50">
                <Link to={`/appointments/${appt.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
