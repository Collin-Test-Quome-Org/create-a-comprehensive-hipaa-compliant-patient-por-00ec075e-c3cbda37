import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { MessageSquare } from 'lucide-react'

const mockMessages = [
  {
    sender: 'Dr. A. Taylor',
    message: 'Your lab results are now available. Please review them at your convenience.',
    date: '2024-06-05',
  },
  {
    sender: 'Clinic Reception',
    message: 'Reminder: Your upcoming appointment is on June 10 at 10:30 AM.',
    date: '2024-06-02',
  },
  {
    sender: 'Pharmacy',
    message: 'Your prescription refill is ready for pickup.',
    date: '2024-05-30',
  },
]

export function RecentMessages() {
  return (
    <Card className="shadow-md h-full">
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        <MessageSquare className="text-primary" />
        <span className="font-semibold text-lg">Recent Messages</span>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-slate-200">
          {mockMessages.map((msg, idx) => (
            <li key={idx} className="py-2">
              <div className="text-slate-800 font-medium">{msg.sender}</div>
              <div className="text-slate-600 text-sm">{msg.message}</div>
              <div className="text-slate-400 text-xs mt-1">{msg.date}</div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
