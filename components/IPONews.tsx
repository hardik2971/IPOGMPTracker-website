import Image from 'next/image';

export default function IPONews() {
  const news = [
    {
      title: "Amagi Media Labs IPO 2026",
      description: "Amagi Media Labs IPO 2026",
      date: "January 9, 2026 at 12:15 AM",
      image: "/api/placeholder/300/200",
    },
    {
      title: "How to Get IPO Allotment in Bharat Coking Coal (BCCL) IPO",
      description: "How to Get IPO Allotment in Bharat Coking Coal (BCCL) IPO",
      date: "January 8, 2026 at 10:30 AM",
      image: "/api/placeholder/300/200",
    },
    {
      title: "Bharat Coking Coal IPO",
      description: "Bharat Coking Coal IPO 2026: Complete Guide to SEBI-Approved IPO with Price...",
      date: "January 7, 2026 at 2:45 PM",
      image: "/api/placeholder/300/200",
    },
    {
      title: "India's IPO Market in 2025: A Record-Breaking Year",
      description: "India's IPO Market in 2025: A Record-Breaking Year",
      date: "January 6, 2026 at 9:20 AM",
      image: "/api/placeholder/300/200",
    },
  ];

  const discoverTags = [
    "IPOji",
    "Personal finance apps",
    "Tax preparation services",
    "IPOJI",
    "Portfolio management services",
    "IPO-G",
    "Live IPO subscription",
    "Financial webinars",
    "Investment books",
    "Public offering guide",
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 px-4 bg-[#f2f4ff]">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">IPO News & Blogs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{item.date}</p>
                <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-base">
            View All →
          </a>
        </div>

        {/* Discover more section */}
        <div className="mt-2">
          <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium text-sm mb-4 cursor-pointer">
            Discover more
          </button>
          <div className="flex flex-wrap gap-2">
            {discoverTags.map((tag, index) => (
              <button
                key={index}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-purple-600 border border-purple-200 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors"
              >
                <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
                <span>{tag}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
