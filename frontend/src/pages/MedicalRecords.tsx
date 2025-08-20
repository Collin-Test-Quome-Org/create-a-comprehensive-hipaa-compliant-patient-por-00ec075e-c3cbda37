import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Eye } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Mock encrypted records
const mockRecords = [
  {
    id: 'rec-1',
    date: '2024-04-16',
    type: 'Lab Results',
    provider: 'Dr. Amy Carter',
    desc: 'CBC & Lipid Panel',
    encrypted: true,
  },
  {
    id: 'rec-2',
    date: '2024-03-02',
    type: 'Visit Summary',
    provider: 'Dr. Lee Tran',
    desc: 'Annual Physical Exam',
    encrypted: true,
  },
  {
    id: 'rec-3',
    date: '2023-12-19',
    type: 'Imaging',
    provider: 'Radiology Dept.',
    desc: 'Chest X-Ray',
    encrypted: true,
  },
];

export function MedicalRecords() {
  const [viewed, setViewed] = useState<string | null>(null);

  return (
    <motion.div
      className="container mx-auto py-10 px-4"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
        My Medical Records
      </h1>
      <p className="mb-8 text-slate-700 max-w-2xl">
        Access and download your encrypted health records securely. Your personal health information is protected with advanced encryption and only visible to you and your care team.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRecords.map((rec) => (
          <motion.div
            key={rec.id}
            whileHover={{ scale: 1.025 }}
            className=""
          >
            <Card className="h-full border-blue-100 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <FileText className="text-blue-600 mr-2" />
                <CardTitle className="text-lg font-semibold text-blue-900">
                  {rec.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-700 mb-1 text-sm">{rec.desc}</div>
                <div className="text-xs text-slate-500 mb-1">
                  {rec.provider} &bull; {rec.date}
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    id={`view-record-${rec.id}`}
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewed(rec.id)}
                  >
                    <Eye className="w-4 h-4 mr-1" /> View
                  </Button>
                  <Button
                    id={`download-record-${rec.id}`}
                    variant="secondary"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-1" /> Download
                  </Button>
                </div>
                {rec.encrypted && (
                  <div className="mt-2 text-xs text-blue-500 font-medium">
                    <span className="animate-pulse">Encrypted</span>
                  </div>
                )}
                {viewed === rec.id && (
                  <motion.div
                    className="mt-4 bg-blue-50 p-3 rounded shadow-inner border border-blue-100 text-xs"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="font-bold text-blue-900 mb-1">[Encrypted Content]</div>
                    <div className="text-slate-600">For demo: This is a simulated decrypted medical record. In production, this data is end-to-end encrypted and only accessible by you and authorized providers.</div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
