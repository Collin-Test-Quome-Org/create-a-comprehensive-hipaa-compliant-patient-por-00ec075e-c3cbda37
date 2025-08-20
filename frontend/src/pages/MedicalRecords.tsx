import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DownloadCloud, FileText, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const mockRecords = [
  {
    id: 'rec1',
    title: 'Lab Results - CBC',
    date: '2024-04-12',
    type: 'Lab',
    status: 'Available',
    encrypted: true,
  },
  {
    id: 'rec2',
    title: 'Radiology Report - Chest X-Ray',
    date: '2024-02-28',
    type: 'Imaging',
    status: 'Available',
    encrypted: true,
  },
  {
    id: 'rec3',
    title: 'Visit Summary - Dr. Smith',
    date: '2023-12-10',
    type: 'Visit',
    status: 'Available',
    encrypted: true,
  },
];

export function MedicalRecords() {
  return (
    <div className="container mx-auto py-10 min-h-[calc(100vh-72px)]">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 font-[Roboto]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Your Medical Records
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRecords.map((rec) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="shadow-md rounded-xl border border-slate-100 hover:shadow-lg transition">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <FileText className="text-blue-600 w-7 h-7" />
                <CardTitle className="font-[Roboto] text-lg text-slate-800">{rec.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-500 mb-1">{rec.type} &bull; {rec.date}</div>
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="h-4 w-4 text-blue-400" />
                  <span className="text-xs text-blue-500">Encrypted</span>
                </div>
                <Button
                  id={`download-record-${rec.id}`}
                  variant="outline"
                  className="w-full flex items-center gap-2"
                >
                  <DownloadCloud className="w-4 h-4" /> Download
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
