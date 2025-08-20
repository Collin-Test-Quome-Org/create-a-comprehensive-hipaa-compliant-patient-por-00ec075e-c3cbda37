import { AppointmentsCalendar } from '@/components/AppointmentsCalendar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Appointments() {
  return (
    <div className="bg-slate-50 min-h-[calc(100vh-64px)] pb-20">
      <div className="container mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 md:gap-0">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Appointments
              </h1>
              <p className="text-slate-700 max-w-2xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Manage your upcoming and past visits. Schedule new appointments, view details, or join your next video visit.
              </p>
            </div>
            <Button asChild id="schedule-appointment-btn" size="lg" className="bg-blue-700 text-white hover:bg-blue-900 shadow-lg">
              <Link to="/appointments/new">Schedule Appointment</Link>
            </Button>
          </div>
        </motion.div>
        <AppointmentsCalendar />
      </div>
    </div>
  );
}
