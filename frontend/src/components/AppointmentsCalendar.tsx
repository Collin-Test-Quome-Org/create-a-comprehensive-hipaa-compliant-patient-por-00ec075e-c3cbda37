import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, User, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const appointments = [
  {
    id: 'appt-001',
    provider: 'Dr. Emily Chen',
    date: '2024-07-08',
    time: '10:30 AM',
    type: 'In-Person',
    location: 'CareShield Clinic, Rm 202',
    status: 'Confirmed',
  },
  {
    id: 'appt-002',
    provider: 'Dr. Michael Lane',
    date: '2024-07-16',
    time: '9:00 AM',
    type: 'Video',
    location: 'Telehealth Video Link',
    status: 'Pending',
  },
  {
    id: 'appt-003',
    provider: 'Dr. Olivia Patel',
    date: '2024-08-02',
    time: '1:45 PM',
    type: 'In-Person',
    location: 'CareShield Clinic, Rm 108',
    status: 'Confirmed',
  },
];

function getTypeIcon(type: string) {
  return type === 'Video' ? <Video className="w-5 h-5 text-blue-700 inline mr-1" /> : <User className="w-5 h-5 text-blue-700 inline mr-1" />;
}

export function AppointmentsCalendar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {appointments.map(appt => (
        <Card key={appt.id} className="bg-white border-2 border-blue-50 shadow-md hover:border-blue-300 transition-all">
          <CardHeader className="flex-row items-center space-x-3">
            <CalendarDays className="text-blue-700" />
            <div>
              <h3 className="font-bold text-blue-900 text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>{appt.provider}</h3>
              <p className="text-xs text-slate-600 font-mono tracking-widest">{appt.date} • {appt.time}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-2">
              {getTypeIcon(appt.type)}
              <span className="text-sm text-slate-700">{appt.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-700">{appt.location}</span>
            </div>
            <div className="mt-4">
              <span className={`px-2 py-1 text-xs rounded-full font-bold ${appt.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{appt.status}</span>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 justify-between items-center">
            <Button asChild id={`view-appt-${appt.id}`} size="sm" variant="secondary">
              <Link to={`/appointments/${appt.id}`}>Details</Link>
            </Button>
            <Button asChild id={`cancel-appt-${appt.id}`} variant="ghost" size="sm" disabled={appt.status !== 'Confirmed'}>
              <span>Cancel</span>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </motion.div>
  );
}
