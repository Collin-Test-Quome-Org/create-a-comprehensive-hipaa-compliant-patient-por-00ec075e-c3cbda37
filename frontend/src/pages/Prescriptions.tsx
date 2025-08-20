import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Pill, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const mockPrescriptions = [
  {
    id: 'rx-1',
    medication: 'Lisinopril 10mg',
    provider: 'Dr. Lee',
    lastFilled: '2024-06-01',
    status: 'Active',
  },
  {
    id: 'rx-2',
    medication: 'Atorvastatin 20mg',
    provider: 'Dr. Patel',
    lastFilled: '2024-05-24',
    status: 'Refill Requested',
  },
];

export function Prescriptions() {
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => setIsLoaded(true), 150);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      className="container mx-auto px-4 py-12 min-h-[calc(100vh-80px)]"
    >
      <div className="flex items-center gap-3 mb-4">
        <Pill className="text-blue-700" />
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Your Prescriptions
        </h1>
      </div>
      <p className="text-slate-600 mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Manage your active prescriptions, request refills, and review your medication history securely.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockPrescriptions.map((rx) => (
          <Card key={rx.id} className="hover:shadow-lg transition-shadow group">
            <CardHeader className="flex flex-row items-center gap-2 justify-between">
              <CardTitle className="text-blue-900 flex gap-2 items-center">
                <Pill className="w-5 h-5 text-blue-700" /> {rx.medication}
              </CardTitle>
              <span className="text-xs text-slate-400">Last filled: {rx.lastFilled}</span>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-semibold text-slate-700">{rx.status}</span>
                <span className="text-xs text-slate-500">Provider: {rx.provider}</span>
              </div>
              <Button asChild id={`rx-view-${rx.id}`} variant="outline" className="w-full group-hover:bg-blue-50">
                <Link to={`/prescriptions/${rx.id}`}>Details <ArrowRight className="ml-1 w-4 h-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
