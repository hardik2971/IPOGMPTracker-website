"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Home, ChevronRight } from "lucide-react";

export default function Brokers() {
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
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-10 px-4 bg-[#f2f4ff]">
        <div className="container mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Home className="w-4 h-4 text-[#6B46C1]" />
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-500">Brokers</span>
          </nav>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Left Card - Explore Section */}
                <div className="bg-[#E8F0FE] rounded-lg border border-gray-200 flex items-center gap-4">
                  <img
                    src="/explore_Card.png"
                    alt="Explore Investment Opportunities"
                    className="object-contain"
                  />
                </div>

                {/* Right Card - Comparison Section */}
                <div className="bg-[#E8F5E9] rounded-lg border border-gray-200 flex items-center gap-4">
                  <img
                    src="/compare_card.png"
                    alt="Compare Brokers"
                    className="object-contain"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8 text-left">Brokers</h2>
              <div className="grid gap-6">
                {brokers.map((broker, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-3">
                      {/* Left Section: Logo and Broker Name */}
                      <div className="flex flex-col items-center  min-w-[100px] mx-auto">
                        <div className="w-[60px] h-[60px] rounded-lg flex items-center justify-center mb-3 overflow-hidden bg-white">
                          <img
                            src={broker.logo}
                            alt={broker.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">{broker.name}</h3>
                      </div>

                      {/* Middle Section: Features and Financial Details */}
                      <div className="flex-1 space-y-4 w-full">
                        <div className="flex justify-between items-start">
                          {/* Feature Tags */}
                          <div className="flex flex-wrap gap-2">
                            {broker.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-50 text-orange-700 text-sm font-medium rounded"
                              >
                                <svg className="w-3.5 h-3.5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {tag}
                              </span>
                            ))}
                          </div>
                          {/* Right Section: Action Buttons */}
                          <div className="flex gap-2 lg:items-end">
                            <button className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg hover:bg-purple-200 transition-colors font-medium whitespace-nowrap">
                              View Details
                            </button>
                            <button className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium whitespace-nowrap">
                              Open Account
                            </button>
                          </div>
                        </div>

                        {/* Financial Details */}
                        <div className=" gap-6 lg:gap-8 grid grid-cols-4">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Account Opening</p>
                            <p className="text-base font-semibold text-gray-800">{broker.accountOpening}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Account Maintenance</p>
                            <p className="text-base font-semibold text-gray-800">{broker.amc}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Equity Delivery</p>
                            <p className="text-base font-semibold text-gray-800">
                              {broker.equityDelivery === "0%" ? "Zero" : broker.equityDelivery}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Equity Intraday</p>
                            <p className="text-base font-semibold text-gray-800">{broker.equityIntraday}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-3">
              <div className="space-y-4">
                {/* Download App Section */}
                <div >
                  <h3 className="text-2xl font-bold text-purple-900 text-center mb-2">
                    Download App
                  </h3>
                  <p className="text-xs text-gray-500 text-center mb-4">
                    India's most downloaded IPO App with 25,00,000+ Downloads
                  </p>
                  <div className="flex gap-2">
                    {/* Google Play Button */}
                    <button className="flex items-center justify-center w-full hover:opacity-90 transition-opacity">
                      <img src="/google_store.png" alt="Google Play" className="w-full h-auto rounded-lg" />
                    </button>
                    {/* App Store Button */}
                    <button className="flex items-center justify-center w-full hover:opacity-90 transition-opacity">
                      <img src="/apple_store_3.png" alt="App Store" className="w-full h-auto rounded-lg" />
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg p-3 flex flex-col justify-start gap-3">
                  <div className="text-xl font-medium text-[#1e3a8a]">Angel One</div>
                  <div className="w-full">
                    <img
                      src="/Angel-One-offer-tab.jpeg"
                      alt="Angel One App Download Offer"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <button className="bg-[#9333ea] hover:bg-[#7e22ce] text-white font-semibold py-2 rounded-lg transition-colors">
                    Know More
                  </button>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg p-3 flex flex-col justify-start gap-3">
                  <div className="text-xl font-medium text-[#1e3a8a]">Zerodha</div>
                  <div className="w-full">
                    <img
                      src="/Zerodha_offer-Img.png"
                      alt="Zerodha Brokerage Free Offer"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <button className="bg-[#9333ea] hover:bg-[#7e22ce] text-white font-semibold py-2 rounded-lg transition-colors">
                    Know More
                  </button>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg p-3 flex flex-col justify-start gap-3">
                  <div className="text-xl font-medium text-[#1e3a8a]">Upstox</div>
                  <div className="w-full">
                    <img
                      src="/Upstox-offer-tab.png"
                      alt="Upstox Zero Brokerage Offer"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <button className="bg-[#9333ea] hover:bg-[#7e22ce] text-white font-semibold py-2 rounded-lg transition-colors">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
