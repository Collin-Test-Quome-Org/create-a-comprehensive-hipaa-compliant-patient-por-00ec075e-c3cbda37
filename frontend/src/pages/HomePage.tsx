import { Hero } from '@/components/Hero';
import { FeatureGrid } from '@/components/FeatureGrid';
import { Footer } from '@/components/Footer';

export function HomePage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Hero />
      <section className="max-w-4xl mx-auto pt-12 pb-4 px-4 text-center">
        <h2 className="text-3xl font-bold font-['Roboto'] text-blue-900 mb-3">Your Health, Connected</h2>
        <p className="text-lg text-slate-600">
          ConnectCare is your trusted digital health companion. Effortlessly access your medical records, book appointments, manage prescriptions, and stay in touch with your care team—all from a single, secure hub. Wellness, made simple and secure.
        </p>
      </section>
      <FeatureGrid />
      <Footer />
    </main>
  );
}
