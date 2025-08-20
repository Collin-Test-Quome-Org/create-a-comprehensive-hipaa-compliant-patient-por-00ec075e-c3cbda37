import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, RefreshCcw, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const mockPrescriptions = [
  {
    id: 'rx-001',
    name: 'Atorvastatin 10mg',
    provider: 'Dr. Sarah Lin',
    dateIssued: '2024-04-18',
    status: 'active',
    refillsLeft: 2,
  },
  {
    id: 'rx-002',
    name: 'Lisinopril 20mg',
    provider: 'Dr. Sarah Lin',
    dateIssued: '2024-01-15',
    status: 'expired',
    refillsLeft: 0,
  },
  {
    id: 'rx-003',
    name: 'Albuterol Inhaler',
    provider: 'Dr. Mark Johnson',
    dateIssued: '2024-02-10',
    status: 'active',
    refillsLeft: 1,
  },
];

export function Prescriptions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12 min-h-[calc(100vh-128px)]"
    >
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
            My Prescriptions
          </h1>
          <p className="text-slate-600 mt-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
            View your active and past prescriptions. Request refills securely.
          </p>
        </div>
        <Button id="request-refill" variant="default" disabled className="flex gap-2 cursor-not-allowed" title="Demo: New refill requests coming soon">
          <RefreshCcw className="w-5 h-5" /> New Refill Request
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPrescriptions.map((rx, i) => (
          <motion.div
            key={rx.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.4, type: 'spring' }}
          >
            <Card className="border-blue-100 transition-shadow hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Pill className="w-7 h-7 text-blue-500" />
                <CardTitle className="text-blue-900 text-lg font-semibold" style={{ fontFamily: 'Roboto, sans-serif' }}>{rx.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-slate-600 text-sm mb-2">
                  <span className="font-medium">Provider:</span> {rx.provider}
                </div>
                <div className="flex gap-4 text-xs text-slate-500 mb-3">
                  <span>
                    <span className="font-medium">Issued:</span> {rx.dateIssued}
                  </span>
                  <span>
                    <span className="font-medium">Refills left:</span> {rx.refillsLeft}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  {rx.status === 'active' ? (
                    <Button id={`refill-${rx.id}`} variant="secondary" className="flex items-center gap-1" disabled={rx.refillsLeft === 0} title={rx.refillsLeft === 0 ? 'No refills left' : 'Request refill (demo)'}>
                      <RefreshCcw className="w-4 h-4" /> Request Refill
                    </Button>
                  ) : (
                    <span className="flex items-center gap-1 text-slate-400 text-xs">
                      <CheckCircle2 className="w-4 h-4" /> Expired
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
