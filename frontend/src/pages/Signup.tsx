import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Signup() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="shadow-lg w-[370px] mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Create Your CareShield Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" autoComplete="off">
              <div>
                <Input id="signup-name" type="text" placeholder="Full Name" className="font-roboto" required />
              </div>
              <div>
                <Input id="signup-email" type="email" placeholder="Email address" className="font-roboto" required />
              </div>
              <div>
                <Input id="signup-password" type="password" placeholder="Password" className="font-roboto" required />
              </div>
              <Button id="signup-submit" type="submit" className="w-full bg-blue-700 hover:bg-blue-900 text-white font-bold">
                Sign Up
              </Button>
            </form>
            <div className="flex justify-between mt-4 text-sm">
              <span className="text-slate-500">Already have an account?</span>
              <Link to="/login" id="login-link" className="text-blue-700 hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
