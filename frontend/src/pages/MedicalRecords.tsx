import { MedicalRecordsList } from '@/components/MedicalRecordsList';
import { motion } from 'framer-motion';

export function MedicalRecords() {
  return (
    <div className="bg-slate-50 min-h-[calc(100vh-64px)] pb-20">
      <div className="container mx-auto px-4 py-10">
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Your Medical Records
        </motion.h1>
        <p className="mb-8 text-slate-700 max-w-2xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Access your health information securely. All records are protected with advanced encryption, ensuring only you and your care team can view them.
        </p>
        <MedicalRecordsList />
      </div>
    </div>
  );
}
