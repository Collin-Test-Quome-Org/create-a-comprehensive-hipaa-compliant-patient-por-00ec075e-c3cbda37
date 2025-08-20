import { Link } from 'react-router-dom';

export function BrandLogo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img src="/branding/assets/logo-0.png" className="h-10 w-10" />
      <span className="text-2xl font-bold text-blue-800 group-hover:text-blue-900 transition-colors" style={{ fontFamily: 'Roboto, sans-serif' }}>
        CareShield
      </span>
    </Link>
  );
}
