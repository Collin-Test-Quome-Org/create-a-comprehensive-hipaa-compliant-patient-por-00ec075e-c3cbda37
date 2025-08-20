import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText } from 'lucide-react';

const mockRecords = [
  {
    id: 'rec-1',
    type: 'Lab Results',
    date: '2024-06-08',
    summary: 'Blood test - all values normal',
    encrypted: true,
  },
  {
    id: 'rec-2',
    type: 'Visit Note',
    date: '2024-05-30',
    summary: 'Annual wellness checkup',
    encrypted: true,
  },
  {
    id: 'rec-3',
    type: 'Imaging',
    date: '2024-04-21',
    summary: 'Chest X-ray - no abnormalities',
    encrypted: true,
  },
];

export function MedicalRecords() {
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => setIsLoaded(true), 200);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      className="container mx-auto px-4 py-12 min-h-[calc(100vh-80px)]"
    >
      <div className="flex items-center gap-3 mb-4">
        <FileText className="text-blue-700" />
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Medical Records
        </h1>
      </div>
      <p className="text-slate-600 mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Your health documents are stored with end-to-end encryption. Only you and your care team have access.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRecords.map((rec) => (
          <Card key={rec.id} className="hover:shadow-lg transition-shadow group">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-blue-900 flex gap-2 items-center">
                {rec.type}
                {rec.encrypted && <ShieldCheck className="text-green-700 w-4 h-4 ml-1" />}
              </CardTitle>
              <span className="text-xs text-slate-400">{rec.date}</span>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-slate-700">{rec.summary}</p>
              <Button asChild id={`record-view-${rec.id}`} variant="outline" className="w-full group-hover:bg-blue-50">
                <Link to={`/medical-records/${rec.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
