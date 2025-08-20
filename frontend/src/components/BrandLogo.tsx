import { Link } from 'react-router-dom';

export function BrandLogo() {
  return (
    <Link to="/" className="flex items-center space-x-2 select-none group" tabIndex={0} aria-label="CareShield Home">
      <img src="/branding/assets/logo-0.png" className="h-10 w-10 mr-2 transition-transform group-hover:scale-105" />
      <span className="text-xl md:text-2xl font-bold text-blue-900 tracking-tight" style={{ fontFamily: 'Roboto, sans-serif'}}>CareShield</span>
    </Link>
  );
}
