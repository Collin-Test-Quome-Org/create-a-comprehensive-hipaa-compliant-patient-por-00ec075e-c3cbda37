import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-blue-950 text-white py-8 px-4 flex flex-col items-center mt-16">
      <div className="flex items-center gap-3 mb-4">
        <img src="/branding/assets/logo-1.png" className="w-10 h-10" />
        <span className="text-2xl font-bold font-['Roboto'] tracking-tight">SecureBridge Health</span>
      </div>
      <nav className="flex flex-wrap gap-6 mb-4 text-slate-200">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        <Link to="/appointments" className="hover:text-blue-300">Appointments</Link>
        <Link to="/medical-records" className="hover:text-blue-300">Medical Records</Link>
        <Link to="/messaging" className="hover:text-blue-300">Messaging</Link>
        <Link to="/prescriptions" className="hover:text-blue-300">Prescriptions</Link>
        <Link to="/file-upload" className="hover:text-blue-300">File Upload</Link>
        <Link to="/notifications" className="hover:text-blue-300">Notifications</Link>
        <Link to="/login" className="hover:text-blue-300">Login</Link>
        <Link to="/signup" className="hover:text-blue-300">Sign Up</Link>
      </nav>
      <div className="flex gap-4 mb-2">
        <a href="#" className="hover:text-blue-400"><Facebook className="w-5 h-5" /></a>
        <a href="#" className="hover:text-blue-400"><Twitter className="w-5 h-5" /></a>
        <a href="#" className="hover:text-blue-400"><Linkedin className="w-5 h-5" /></a>
        <a href="mailto:support@securebridge.health" className="hover:text-blue-400"><Mail className="w-5 h-5" /></a>
      </div>
      <span className="text-xs text-slate-400">&copy; {new Date().getFullYear()} SecureBridge Health. Bridging you to a healthier tomorrow.</span>
    </footer>
  );
}
