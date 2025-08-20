import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, RefreshCcw, CheckCircle2, Clock } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const mockPrescriptions = [
  {
    id: 'rx-1',
    name: 'Atorvastatin',
    dosage: '20mg',
    instructions: 'Take 1 tablet daily',
    status: 'Active',
    lastFilled: '2024-04-10',
    refills: 2,
  },
  {
    id: 'rx-2',
    name: 'Metformin',
    dosage: '500mg',
    instructions: 'Twice daily with food',
    status: 'Refill Requested',
    lastFilled: '2024-03-02',
    refills: 0,
  },
  {
    id: 'rx-3',
    name: 'Lisinopril',
    dosage: '10mg',
    instructions: 'Take 1 tablet every morning',
    status: 'Completed',
    lastFilled: '2023-12-20',
    refills: 0,
  },
];

export function Prescriptions() {
  const [requested, setRequested] = useState<string | null>(null);

  return (
    <motion.div
      className="container mx-auto py-10 px-4"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Prescriptions
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPrescriptions.map((rx) => (
          <motion.div key={rx.id} whileHover={{ scale: 1.025 }}>
            <Card className="h-full border-blue-100 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Pill className="text-blue-600 mr-2" />
                <CardTitle className="text-lg font-semibold text-blue-900">
                  {rx.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-700 mb-1 text-sm">
                  {rx.dosage} &bull; {rx.instructions}
                </div>
                <div className="text-xs text-slate-500 mb-1">
                  Last filled: {rx.lastFilled}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  {rx.status === 'Active' && (
                    <span className="flex items-center text-green-600 text-xs font-semibold"><CheckCircle2 className="w-4 h-4 mr-1" /> Active</span>
                  )}
                  {rx.status === 'Refill Requested' && (
                    <span className="flex items-center text-blue-600 text-xs font-semibold"><Clock className="w-4 h-4 mr-1" /> Pending Refill</span>
                  )}
                  {rx.status === 'Completed' && (
                    <span className="flex items-center text-slate-500 text-xs font-semibold"><CheckCircle2 className="w-4 h-4 mr-1" /> Completed</span>
                  )}
                </div>
                {rx.status === 'Active' && !requested && rx.refills > 0 && (
                  <Button
                    id={`request-refill-${rx.id}`}
                    variant="secondary"
                    size="sm"
                    className="mt-4"
                    onClick={() => setRequested(rx.id)}
                  >
                    <RefreshCcw className="w-4 h-4 mr-1" /> Request Refill
                  </Button>
                )}
                {requested === rx.id && (
                  <motion.div
                    className="mt-4 text-xs text-blue-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Refill requested. Your provider's office will notify you when ready.
                  </motion.div>
                )}
                {rx.refills === 0 && (
                  <div className="text-xs text-slate-400 mt-2">No refills remaining. Contact provider.</div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
