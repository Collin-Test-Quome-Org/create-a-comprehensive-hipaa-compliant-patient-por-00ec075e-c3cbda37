import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const mockMessages = [
  {
    id: '1',
    from: 'Dr. Lisa Nguyen',
    subject: 'Lab Results Available',
    preview: 'Your recent lab results are available for review...',
    date: '2024-06-04',
    threadId: '1',
  },
  {
    id: '2',
    from: 'Care Team',
    subject: 'Upcoming Appointment Reminder',
    preview: 'This is a reminder for your appointment on June 8...',
    date: '2024-06-03',
    threadId: '2',
  },
];

export function RecentMessages() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-blue-900 flex items-center gap-2 text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
          <MessageCircle className="text-blue-700" size={20} /> Recent Messages
        </CardTitle>
        <Link to="/messages" className="text-blue-700 hover:underline flex items-center text-sm" id="dashboard-messages-more">
          View all <ArrowRight size={15} className="ml-1" />
        </Link>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-slate-100">
          {mockMessages.map((msg) => (
            <motion.li
              key={msg.id}
              whileHover={{ backgroundColor: '#f1f5f9' }}
              className="py-2 px-1 rounded transition-colors"
            >
              <Link to={`/messages/${msg.threadId}`} className="block focus:outline-none focus:ring-2 focus:ring-blue-400 rounded" id={`dashboard-message-${msg.id}`}>
                <div className="flex items-center justify-between">
                  <span className="text-blue-800 font-semibold text-sm">{msg.subject}</span>
                  <span className="text-xs text-slate-400">{msg.date}</span>
                </div>
                <div className="text-slate-600 text-xs mt-1 line-clamp-1">{msg.preview}</div>
                <div className="text-xs text-slate-400 mt-1">From: {msg.from}</div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
