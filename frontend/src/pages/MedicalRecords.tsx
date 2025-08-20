import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const mockRecords = [
  {
    id: 'rec-001',
    title: 'Annual Physical Exam',
    date: '2023-12-15',
    type: 'Exam Summary',
    provider: 'Dr. Marquez',
    encrypted: true,
  },
  {
    id: 'rec-002',
    title: 'Blood Test Results',
    date: '2024-01-08',
    type: 'Lab Results',
    provider: 'LabCorp',
    encrypted: true,
  },
  {
    id: 'rec-003',
    title: 'Vaccination Record',
    date: '2023-11-10',
    type: 'Immunization',
    provider: 'Nurse Allen',
    encrypted: true,
  },
];

export function MedicalRecords() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <FileText className="text-blue-700" />
            My Medical Records
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-2">
            Access, download, or securely share your medical documents. All records are encrypted for your privacy.
          </p>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRecords.map((rec) => (
          <motion.div
            key={rec.id}
            whileHover={{ scale: 1.03, boxShadow: '0 4px 24px rgba(29,78,216,0.10)' }}
          >
            <Card className="relative group border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="text-blue-700" />
                  <span className="font-semibold text-blue-900">{rec.title}</span>
                  {rec.encrypted && (
                    <Lock className="ml-1 h-4 w-4 text-blue-400" />
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1">{rec.type} &bull; {rec.date}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-slate-600">Provider: {rec.provider}</span>
                  <Button variant="outline" size="icon" id={`download-record-${rec.id}`}
                    className="transition-colors group-hover:bg-blue-50"
                    onClick={() => alert('Download feature coming soon!')}
                  >
                    <Download className="h-5 w-5 text-blue-700" />
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
