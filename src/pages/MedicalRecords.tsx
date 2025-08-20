import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, FileText } from 'lucide-react';
import { useState } from 'react';

const mockRecords = [
  {
    id: 'rec-1',
    title: 'Annual Physical 2023',
    date: '2023-11-05',
    summary: 'Vitals, labs, and physician notes.',
    type: 'Visit Note',
    fileUrl: '/mockdata/medical-record-1.pdf',
  },
  {
    id: 'rec-2',
    title: 'Blood Test Results',
    date: '2024-01-20',
    summary: 'CBC, cholesterol, A1c panel.',
    type: 'Lab Result',
    fileUrl: '/mockdata/lab-results-jan2024.pdf',
  },
  {
    id: 'rec-3',
    title: 'MRI Brain Scan',
    date: '2024-02-10',
    summary: 'Imaging report and scan.',
    type: 'Imaging',
    fileUrl: '/mockdata/mri-brain-2024.pdf',
  },
];

export function MedicalRecords() {
  const [search, setSearch] = useState('');

  const filtered = mockRecords.filter(
    (rec) =>
      rec.title.toLowerCase().includes(search.toLowerCase()) ||
      rec.summary.toLowerCase().includes(search.toLowerCase()) ||
      rec.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8 shadow-md">
        <CardHeader>
          <CardTitle className="font-roboto font-bold text-2xl text-blue-900">My Medical Records</CardTitle>
          <CardDescription>
            Browse, view, and securely download your health records. Your data stays encrypted, always.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            id="record-search"
            placeholder="Search by title, type, or summary..."
            className="mb-6 max-w-md"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.length === 0 && (
              <div className="col-span-2 text-slate-500">No records found.</div>
            )}
            {filtered.map(rec => (
              <Card key={rec.id} className="flex flex-col md:flex-row items-center gap-4 p-4 bg-slate-50 border-blue-100">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <FileText className="text-blue-700" size={32} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-blue-900 text-lg">{rec.title}</div>
                  <div className="text-sm text-slate-500 mb-1">{rec.type} • {rec.date}</div>
                  <div className="text-sm text-slate-700">{rec.summary}</div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    variant="secondary"
                    id={`download-record-${rec.id}`}
                    className="flex items-center gap-1"
                  >
                    <a href={rec.fileUrl} download>
                      <Download className="w-4 h-4" /> Download
                    </a>
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
