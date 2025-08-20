import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, DownloadCloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Fake encrypted records
const fakeRecords = [
  {
    id: 'rec-001',
    name: 'Blood Test Results',
    date: '2024-03-10',
    summary: 'Routine blood panel, everything normal.',
    type: 'Lab',
    encrypted: true,
  },
  {
    id: 'rec-002',
    name: 'MRI Scan',
    date: '2023-12-22',
    summary: 'MRI scan of left knee. No abnormalities found.',
    type: 'Imaging',
    encrypted: true,
  },
  {
    id: 'rec-003',
    name: 'Visit Note - Dr. Smith',
    date: '2023-11-05',
    summary: 'Annual wellness checkup. Discussed health goals.',
    type: 'Visit',
    encrypted: true,
  },
];

export function MedicalRecordsList() {
  return (
    <motion.div
      initial={{opacity: 0, y: 24}}
      animate={{opacity: 1, y: 0}}
      className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {fakeRecords.map((rec, i) => (
        <Card key={rec.id} className="bg-white border-2 border-blue-50 shadow-md hover:border-blue-300 transition-all">
          <CardHeader className="flex-row items-center space-x-3">
            <FileText className="text-blue-700" />
            <div>
              <h3 className="font-bold text-blue-900 text-lg" style={{fontFamily:'Roboto, sans-serif'}}>{rec.name}</h3>
              <p className="text-xs text-slate-600 uppercase tracking-widest">{rec.type} • {rec.date}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 text-sm">{rec.summary}</p>
            <div className="mt-4">
              <span className="px-2 py-1 bg-blue-100 text-xs text-blue-900 rounded-full font-mono">Encrypted</span>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 justify-between items-center">
            <Button asChild id={`view-record-${rec.id}`} size="sm" variant="secondary">
              <Link to={`/medical-records/${rec.id}`}>View</Link>
            </Button>
            <Button id={`download-record-${rec.id}`} variant="ghost" size="icon">
              <DownloadCloud className="w-5 h-5 text-blue-700" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </motion.div>
  );
}
