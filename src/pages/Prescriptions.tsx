import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Capsule, RefreshCcw } from 'lucide-react';
import { useState } from 'react';

const mockPrescriptions = [
  {
    id: 'rx-1',
    name: 'Atorvastatin 10mg',
    instructions: 'Take 1 tablet daily',
    status: 'Active',
    refills: 2,
    lastFilled: '2024-05-14',
  },
  {
    id: 'rx-2',
    name: 'Lisinopril 20mg',
    instructions: 'Take 1 tablet in the morning',
    status: 'Active',
    refills: 0,
    lastFilled: '2024-05-02',
  },
];

export function Prescriptions() {
  const [prescriptions] = useState(mockPrescriptions);

  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8 shadow-md">
        <CardHeader>
          <CardTitle className="font-roboto font-bold text-2xl text-blue-900">Prescriptions</CardTitle>
          <CardDescription>
            Track your active prescriptions and request refills securely.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {prescriptions.length === 0 && (
              <div className="text-slate-500">No prescriptions found.</div>
            )}
            {prescriptions.map(rx => (
              <Card key={rx.id} className="flex flex-col md:flex-row items-center gap-4 p-4 bg-slate-50 border-blue-100">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <Capsule className="text-blue-700" size={32} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-blue-900 text-lg">{rx.name}</div>
                  <div className="text-sm text-slate-500 mb-1">{rx.instructions}</div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-1 rounded-full">
                      {rx.status}
                    </span>
                    <span className="text-slate-500">Refills left: {rx.refills}</span>
                    <span className="text-slate-400">Last filled: {rx.lastFilled}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    id={`rx-refill-${rx.id}`}
                    variant={rx.refills === 0 ? 'default' : 'outline'}
                    disabled={rx.refills === 0}
                    className="gap-1"
                  >
                    <RefreshCcw className="w-4 h-4" /> Request Refill
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
