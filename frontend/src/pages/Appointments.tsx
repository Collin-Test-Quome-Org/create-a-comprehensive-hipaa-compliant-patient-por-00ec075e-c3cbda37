import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, CalendarCheck, User } from 'lucide-react';
import { motion } from 'framer-motion';

const mockAppointments = [
  {
    id: 'appt-001',
    date: '2024-06-17',
    time: '10:00 AM',
    with: 'Dr. Marquez',
    type: 'Consultation',
    status: 'Confirmed',
  },
  {
    id: 'appt-002',
    date: '2024-07-01',
    time: '2:30 PM',
    with: 'Dr. Choi',
    type: 'Follow-up',
    status: 'Pending',
  },
];

export function Appointments() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Calendar className="text-blue-700" />
            My Appointments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button id="schedule-appointment-btn" className="mb-2" onClick={() => alert('Scheduling coming soon!')}>Schedule New Appointment</Button>
          <CardDescription className="text-slate-600">Manage your upcoming visits and check confirmations. All appointments are kept private and secure.</CardDescription>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-6">
        {mockAppointments.map((appt) => (
          <motion.div
            key={appt.id}
            whileHover={{ scale: 1.025, boxShadow: '0 4px 18px rgba(29,78,216,0.10)' }}
          >
            <Card className="relative border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CalendarCheck className="text-blue-700" />
                  <span className="font-semibold text-blue-900">{appt.type}</span>
                  <span className={`ml-auto px-2 py-1 rounded text-xs font-medium ${appt.status === 'Confirmed' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-50 text-yellow-700'}`}>{appt.status}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{appt.date} &bull; {appt.time}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mt-2">
                  <span className="flex items-center text-sm text-slate-600">
                    <User className="h-4 w-4 mr-1 text-blue-400" /> {appt.with}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    id={`cancel-appt-${appt.id}`}
                    onClick={() => alert('Cancel feature coming soon!')}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
