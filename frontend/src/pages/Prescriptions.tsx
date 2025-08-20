import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const mockPrescriptions = [
  {
    id: 'rx1',
    name: 'Atorvastatin 20mg',
    provider: 'Dr. Samantha Grey',
    filled: '2024-05-12',
    status: 'Active',
  },
  {
    id: 'rx2',
    name: 'Lisinopril 10mg',
    provider: 'Dr. Alan White',
    filled: '2024-04-25',
    status: 'Active',
  },
  {
    id: 'rx3',
    name: 'Metformin 500mg',
    provider: 'Dr. Samantha Grey',
    filled: '2024-04-10',
    status: 'Complete',
  },
];

export function Prescriptions() {
  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-8 bg-blue-50 border-blue-100">
        <CardHeader className="flex flex-row items-center gap-2">
          <Pill className="text-blue-700 h-7 w-7" />
          <CardTitle className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Prescriptions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Manage and refill your active prescriptions.
          </p>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {mockPrescriptions.map(rx => (
          <motion.div
            key={rx.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * Number(rx.id.replace(/\D/g, '')), duration: 0.4 }}
          >
            <Card className="border-blue-100 bg-white shadow-sm group transition-transform hover:scale-[1.025]">
              <CardHeader className="flex flex-row items-center gap-3">
                <Pill className="text-blue-500 h-6 w-6" />
                <div>
                  <CardTitle className="text-blue-900 font-semibold text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>{rx.name}</CardTitle>
                  <div className="text-sm text-slate-500">{rx.provider}</div>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-between mt-2">
                <span className="text-xs text-slate-400">Filled: {rx.filled}</span>
                {rx.status === 'Active' && (
                  <Button id={`refill-${rx.id}`} variant="outline" size="icon">
                    <RefreshCw className="h-5 w-5 text-green-600" />
                  </Button>
                )}
                {rx.status === 'Complete' && (
                  <span className="text-xs text-slate-300 italic">Complete</span>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
