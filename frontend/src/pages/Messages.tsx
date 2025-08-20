import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Lock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const mockThreads = [
  {
    id: 'msg-001',
    with: 'Dr. Marquez',
    lastMessage: 'Let me know if you need a follow-up.',
    date: '2024-05-25',
    unread: true,
  },
  {
    id: 'msg-002',
    with: 'Nurse Allen',
    lastMessage: 'Lab results are now available.',
    date: '2024-05-23',
    unread: false,
  },
];

export function Messages() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <MessageCircle className="text-blue-700" />
            Secure Messaging
            <Lock className="ml-1 h-4 w-4 text-blue-400" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button id="new-message-btn" className="mb-2" onClick={() => alert('Compose message coming soon!')}>
            <Send className="mr-1 h-4 w-4" /> New Message
          </Button>
          <CardDescription className="text-slate-600">Communicate privately with your healthcare team. All conversations are encrypted for your protection.</CardDescription>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-6">
        {mockThreads.map((thread) => (
          <motion.div
            key={thread.id}
            whileHover={{ scale: 1.025, boxShadow: '0 4px 18px rgba(29,78,216,0.10)' }}
          >
            <Card className={`relative border-blue-200 ${thread.unread ? 'ring-2 ring-blue-300' : ''}`}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageCircle className="text-blue-700" />
                  <span className="font-semibold text-blue-900">{thread.with}</span>
                  {thread.unread && <span className="ml-2 px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs">Unread</span>}
                </div>
                <p className="text-xs text-slate-500 mt-1">{thread.date}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-slate-600 truncate max-w-[65%]">{thread.lastMessage}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    id={`view-msg-${thread.id}`}
                    onClick={() => alert('Thread view coming soon!')}
                  >
                    View
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
