import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">FAQs</h1>
        <p className="text-gray-600">This is the FAQs page.</p>
      </main>
      <Footer />
    </div>
  );
}
