import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-slate-50 via-white to-blue-50 py-12">
      <motion.div initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
        <Card className="shadow-xl w-[340px]">
          <CardHeader>
            <CardTitle className="text-blue-900 text-2xl" style={{ fontFamily: 'Roboto, sans-serif' }}>Sign In to CareShield</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <label htmlFor="email" className="text-slate-700 text-sm font-medium">Email</label>
              <Input id="email" type="email" required placeholder="you@email.com" className="mb-2" />
              <label htmlFor="password" className="text-slate-700 text-sm font-medium">Password</label>
              <Input id="password" type="password" required placeholder="••••••••" className="mb-4" />
              <Button id="login-btn" type="submit" className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-full">Login</Button>
              <span className="text-xs text-slate-500 text-center mt-2">
                New here? <Link to="/signup" className="text-blue-700 hover:underline">Create an account</Link>
              </span>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
