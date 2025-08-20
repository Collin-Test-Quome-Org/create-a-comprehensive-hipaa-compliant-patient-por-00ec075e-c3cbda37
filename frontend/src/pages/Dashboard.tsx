import { DashboardCard } from '@/components/DashboardCard';
import { RecentMessages } from '@/components/RecentMessages';
import { Calendar, FileText, Stethoscope, ShieldCheck, MessageCircle, Bell, FileUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function Dashboard() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-slate-50">
      <motion.header
        initial={{ opacity: 0, y: -32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 py-10"
      >
        <h1
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-2"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Welcome to your CareShield Portal
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
          Securely manage your health—medical records, appointments, prescriptions, and more—all in one place.
        </p>
      </motion.header>
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardCard
          id="dashboard-medical-records"
          title="Medical Records"
          description="Access and review your health history and lab results."
          to="/medical-records"
          icon={<FileText size={26} />}
        />
        <DashboardCard
          id="dashboard-appointments"
          title="Appointments"
          description="View, schedule, or manage your appointments."
          to="/appointments"
          icon={<Calendar size={26} />}
        />
        <DashboardCard
          id="dashboard-prescriptions"
          title="Prescriptions"
          description="Refill and view your active and past prescriptions."
          to="/prescriptions"
          icon={<Stethoscope size={26} />}
        />
        <DashboardCard
          id="dashboard-messages"
          title="Messages"
          description="Communicate securely with your care team."
          to="/messages"
          icon={<MessageCircle size={26} />}
        />
        <DashboardCard
          id="dashboard-uploads"
          title="Documents & Uploads"
          description="View and upload your medical documents."
          to="/documents"
          icon={<FileUp size={26} />}
        />
        <DashboardCard
          id="dashboard-notifications"
          title="Notifications"
          description="Stay updated on appointments and lab results."
          to="/notifications"
          icon={<Bell size={26} />}
        />
      </section>
      <section className="container mx-auto px-4 max-w-xl mb-12">
        <RecentMessages />
      </section>
    </div>
  );
}
