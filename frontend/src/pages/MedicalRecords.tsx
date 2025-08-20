import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const mockRecords = [
  {
    id: 'rec-1',
    title: 'Annual Physical - 2024',
    date: '2024-04-02',
    type: 'Visit Summary',
    provider: 'Dr. Lisa Nguyen',
    encrypted: true,
    downloadUrl: '#',
  },
  {
    id: 'rec-2',
    title: 'Lab Results - CBC',
    date: '2024-03-15',
    type: 'Lab Result',
    provider: 'CareShield Lab',
    encrypted: true,
    downloadUrl: '#',
  },
  {
    id: 'rec-3',
    title: 'Specialist Referral',
    date: '2024-01-22',
    type: 'Referral',
    provider: 'Dr. Mark Evans',
    encrypted: true,
    downloadUrl: '#',
  },
];

export function MedicalRecords() {
  return (
    <div className="container mx-auto px-4 py-10 min-h-[calc(100vh-64px)] bg-white">
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-blue-900 mb-6"
        style={{ fontFamily: 'Roboto, sans-serif' }}
        initial={{ opacity: 0, y: -32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Medical Records
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 32 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {mockRecords.map((rec) => (
          <motion.div key={rec.id} variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}>
            <Card className="border-blue-100 hover:border-blue-700 transition-all h-full">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <span className="rounded-full p-2 bg-blue-50 text-blue-700">
                  <FileText />
                </span>
                <CardTitle className="text-blue-800 text-lg">{rec.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="text-slate-700 text-sm">Type: {rec.type}</div>
                <div className="text-slate-600 text-sm">Provider: {rec.provider}</div>
                <div className="text-slate-400 text-xs">Date: {rec.date}</div>
                {rec.encrypted && (
                  <div className="text-xs text-green-600 font-semibold flex items-center gap-1 mt-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                    Encrypted
                  </div>
                )}
                <Button variant="outline" size="sm" id={`download-record-${rec.id}`} className="mt-2 w-fit" asChild>
                  <a href={rec.downloadUrl} download>
                    <Download size={16} className="mr-1" /> Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
