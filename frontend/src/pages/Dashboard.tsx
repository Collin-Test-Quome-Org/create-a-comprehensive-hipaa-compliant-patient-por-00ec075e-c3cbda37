import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Bell, Calendar, FolderOpen, MessageSquare, Pill } from 'lucide-react';

const mockCounts = {
  appointments: 2,
  records: 12,
  prescriptions: 3,
  messages: 5,
  notifications: 2,
};

export function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 250);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      className="container mx-auto px-4 py-12 min-h-[calc(100vh-80px)] flex flex-col"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Welcome to Your Secure CareShield Portal
      </h1>
      <p className="text-lg text-slate-600 mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
        At CareShield, we put trust and ease at the heart of your healthcare experience. Manage records, appointments, prescriptions, and conversations with your care team—all in one HIPAA-compliant space.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        <motion.div whileHover={{ scale: 1.03 }}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-2">
              <Calendar className="text-blue-700" />
              <CardTitle className="text-blue-900">Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl mb-2 text-blue-900">{mockCounts.appointments}</div>
              <Button asChild id="dashboard-appts-btn" variant="outline" className="w-full">
                <Link to="/appointments">Manage</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-2">
              <FolderOpen className="text-blue-700" />
              <CardTitle className="text-blue-900">Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl mb-2 text-blue-900">{mockCounts.records}</div>
              <Button asChild id="dashboard-records-btn" variant="outline" className="w-full">
                <Link to="/medical-records">View</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-2">
              <Pill className="text-blue-700" />
              <CardTitle className="text-blue-900">Prescriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl mb-2 text-blue-900">{mockCounts.prescriptions}</div>
              <Button asChild id="dashboard-rx-btn" variant="outline" className="w-full">
                <Link to="/prescriptions">Manage</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-2">
              <MessageSquare className="text-blue-700" />
              <CardTitle className="text-blue-900">Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl mb-2 text-blue-900">{mockCounts.messages}</div>
              <Button asChild id="dashboard-msg-btn" variant="outline" className="w-full">
                <Link to="/messages">Inbox</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-2">
              <Bell className="text-blue-700" />
              <CardTitle className="text-blue-900">Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl mb-2 text-blue-900">{mockCounts.notifications}</div>
              <Button asChild id="dashboard-notif-btn" variant="outline" className="w-full">
                <Link to="/notifications">View</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
