import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';

const mockPrescriptions = [
  {
    id: 'rx-001',
    medication: 'Lisinopril',
    dosage: '10mg daily',
    provider: 'Dr. Marquez',
    lastFilled: '2024-05-30',
    refillAvailable: true,
  },
  {
    id: 'rx-002',
    medication: 'Metformin',
    dosage: '500mg twice daily',
    provider: 'Dr. Choi',
    lastFilled: '2024-05-15',
    refillAvailable: false,
  },
];

export function Prescriptions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Pill className="text-blue-700" />
            My Prescriptions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-slate-600">Track your medications, request refills, and stay up to date on your prescription history.</CardDescription>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-6">
        {mockPrescriptions.map((rx) => (
          <motion.div
            key={rx.id}
            whileHover={{ scale: 1.025, boxShadow: '0 4px 18px rgba(29,78,216,0.10)' }}
          >
            <Card className="relative border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Pill className="text-blue-700" />
                  <span className="font-semibold text-blue-900">{rx.medication}</span>
                  <span className="ml-auto text-xs text-slate-500">{rx.dosage}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Prescribed by {rx.provider}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-slate-600">Last filled: {rx.lastFilled}</span>
                  <Button
                    variant={rx.refillAvailable ? 'default' : 'outline'}
                    size="sm"
                    id={`refill-rx-${rx.id}`}
                    disabled={!rx.refillAvailable}
                    onClick={() => alert('Refill request coming soon!')}
                  >
                    <Repeat className="mr-1 h-4 w-4" /> Refill
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
