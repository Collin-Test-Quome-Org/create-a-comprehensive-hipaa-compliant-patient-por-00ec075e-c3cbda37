import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function DashboardCard({ icon, title, count, description, className }: {
  icon: React.ReactNode,
  title: string,
  count?: number | string,
  description: string,
  className?: string
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Card className={cn("shadow-lg border-primary/20 transition-transform hover:scale-[1.03]", className)}>
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="bg-primary/10 rounded-lg p-3 text-primary">{icon}</div>
          <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-1">
          {count !== undefined && <div className="text-4xl font-bold mb-1">{count}</div>}
          <div className="text-slate-600 text-base">{description}</div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
