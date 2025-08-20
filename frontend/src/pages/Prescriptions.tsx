import { Pill, Repeat2, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const mockPrescriptions = [
  {
    id: 'rx1',
    name: 'Atorvastatin 20mg',
    provider: 'Dr. Jane Smith',
    lastFilled: '2024-05-01',
    refills: 2,
    status: 'Active',
  },
  {
    id: 'rx2',
    name: 'Lisinopril 10mg',
    provider: 'Dr. Alex Jang',
    lastFilled: '2024-04-20',
    refills: 0,
    status: 'Needs Refill',
  },
];

export function Prescriptions() {
  return (
    <div className="container mx-auto py-10 min-h-[calc(100vh-72px)]">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 font-[Roboto]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Your Prescriptions
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        {mockPrescriptions.map(rx => (
          <motion.div
            key={rx.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="rounded-xl border border-slate-100 shadow-md hover:shadow-lg transition">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Pill className="text-blue-600 w-7 h-7" />
                <CardTitle className="font-[Roboto] text-lg text-slate-800">{rx.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-500 mb-1">Prescribed by: {rx.provider}</div>
                <div className="text-sm text-slate-500 mb-1">Last Filled: {rx.lastFilled}</div>
                <div className="flex items-center gap-2 mb-2">
                  <Repeat2 className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-blue-600">{rx.refills} refills left</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className={`w-4 h-4 ${rx.status === 'Active' ? 'text-green-500' : 'text-yellow-500'}`} />
                  <span className={`text-xs ${rx.status === 'Active' ? 'text-green-600' : 'text-yellow-600'}`}>{rx.status}</span>
                </div>
                <Button
                  id={`request-refill-${rx.id}`}
                  variant="outline"
                  className="w-full"
                  disabled={rx.refills === 0 && rx.status === 'Needs Refill' ? false : true}
                >
                  Request Refill
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
