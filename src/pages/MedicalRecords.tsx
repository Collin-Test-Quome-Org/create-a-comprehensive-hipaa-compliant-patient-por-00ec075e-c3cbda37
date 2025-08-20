import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const mockRecords = [
  {
    id: 'rec-001',
    title: 'Annual Physical Exam',
    date: '2023-11-10',
    description: 'Comprehensive annual checkup results.',
    provider: 'Dr. Jane Smith',
    size: '1.2MB',
    status: 'encrypted',
  },
  {
    id: 'rec-002',
    title: 'Lab Results: CBC',
    date: '2024-01-20',
    description: 'Complete blood count test results.',
    provider: 'LabCorp',
    size: '780KB',
    status: 'encrypted',
  },
  {
    id: 'rec-003',
    title: 'MRI Scan',
    date: '2024-03-02',
    description: 'MRI brain scan imaging and report.',
    provider: 'Radiology Partners',
    size: '4.8MB',
    status: 'encrypted',
  },
];

export function MedicalRecords() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12 min-h-[calc(100vh-128px)]"
    >
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
            My Medical Records
          </h1>
          <p className="text-slate-600 mt-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Secure, encrypted access to your health history. Only you and authorized medical staff can view these documents.
          </p>
        </div>
        <Button id="upload-record" variant="default" disabled className="flex gap-2 cursor-not-allowed" title="Coming soon">
          <FileText className="w-5 h-5" /> Upload Record
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRecords.map((rec, i) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.4, type: 'spring' }}
          >
            <Card className="transition-shadow hover:shadow-xl border-blue-100">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <FileText className="w-7 h-7 text-blue-500" />
                <CardTitle className="text-blue-900 text-lg font-semibold" style={{ fontFamily: 'Roboto, sans-serif' }}>{rec.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-slate-600 text-sm mb-2">{rec.description}</div>
                <div className="flex flex-col gap-1 text-xs text-slate-500 mb-3">
                  <span>
                    <span className="font-medium">Provider:</span> {rec.provider}
                  </span>
                  <span>
                    <span className="font-medium">Date:</span> {rec.date}
                  </span>
                  <span>
                    <span className="font-medium">File size:</span> {rec.size}
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <Button id={`download-${rec.id}`} variant="secondary" className="flex items-center gap-1" disabled title="Demo: Download disabled for privacy">
                    <Download className="w-4 h-4" /> Download
                  </Button>
                  <span className="flex items-center ml-auto text-xs text-blue-500">
                    <Lock className="w-4 h-4 mr-1" /> Encrypted
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
