import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const mockRecords = [
  {
    id: '1',
    title: 'Annual Physical Report',
    date: '2023-11-02',
    type: 'Lab Results',
    status: 'Available',
    fileName: 'Physical_Report_2023.pdf',
  },
  {
    id: '2',
    title: 'MRI Brain Scan',
    date: '2023-08-19',
    type: 'Imaging',
    status: 'Available',
    fileName: 'MRI_Brain_2023.dcm',
  },
  {
    id: '3',
    title: 'Prescription History',
    date: '2023-07-10',
    type: 'Medication',
    status: 'Available',
    fileName: 'Prescriptions_2023.pdf',
  },
];

export function MedicalRecords() {
  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-8 bg-blue-50 border-blue-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Medical Records
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Your encrypted medical records are listed below. Only you and authorized healthcare professionals can access these files.
          </p>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRecords.map((rec) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * Number(rec.id), duration: 0.4 }}
          >
            <Card className="border-blue-100 bg-white shadow-sm group transition-transform hover:scale-[1.025]">
              <CardHeader className="flex flex-row items-center gap-3">
                <FileText className="text-blue-500 h-6 w-6" />
                <div>
                  <CardTitle className="text-blue-900 font-semibold text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>{rec.title}</CardTitle>
                  <div className="text-sm text-slate-500">{rec.type} • {rec.date}</div>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-between mt-2">
                <span className="text-xs text-slate-400">{rec.fileName}</span>
                <Button id={`download-${rec.id}`} variant="outline" size="icon">
                  <Download className="h-5 w-5 text-blue-600" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
