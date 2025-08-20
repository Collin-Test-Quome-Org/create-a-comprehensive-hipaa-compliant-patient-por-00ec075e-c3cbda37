import { Hero } from '@/components/Hero';
import { DashboardCards } from '@/components/DashboardCards';
import { Footer } from '@/components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Hero />
      <main className="flex-1 max-w-7xl mx-auto px-4 pb-8">
        <section className="mt-12 text-center mb-2">
          <h2 className="text-3xl font-bold text-[#1d4ed8] mb-2" style={{fontFamily: 'Roboto, sans-serif'}}>Your Health, Our Vault</h2>
          <p className="text-lg text-slate-700 max-w-xl mx-auto">
            Medivault is your personal, secure gateway to a healthier, more organized life. Designed with care for patients who value privacy and convenience.
          </p>
        </section>
        <DashboardCards />
      </main>
      <Footer />
    </div>
  );
}
