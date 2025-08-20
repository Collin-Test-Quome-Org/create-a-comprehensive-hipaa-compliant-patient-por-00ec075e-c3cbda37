import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, User, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const mockThreads = [
  {
    id: 'thread-01',
    with: 'Dr. Jane Smith',
    lastMessage: 'Your lab results are ready.',
    lastTimestamp: '2024-06-12 14:22',
    unread: true,
    messages: [
      {
        from: 'Dr. Jane Smith',
        body: 'Your lab results are ready.',
        timestamp: '2024-06-12 14:22',
      },
      {
        from: 'You',
        body: 'Thank you! Can you explain the cholesterol numbers?',
        timestamp: '2024-06-12 14:24',
      },
    ],
  },
  {
    id: 'thread-02',
    with: 'Nurse Alex',
    lastMessage: 'Please upload your insurance card.',
    lastTimestamp: '2024-06-10 09:33',
    unread: false,
    messages: [
      {
        from: 'Nurse Alex',
        body: 'Please upload your insurance card.',
        timestamp: '2024-06-10 09:33',
      },
      {
        from: 'You',
        body: 'Uploaded! Let me know if you need anything else.',
        timestamp: '2024-06-10 09:40',
      },
    ],
  },
];

export function Messages() {
  const [selectedThread, setSelectedThread] = useState(mockThreads[0]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedThread]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12 min-h-[calc(100vh-128px)]"
    >
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Secure Messaging
        </h1>
        <p className="text-slate-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Your encrypted conversations with healthcare staff.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-1/3">
          <div className="rounded-lg border border-blue-100 bg-slate-50 p-2">
            {mockThreads.map((thread) => (
              <button
                key={thread.id}
                className={`w-full px-4 py-3 flex flex-col text-left rounded-md mb-1 transition-all focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  selectedThread.id === thread.id
                    ? 'bg-blue-100 border border-blue-300'
                    : 'hover:bg-blue-50 border border-transparent'
                }`}
                onClick={() => setSelectedThread(thread)}
                aria-label={`Open conversation with ${thread.with}`}
                id={`thread-${thread.id}`}
              >
                <span className="flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">{thread.with}</span>
                  {thread.unread && <span className="ml-2 bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs">New</span>}
                </span>
                <span className="text-xs text-slate-600 truncate mt-1">{thread.lastMessage}</span>
              </button>
            ))}
          </div>
        </aside>
        <section className="flex-1 flex flex-col border border-blue-100 rounded-lg bg-white shadow-sm">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-blue-100">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
            <span className="font-semibold text-blue-900 text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>{selectedThread.with}</span>
            <span className="ml-auto text-xs text-slate-500">Encrypted</span>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-4 h-64 md:h-96">
            {selectedThread.messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-3 flex ${msg.from === 'You' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[70%] text-sm shadow-md ${
                    msg.from === 'You'
                      ? 'bg-blue-500 text-white self-end'
                      : 'bg-blue-100 text-blue-900 self-start'
                  }`}
                  aria-label={`Message from ${msg.from}`}
                >
                  <span>{msg.body}</span>
                  <div className="text-[10px] mt-1 text-slate-200 text-right">
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form className="flex gap-2 px-6 py-4 border-t border-blue-100" onSubmit={e => e.preventDefault()}>
            <Input
              placeholder="Type your reply..."
              value={input}
              onChange={e => setInput(e.target.value)}
              id="message-input"
              className="flex-1"
              aria-label="Message input"
            />
            <Button id="send-message" type="submit" variant="default" className="flex gap-1" disabled>
              <Send className="w-4 h-4" /> Send
            </Button>
          </form>
        </section>
      </div>
    </motion.div>
  );
}
