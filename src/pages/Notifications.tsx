import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bell, CalendarCheck, FileText } from 'lucide-react';
const mockNotifications = [
  {
    id: 'n-1',
    type: 'Appointment',
    message: 'Your appointment with Dr. Hart is confirmed for June 1 at 9:00 AM.',
    date: '2024-05-20',
    icon: <CalendarCheck className="w-5 h-5 text-blue-700" />,
  },
  {
    id: 'n-2',
    type: 'Lab Result',
    message: 'Your blood test results are available in Medical Records.',
    date: '2024-05-19',
    icon: <FileText className="w-5 h-5 text-blue-700" />,
  },
];

export function Notifications() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8 shadow-md">
        <CardHeader className="flex flex-row items-center gap-2">
          <Bell className="w-7 h-7 text-blue-700" />
          <div>
            <CardTitle className="font-roboto font-bold text-2xl text-blue-900">Notifications</CardTitle>
            <CardDescription>
              Real-time updates about your care, appointments, and test results.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {mockNotifications.length === 0 && (
              <div className="text-slate-500">You're all caught up!</div>
            )}
            {mockNotifications.map(n => (
              <Card key={n.id} className="flex flex-row items-center gap-4 p-4 bg-slate-50 border-blue-100">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  {n.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-blue-900 text-base">{n.type}</div>
                  <div className="text-sm text-slate-700">{n.message}</div>
                  <div className="text-xs text-slate-400 mt-1">{n.date}</div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
