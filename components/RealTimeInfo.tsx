import { TrendingUp, Percent, Users } from "lucide-react";
import Image from "next/image";

export default function RealTimeInfo() {
  const infoItems = [
    { icon: TrendingUp, title: "Subscription Status", description: "Track real-time subscription rates across retail, HNI, and QIB categories" },
    { icon: Percent, title: "Grey Market Premium", description: "Stay updated with the latest GMP to gauge potential listing gains" },
    { icon: Users, title: "Investor Participation", description: "From retail to HNI participation, everything you need is available in one place" },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 pt-0 px-4 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 text-left">Real-Time IPO Information</h2>
        <div className="text-gray-600 text-base sm:text-lg font-medium mb-6 sm:mb-8 md:mb-10 text-left">Catch every detail on the current IPOs that are open for subscription today. IPO-G provide live updates on subscription status, GMP (grey market premium), and real-time application trends. From retail to HNI participation, everything you need to know while applying is available in one place. Make informed IPO investments by keeping up with the latest market activity and performance indicators.

</div>
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          <div className="flex-1 flex flex-col gap-8">
            {infoItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-gray-400 transition-colors group-hover:text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex-1 flex justify-center w-full">
            <Image 
              src="/real_time_ipo.png" 
              alt="Real-Time IPO Information" 
              width={600}
              height={400}
              className="w-full max-w-md lg:max-w-none h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
