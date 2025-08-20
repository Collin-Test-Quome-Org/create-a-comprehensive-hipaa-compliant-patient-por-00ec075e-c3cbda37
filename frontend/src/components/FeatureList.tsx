import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'End-to-End Encryption',
    description: 'All your health data is shielded with bank-grade security. Trust every upload, download, and share.'
  },
  {
    title: 'Effortless Appointments',
    description: 'Book, reschedule, and manage visits with a few clicks—never play phone tag again.'
  },
  {
    title: 'Seamless Record Uploads',
    description: 'Snap, upload, and organize your medical history in seconds. All your files, always at your fingertips.'
  },
  {
    title: 'Instant Doctor Messaging',
    description: 'Questions or updates? Message your care team directly and securely.'
  },
  {
    title: 'Prescription Management',
    description: 'Track, renew, and understand your medications—no more guesswork.'
  }
];

export function FeatureList() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4">
      {features.map((f, idx) => (
        <div key={f.title} className="flex items-start gap-4">
          <CheckCircle2 className="text-blue-700 mt-1" size={28} />
          <div>
            <h3 className="font-bold text-blue-900 text-lg font-['Roboto']">{f.title}</h3>
            <p className="text-slate-700 font-['Roboto']">{f.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
