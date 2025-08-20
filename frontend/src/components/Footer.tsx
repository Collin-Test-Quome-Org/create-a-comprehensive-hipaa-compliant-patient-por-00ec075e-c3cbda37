import { Link } from 'react-router-dom';
import { ShieldCheck, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/branding/assets/logo-0.png" className="w-8 h-8" />
          <span className="font-bold text-blue-900 text-lg tracking-tight font-['Roboto']">ConnectCare</span>
        </div>
        <nav className="flex gap-4 text-sm text-slate-600">
          <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <Link to="/medical-records" className="hover:text-blue-700 transition-colors">Records</Link>
          <Link to="/appointments" className="hover:text-blue-700 transition-colors">Appointments</Link>
          <Link to="/prescriptions" className="hover:text-blue-700 transition-colors">Prescriptions</Link>
          <Link to="/messaging" className="hover:text-blue-700 transition-colors">Messaging</Link>
          <Link to="/notifications" className="hover:text-blue-700 transition-colors">Notifications</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700">
            <Github />
          </a>
          <span className="text-xs text-slate-400">© 2024 ConnectCare</span>
        </div>
      </div>
    </footer>
  );
}
