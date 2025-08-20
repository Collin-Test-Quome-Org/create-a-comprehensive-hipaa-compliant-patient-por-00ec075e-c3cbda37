import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const mockThreads = [
  {
    threadId: 'th-1',
    subject: 'Prescription Refill',
    from: 'Dr. Lee',
    date: '2024-06-05',
    unread: true,
  },
  {
    threadId: 'th-2',
    subject: 'Lab Results Ready',
    from: 'CareShield Team',
    date: '2024-06-01',
    unread: false,
  },
];

export function Messages() {
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => setIsLoaded(true), 150);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      className="container mx-auto px-4 py-12 min-h-[calc(100vh-80px)]"
    >
      <div className="flex items-center gap-3 mb-4">
        <MessageSquare className="text-blue-700" />
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Secure Messaging
        </h1>
      </div>
      <p className="text-slate-600 mb-8 flex items-center gap-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Lock className="w-4 h-4 text-green-700" />
        All conversations are encrypted end-to-end for your privacy.
      </p>
      <Button asChild id="new-message-btn" className="mb-6 bg-blue-700 text-white hover:bg-blue-900">
        <Link to="/messages/new">+ New Message</Link>
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockThreads.map((thread) => (
          <Card
            key={thread.threadId}
            className={`hover:shadow-lg transition-shadow group ${thread.unread ? 'border-blue-700 border-2' : ''}`}
          >
            <CardHeader className="flex flex-row items-center gap-2 justify-between">
              <CardTitle className="text-blue-900">{thread.subject}</CardTitle>
              <span className="text-xs text-slate-400">{thread.date}</span>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-semibold text-slate-700">From: {thread.from}</span>
                {thread.unread && <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-900">Unread</span>}
              </div>
              <Button asChild id={`thread-view-${thread.threadId}`} variant="outline" className="w-full group-hover:bg-blue-50">
                <Link to={`/messages/${thread.threadId}`}>Open Thread</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
