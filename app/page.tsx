import Header from '@/components/Header';
import Banner from '@/components/Banner';
import IPOSection from '@/components/IPOSection';
import TopBrokers from '@/components/TopBrokers';
import BuybackSection from '@/components/BuybackSection';
import Testimonials from '@/components/Testimonials';
import AdSection from '@/components/AdSection';
import AppDownload from '@/components/AppDownload';
import IPONews from '@/components/IPONews';
import FeaturesSection from '@/components/FeaturesSection';
import RealTimeInfo from '@/components/RealTimeInfo';
import PerformanceTracking from '@/components/PerformanceTracking';
import ResourcesSection from '@/components/ResourcesSection';
import ApplicationMethods from '@/components/ApplicationMethods';
import WelcomeSection from '@/components/WelcomeSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Banner />
      <IPOSection />
      <TopBrokers />
      <BuybackSection />
      <Testimonials />
      <AppDownload />
      <IPONews />
      <FeaturesSection />
      <RealTimeInfo />
      <PerformanceTracking />
      <ResourcesSection />
      <ApplicationMethods />
      <WelcomeSection />
      <Footer />
    </div>
  );
}
