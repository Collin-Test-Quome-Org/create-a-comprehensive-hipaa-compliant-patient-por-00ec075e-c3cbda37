import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Send, Lock } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const mockThreads = [
  {
    id: 'msg-1',
    subject: 'Lab Results Question',
    with: 'Dr. Amy Carter',
    unread: true,
    lastMessage: 'Your results are normal! Let me know if you have questions.',
    lastTime: '2024-04-18 09:23',
  },
  {
    id: 'msg-2',
    subject: 'Request for Appointment',
    with: 'Front Desk',
    unread: false,
    lastMessage: 'We have scheduled you for June 20th at 2:00 PM.',
    lastTime: '2024-04-04 15:12',
  },
  {
    id: 'msg-3',
    subject: 'Prescription Inquiry',
    with: 'Dr. Lee Tran',
    unread: false,
    lastMessage: 'You have one refill remaining on Atorvastatin.',
    lastTime: '2024-03-21 10:44',
  },
];

export function Messages() {
  const [composing, setComposing] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <motion.div
      className="container mx-auto py-10 px-4"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Secure Messages
        </h1>
        <Button id="compose-message-btn" className="bg-blue-700 text-white hover:bg-blue-900 flex gap-1" size="sm" onClick={() => { setComposing(true); setSent(false); }}>
          <Mail className="w-4 h-4" /> New Message
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {mockThreads.map((thread) => (
          <motion.div key={thread.id} whileHover={{ scale: 1.025 }}>
            <Card className={`h-full border-blue-100 shadow-sm ${thread.unread ? 'ring-2 ring-blue-400' : ''}`}>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Mail className="text-blue-600 mr-2" />
                <CardTitle className="text-lg font-semibold text-blue-900">
                  {thread.subject}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="text-slate-700 mb-1">With: {thread.with}</div>
                <div className="text-xs text-slate-500 mb-1">{thread.lastTime}</div>
                <div className="mb-2 text-slate-700">{thread.lastMessage}</div>
                {thread.unread && (
                  <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">Unread</span>
                )}
                <Button id={`open-thread-${thread.id}`} variant="ghost" size="sm" className="mt-3">
                  Open Conversation
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {composing && !sent && (
        <motion.div
          className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-blue-100"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center mb-4 gap-2">
            <Lock className="text-blue-700" />
            <div className="font-bold text-blue-900">Compose Secure Message</div>
          </div>
          <form
            onSubmit={e => {
              e.preventDefault();
              setSent(true);
              setComposing(false);
            }}
          >
            <div className="mb-3">
              <label htmlFor="to" className="block text-xs font-medium text-blue-800 mb-1">To</label>
              <input id="to" name="to" className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Dr. Amy Carter" required />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="block text-xs font-medium text-blue-800 mb-1">Subject</label>
              <input id="subject" name="subject" className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Subject" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-xs font-medium text-blue-800 mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Type your message..." required />
            </div>
            <Button id="send-message-btn" type="submit" className="bg-blue-700 text-white hover:bg-blue-900 flex gap-1">
              <Send className="w-4 h-4" /> Send Securely
            </Button>
            <Button id="cancel-compose-btn" type="button" variant="ghost" className="ml-2" onClick={() => setComposing(false)}>
              Cancel
            </Button>
          </form>
        </motion.div>
      )}
      {sent && (
        <motion.div
          className="max-w-md mx-auto mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100 text-blue-900 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="font-bold mb-2">Message sent securely!</div>
          <div className="text-xs">Your encrypted message has been delivered to your provider's inbox.</div>
        </motion.div>
      )}
    </motion.div>
  );
}
