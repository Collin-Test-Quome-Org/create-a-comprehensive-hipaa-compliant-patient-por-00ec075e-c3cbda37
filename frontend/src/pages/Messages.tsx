import { Mail, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

const mockThreads = [
  {
    id: 'thread1',
    provider: 'Dr. Jane Smith',
    subject: 'Lab Results Update',
    lastMessage: 'Your CBC results are available in your portal.',
    unread: true,
  },
  {
    id: 'thread2',
    provider: 'Nurse Alex Jang',
    subject: 'Prescription Refill Request',
    lastMessage: 'Your refill has been approved. Please see your pharmacy.',
    unread: false,
  },
];

export function Messages() {
  const [message, setMessage] = useState('');

  return (
    <div className="container mx-auto py-10 min-h-[calc(100vh-72px)]">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 font-[Roboto]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Secure Messaging
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2 text-slate-700 font-[Roboto]">Inbox</h2>
          <div className="space-y-4">
            {mockThreads.map(thread => (
              <Card key={thread.id} className={`border ${thread.unread ? 'border-blue-400' : 'border-slate-200'} shadow-sm hover:shadow-lg rounded-lg transition cursor-pointer`}>
                <CardHeader className="flex flex-row items-center gap-3 pb-1">
                  <Mail className="text-blue-600 w-6 h-6" />
                  <CardTitle className="text-base font-[Roboto] text-slate-800">{thread.subject}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-slate-500">From: {thread.provider}</div>
                  <div className="text-sm text-slate-700 mt-2">{thread.lastMessage}</div>
                  {thread.unread && <span className="inline-block text-xs text-blue-600 mt-1 font-bold">Unread</span>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2 text-slate-700 font-[Roboto]">New Message</h2>
          <Card className="rounded-lg shadow">
            <CardContent className="pt-4">
              <form className="flex flex-col gap-3">
                <Input id="msg-to" type="text" placeholder="To: Provider Name" className="font-[Roboto]" />
                <Input id="msg-subject" type="text" placeholder="Subject" className="font-[Roboto]" />
                <textarea id="msg-body" className="border rounded p-2 text-sm font-[Roboto]" rows={4} placeholder="Type your secure message here..." value={message} onChange={e => setMessage(e.target.value)} />
                <Button id="send-message" type="submit" className="flex items-center gap-1" onClick={e => e.preventDefault()}>
                  <Send className="w-4 h-4" /> Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
