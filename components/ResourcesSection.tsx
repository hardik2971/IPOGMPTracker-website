import { BookOpen, Pencil, DollarSign, RefreshCw } from "lucide-react";

export default function ResourcesSection() {
  const resources = [
    { 
      icon: BookOpen, 
      title: "IPO Guide", 
      description: "We break down the steps involved in the IPO application process, explain key IPO KPIs, and guide you on how IPO valuation works." 
    },
    { 
      icon: Pencil, 
      title: "Application Tips", 
      description: "Whether you're applying for the first time or modifying an existing application through our IPO application modification tips." 
    },
    { 
      icon: DollarSign, 
      title: "Funds Management", 
      description: "Get information about waiting for IPO funds unblocking, we ensure you're informed at every stage." 
    },
    { 
      icon: RefreshCw, 
      title: "Buyback Information", 
      description: "We also shed light on investing in the buyback of shares to help you make strategic moves about companies." 
    },
  ];

  const highlightedTerms = [
    "IPO allotment status",
    "IPO listing gains",
    "IPO grey market",
    "ASBA IPO",
    "UPI IPO application",
    "IPO application process",
    "IPO KPIs",
    "IPO valuation",
    "IPO application modification tips",
    "IPO funds unblocking",
    "buyback of shares"
  ];

  const renderDescription = (text: string) => {
    let result = text;
    highlightedTerms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      result = result.replace(regex, `<span class="text-blue-500">$1</span>`);
    });
    return result;
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 bg-[#f2f4ff]">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center">Comprehensive IPO Resources</h2>
        
        <p 
          className="text-gray-600 text-sm sm:text-base font-medium mb-8 sm:mb-10 md:mb-12 text-center mx-auto leading-relaxed px-2"
          dangerouslySetInnerHTML={{
            __html: `From understanding <span class="text-blue-500">IPO allotment status</span> and tracking <span class="text-blue-500">IPO listing gains</span> to exploring the <span class="text-blue-500">IPO grey market</span> and knowing how to apply through <span class="text-blue-500">ASBA IPO</span> or <span class="text-blue-500">UPI IPO application</span>, our resources cover it all. We break down the steps involved in the <span class="text-blue-500">IPO application process</span>, explain key <span class="text-blue-500">IPO KPIs</span>, and guide you on how <span class="text-blue-500">IPO valuation</span> works. Whether you're applying for the first time or modifying an existing application through our <span class="text-blue-500">IPO application modification tips</span>, or waiting for a <span class="text-blue-500">IPO funds unblocking</span>, we ensure you're informed at every stage. We also shed light on investing in the <span class="text-blue-500">buyback of shares</span> to help you make strategic moves about companies.`
          }}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div key={index} className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="bg-white border-2 border-purple-600 text-gray-800 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-bold text-lg">
            Explore Our Complete IPO Guide
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
