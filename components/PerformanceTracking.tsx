import { ArrowUp, CalendarCheck, History, Unlock } from "lucide-react";
import Image from "next/image";

export default function PerformanceTracking() {
  const description = "Explore the performance of all recently listed Mainboard IPOs and listed SME IPOs on the stock exchanges. Make informed IPO investments by keeping up with the latest market activity and performance indicators.";

  const renderDescription = () => {
    const highlightTerm = "listed SME IPOs";
    const parts = description.split(new RegExp(`(${highlightTerm})`, 'gi'));

    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlightTerm.toLowerCase() ? (
            <span key={index} className="text-[#6c5ce7] font-medium">{part}</span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </span>
    );
  };

  const cards = [
    {
      icon: ArrowUp,
      title: "Listing Gains",
      subtitle: "Track day 1 performance"
    },
    {
      icon: CalendarCheck,
      title: "Allotment Status",
      subtitle: "Check your application"
    },
    {
      icon: History,
      title: "Historical Data",
      subtitle: "Past performance metrics"
    },
    {
      icon: Unlock,
      title: "Funds Unblocking",
      subtitle: "Track refund status"
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 bg-[#f2f4ff]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5">
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
            <Image src="/ipoji_track.png" alt="Performance Tracking" width={500} height={500} className="w-full max-w-sm lg:max-w-none h-auto" />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2d2c52] mb-4 sm:mb-6">Performance Tracking</h2>
              <p className="text-[#5e5c76] text-base sm:text-lg mb-6 sm:mb-8">
                {renderDescription()}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {cards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div key={index} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-12 h-12 bg-[#f0eefd] rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-[#6c5ce7]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2d2c52] mb-1">{card.title}</h3>
                      <p className="text-[#5e5c76] text-sm">{card.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
