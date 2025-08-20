import { Hero } from '@/components/Hero'
import { DashboardCard } from '@/components/DashboardCard'
import { RecentMessages } from '@/components/RecentMessages'
import { CalendarCheck, FileText, ClipboardCheck, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function HomePage() {
  // Example mock stats
  const stats = [
    {
      icon: <CalendarCheck className="w-8 h-8" />, title: 'Appointments', count: 3, description: 'Upcoming visits scheduled', link: '/appointments'
    },
    {
      icon: <FileText className="w-8 h-8" />, title: 'Medical Records', count: 12, description: 'Records securely stored', link: '/medical-records'
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />, title: 'Prescriptions', count: 2, description: 'Active medications', link: '/prescriptions'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />, title: 'Messages', count: 5, description: 'Unread messages', link: '/messaging'
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-['Roboto'] text-3xl md:text-4xl font-bold mb-8 text-primary">
          Welcome back to Medishield Portal
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <Link to={stat.link} key={stat.title} className="block focus:outline-none">
              <DashboardCard {...stat} />
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <RecentMessages />
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-primary/5 rounded-lg p-8 shadow-md flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-2 text-primary">"Your Health, Our Priority."</h3>
            <p className="text-slate-700 mb-6 text-center">At Medishield Portal, we believe in empowering you with tools to take charge of your health journey—securely, simply, and on your terms.</p>
            <Button asChild id="explore-medical-records" className="bg-primary">
              <Link to="/medical-records">
                Explore Your Medical Records
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
