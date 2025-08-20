import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, PlusCircle } from 'lucide-react';
import { useState } from 'react';

const mockThreads = [
  {
    id: 'thread-1',
    subject: 'Prescription Refill Question',
    with: 'Dr. Susan Hart',
    lastMessage: 'Of course, I have submitted your refill request!',
    unread: false,
    updated: '2024-05-18 14:22',
  },
  {
    id: 'thread-2',
    subject: 'Lab Results Clarification',
    with: 'Nurse Alex Clark',
    lastMessage: 'Let me explain your lab report in detail...',
    unread: true,
    updated: '2024-05-19 09:53',
  },
];

export function Messages() {
  const [threads] = useState(mockThreads);
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8 shadow-md">
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <div>
            <CardTitle className="font-roboto font-bold text-2xl text-blue-900">Secure Messaging</CardTitle>
            <CardDescription>
              Communicate with your care team using encrypted, HIPAA-compliant messaging.
            </CardDescription>
          </div>
          <Button asChild id="new-message-btn" className="gap-2">
            <a href="#">
              <PlusCircle className="w-5 h-5" /> New Message
            </a>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {threads.length === 0 && (
              <div className="text-slate-500">No messages yet. Start a new conversation with your provider!</div>
            )}
            {threads.map(t => (
              <Card
                key={t.id}
                className={`flex flex-col md:flex-row items-center gap-4 p-4 bg-slate-50 border-blue-100 ${t.unread ? 'border-l-4 border-blue-500' : ''}`}
              >
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <MessageCircle className="text-blue-700" size={32} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-blue-900 text-lg">{t.subject}</div>
                  <div className="text-sm text-slate-500 mb-1">With: {t.with}</div>
                  <div className="text-sm text-slate-700 truncate">{t.lastMessage}</div>
                  <div className="text-xs text-slate-400 mt-1">Updated: {t.updated}</div>
                  {t.unread && <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Unread</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <Button asChild variant="outline" id={`view-thread-${t.id}`}>
                    <a href="#">View</a>
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
