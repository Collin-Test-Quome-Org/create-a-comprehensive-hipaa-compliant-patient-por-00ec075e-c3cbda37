import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, PlusCircle, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const mockAppointments = [
  {
    id: 'appt-1',
    date: '2024-06-01',
    time: '09:00',
    provider: 'Dr. Susan Hart',
    type: 'Annual Physical',
    status: 'Confirmed',
  },
  {
    id: 'appt-2',
    date: '2024-06-15',
    time: '15:30',
    provider: 'Dr. Alex Clark',
    type: 'Dermatology',
    status: 'Pending',
  },
];

export function Appointments() {
  const [appointments] = useState(mockAppointments);

  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8 shadow-md">
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <div>
            <CardTitle className="font-roboto font-bold text-2xl text-blue-900">Appointments</CardTitle>
            <CardDescription>
              View your upcoming appointments and schedule new visits.
            </CardDescription>
          </div>
          <Button asChild id="schedule-appointment-btn" className="gap-2">
            <Link to="#">
              <PlusCircle className="w-5 h-5" /> Schedule New
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {appointments.length === 0 && (
              <div className="text-slate-500">You have no upcoming appointments.</div>
            )}
            {appointments.map(appt => (
              <Card key={appt.id} className="flex flex-col md:flex-row items-center gap-4 p-4 bg-slate-50 border-blue-100">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <Calendar className="text-blue-700" size={32} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-blue-900 text-lg">{appt.type}</div>
                  <div className="text-sm text-slate-500 mb-1 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {appt.date} at {appt.time}
                  </div>
                  <div className="text-sm text-slate-700 flex items-center gap-2">
                    <User className="w-4 h-4" /> {appt.provider}
                  </div>
                  <div className="mt-1 text-xs inline-block px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {appt.status}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button asChild variant="outline" id={`appt-details-${appt.id}`}>
                    <Link to="#">Details</Link>
                  </Button>
                  <Button asChild variant="secondary" id={`appt-cancel-${appt.id}`}> 
                    <Link to="#">Cancel</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
