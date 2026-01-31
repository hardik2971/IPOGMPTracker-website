import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Buyback() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Buyback</h1>
        <p className="text-gray-600">This is the buyback page.</p>
      </main>
      <Footer />
    </div>
  );
}
