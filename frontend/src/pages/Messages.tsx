import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const mockThreads = [
  {
    id: 't1',
    provider: 'Dr. Samantha Grey',
    preview: 'Lab results are normal. Let me know if you have questions.',
    lastMessage: '2024-05-29 16:14',
    unread: true,
  },
  {
    id: 't2',
    provider: 'Dr. Alan White',
    preview: 'Your refill request has been approved!',
    lastMessage: '2024-05-27 09:42',
    unread: false,
  },
];

export function Messages() {
  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-8 bg-blue-50 border-blue-100">
        <CardHeader className="flex flex-row items-center gap-2">
          <MessageCircle className="text-blue-700 h-7 w-7" />
          <CardTitle className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Secure Messaging
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Communicate with your healthcare team securely.
          </p>
          <Button id="new-message" variant="default" className="mt-2">
            <Send className="h-4 w-4 mr-1" /> New Message
          </Button>
        </CardContent>
      </Card>
      <div className="bg-white rounded-lg shadow p-6 border border-blue-100 max-w-2xl mx-auto">
        <h3 className="font-semibold text-blue-800 mb-5 text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Recent Threads
        </h3>
        <div className="divide-y divide-blue-50">
          {mockThreads.map(thread => (
            <div key={thread.id} className={`py-4 flex items-start gap-3 group ${thread.unread ? 'bg-blue-50' : ''}`}>
              <div className={`rounded-full h-10 w-10 flex items-center justify-center ${thread.unread ? 'bg-blue-200' : 'bg-slate-100'}`}>
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>{thread.provider}</span>
                  <span className="text-xs text-slate-400">{thread.lastMessage}</span>
                </div>
                <span className="text-slate-700 text-sm line-clamp-2">{thread.preview}</span>
              </div>
              {thread.unread && (
                <span className="rounded-full bg-blue-600 w-2 h-2 mt-2" />
              )}
            </div>
          ))}
          {mockThreads.length === 0 && (
            <div className="text-slate-400 py-8 text-center">No message threads</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
