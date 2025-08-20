import { Calendar, CalendarDays, CheckCircle2, Plus, User2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const mockAppointments = [
  {
    id: 'appt-01',
    date: '2024-07-12',
    time: '10:00 AM',
    provider: 'Dr. Jane Smith',
    location: 'HealthFirst Clinic, Room 204',
    status: 'confirmed',
  },
  {
    id: 'appt-02',
    date: '2024-08-03',
    time: '2:30 PM',
    provider: 'Dr. Alex Chen',
    location: 'HealthFirst Clinic, Room 103',
    status: 'pending',
  },
];

export function Appointments() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12 min-h-[calc(100vh-128px)]"
    >
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
            My Appointments
          </h1>
          <p className="text-slate-600 mt-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Manage your upcoming and past appointments in one secure place.
          </p>
        </div>
        <Button id="schedule-appointment" variant="default" className="flex gap-2">
          <Plus className="w-5 h-5" /> Schedule New
        </Button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {mockAppointments.map((appt, i) => (
          <motion.div
            key={appt.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.4, type: 'spring' }}
          >
            <Card className="border-blue-100 transition-shadow hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <CalendarDays className="w-7 h-7 text-blue-500" />
                <CardTitle className="text-blue-900 text-lg font-semibold" style={{ fontFamily: 'Roboto, sans-serif' }}>Appointment</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-slate-600 mb-2 text-sm">
                  <span className="font-medium">Date:</span> {appt.date} at {appt.time}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 mb-2">
                  <User2 className="w-4 h-4" />
                  <span>{appt.provider}</span>
                </div>
                <div className="text-xs text-slate-500 mb-2">
                  <span className="font-medium">Location:</span> {appt.location}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {appt.status === 'confirmed' ? (
                    <span className="flex items-center gap-1 text-green-600 text-xs">
                      <CheckCircle2 className="w-4 h-4" /> Confirmed
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-yellow-500 text-xs">
                      <Calendar className="w-4 h-4" /> Pending
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
