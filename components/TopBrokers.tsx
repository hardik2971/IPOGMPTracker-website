export default function TopBrokers() {
  const brokers = [
    {
      name: "Zerodha",
      logo: "/zerodha-logo.jpeg",
      tags: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      accountOpening: "Free",
      amc: "₹0",
      equityIntraday: "0.01%",
      equityDelivery: "0%",
    },
    {
      name: "Angel One",
      logo: "/angel-logo.jpeg",
      tags: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      accountOpening: "Free",
      amc: "₹0",
      equityIntraday: "0.01%",
      equityDelivery: "0%",
    },
    {
      name: "Upstox",
      logo: "/upstox-logo.jpeg",
      tags: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      accountOpening: "Free",
      amc: "₹0",
      equityIntraday: "0.01%",
      equityDelivery: "0%",
    },
    {
      name: "Dhan",
      logo: "/dhan-logo.jpeg",
      tags: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      accountOpening: "Free",
      amc: "₹0",
      equityIntraday: "0.01%",
      equityDelivery: "0%",
    },
    {
      name: "Kotak Securities",
      logo: "/kotak-sec-logo.jpeg",
      tags: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      accountOpening: "Free",
      amc: "₹0",
      equityIntraday: "0.03%",
      equityDelivery: "0.5%",
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 px-4 bg-[#f2f4ff]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <div className="lg:col-span-9">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Top Brokers</h2>
            <div className="grid gap-4 sm:gap-6">
              {brokers.map((broker, index) => (
                <div key={index} className="bg-white rounded-lg p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-3">
                    {/* Left Section: Logo and Broker Name */}
                    <div className="flex flex-row sm:flex-col items-center sm:items-center gap-3 sm:gap-0 min-w-[100px] mx-auto lg:mx-0">
                    <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-lg flex items-center justify-center mb-0 sm:mb-3 overflow-hidden bg-white flex-shrink-0">
                        <img 
                          src={broker.logo} 
                          alt={broker.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-center sm:text-center">{broker.name}</h3>
                    </div>

                    {/* Middle Section: Features and Financial Details */}
                    <div className="flex-1 space-y-3 sm:space-y-4 w-full">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-2 flex-1">
                          {broker.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-stone-50 text-orange-700 text-xs sm:text-sm font-medium rounded"
                            >
                              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {tag}
                            </span>
                          ))}
                        </div>
                        {/* Right Section: Action Buttons */}
                        <div className="flex gap-2 lg:items-end flex-shrink-0">
                          <button className="bg-purple-100 text-purple-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-purple-200 transition-colors font-medium text-xs sm:text-sm whitespace-nowrap">
                            View Details
                          </button>
                          <button className="bg-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium text-xs sm:text-sm whitespace-nowrap">
                            Open Account
                          </button>
                        </div>
                      </div>

                      {/* Financial Details */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-500 mb-1">Account Opening</p>
                          <p className="text-sm sm:text-base font-semibold text-gray-800">{broker.accountOpening}</p>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-gray-500 mb-1">Account Maintenance</p>
                          <p className="text-sm sm:text-base font-semibold text-gray-800">{broker.amc}</p>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-gray-500 mb-1">Equity Delivery</p>
                          <p className="text-sm sm:text-base font-semibold text-gray-800">
                            {broker.equityDelivery === "0%" ? "Zero" : broker.equityDelivery}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-gray-500 mb-1">Equity Intraday</p>
                          <p className="text-sm sm:text-base font-semibold text-gray-800">{broker.equityIntraday}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Filter buttons */}
            {/* Discover More Section */}
            <div className="mt-2">
              {/* Discover more label */}
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium text-sm mb-4">
                Discover more
              </button>

              {/* Tags Grid */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Investment courses",
                  "IPO-G",
                  "Live IPO subscription",
                  "IPO research reports",
                  "IPO event calendar",
                  "Personal finance apps",
                  "IPO application service",
                  "Investment strategy guides",
                  "Wealth management advisors"
                ].map((tag, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-blue-600 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span>{tag}</span>
                  </button>
                ))}
              </div>

              {/* View All Button */}
              <div className="flex justify-center">
                <button className="px-8 py-3 bg-purple-100 text-purple-700 border border-purple-700 rounded-lg font-bold text-base hover:bg-purple-200 transition-colors">
                  View All
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 hidden lg:block">
          </div>
        </div>
      </div>
    </section>
  );
}
