import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="flex items-center gap-2">
          <img src={require('/branding/assets/logo-0.png')} className="h-8 w-8" />
          <span className="font-bold text-xl text-[#1d4ed8]" style={{fontFamily: 'Roboto, sans-serif'}}>Medivault</span>
        </div>
        <nav className="flex gap-6 text-slate-600 text-base">
          <Link to="/appointments" className="hover:text-[#1d4ed8]">Appointments</Link>
          <Link to="/medical-records" className="hover:text-[#1d4ed8]">Records</Link>
          <Link to="/messaging" className="hover:text-[#1d4ed8]">Messaging</Link>
          <Link to="/notifications" className="hover:text-[#1d4ed8]">Notifications</Link>
          <Link to="/prescriptions" className="hover:text-[#1d4ed8]">Prescriptions</Link>
        </nav>
        <div className="text-slate-400 text-sm mt-2 md:mt-0">
          &copy; {new Date().getFullYear()} Medivault. Trusted, Secure, Yours.
        </div>
      </div>
    </footer>
  );
}
