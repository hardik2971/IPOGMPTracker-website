"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function IPOSection() {
  const [selectedBoard, setSelectedBoard] = useState("Mainboard");
  const [activeTab, setActiveTab] = useState("current");
  const currentIPOs = [
    {
      name: "Bharat Coking Coal",
      boardType: "Mainboard",
      isLive: false,
      allotmentAwaited: true,
      offerDate: "Jan 9, 2026 - Jan 13, 2026",
      offerPrice: "21-23",
      lotSize: "600",
      subscription: "8.14 times",
      expPremium: "10-10.1 (43.48%)",
    },
    {
      name: "Amagi Media Labs",
      boardType: "Mainboard",
      isLive: true,
      allotmentAwaited: false,
      offerDate: "Jan 20, 2026 - Jan 24, 2026",
      offerPrice: "200-210",
      lotSize: "50",
      subscription: "5.2 times",
      expPremium: "15-16 (35.5%)",
    },
    {
      name: "Pranav Constructions",
      boardType: "Mainboard",
      isLive: false,
      allotmentAwaited: false,
      offerDate: "Jan 25, 2026 - Jan 29, 2026",
      offerPrice: "100-105",
      lotSize: "150",
      subscription: "0 times",
      expPremium: "8-9 (20%)",
    },
    {
      name: "Cordeila Cruises (Waterways Leisure Tourism)",
      boardType: "Mainboard",
      isLive: false,
      allotmentAwaited: false,
      offerDate: "Jan 30, 2026 - Feb 3, 2026",
      offerPrice: "175-180",
      lotSize: "80",
      subscription: "0 times",
      expPremium: "12-13 (28%)",
    },
    {
      name: "Clean Max Enviro Energy Solutions",
      boardType: "Mainboard",
      isLive: false,
      allotmentAwaited: false,
      offerDate: "Feb 5, 2026 - Feb 9, 2026",
      offerPrice: "125-130",
      lotSize: "120",
      subscription: "0 times",
      expPremium: "10-11 (25%)",
    },
    {
      name: "Fractal Analytics",
      boardType: "Mainboard",
      isLive: false,
      allotmentAwaited: false,
      offerDate: "Feb 10, 2026 - Feb 14, 2026",
      offerPrice: "300-310",
      lotSize: "40",
      subscription: "0 times",
      expPremium: "18-20 (40%)",
    },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 px-4 bg-[#f2f4ff]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <div className="lg:col-span-9 order-2 lg:order-1">
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-2">
              {/* Left sidebar */}
              <div className="lg:w-30 flex-shrink-0 mt-0 lg:mt-12">
                <div className="rounded-lg space-y-2">
                  {/* Filter button */}
                  <button className="w-full px-3 sm:px-4 py-2 bg-white text-gray-700 rounded-lg font-medium shadow-sm text-sm sm:text-base">
                    Filter
                  </button>
                  {/* Current IPOs */}
                  <button 
                    onClick={() => setActiveTab("current")}
                    className={`cursor-pointer mt-3 sm:mt-5 w-full flex flex-col items-center justify-center px-3 sm:px-4 py-4 sm:py-6 bg-white rounded-lg font-medium transition-colors text-sm sm:text-base ${
                      activeTab === "current"
                        ? "border-2 border-purple-600"
                        : "border-2 border-gray-100 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <svg className={`w-6 h-6 mb-2 ${activeTab === "current" ? "text-purple-600" : "text-gray-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                    <span className={`text-center leading-tight ${activeTab === "current" ? "text-purple-600" : "text-gray-600"}`}>
                      <span className="block">Current</span>
                      <span className="block">IPOs</span>
                    </span>
                  </button>
                  {/* Upcoming IPOs */}
                  <button 
                    onClick={() => setActiveTab("upcoming")}
                    className={`cursor-pointer w-full flex flex-col items-center justify-center px-3 sm:px-4 py-4 sm:py-6 bg-white rounded-lg font-medium transition-colors text-sm sm:text-base ${
                      activeTab === "upcoming"
                        ? "border-2 border-purple-600"
                        : "border-2 border-gray-100 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <svg className={`w-5 h-5 sm:w-6 sm:h-6 mb-2 ${activeTab === "upcoming" ? "text-purple-600" : "text-gray-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className={`text-center leading-tight ${activeTab === "upcoming" ? "text-purple-600" : "text-gray-600"}`}>
                      <span className="block">Upcoming</span>
                      <span className="block">IPOs</span>
                    </span>
                  </button>
                  {/* Listed IPOs */}
                  <button 
                    onClick={() => setActiveTab("listed")}
                    className={`cursor-pointer w-full flex flex-col items-center justify-center px-3 sm:px-4 py-4 sm:py-6 bg-white rounded-lg font-medium transition-colors text-sm sm:text-base ${
                      activeTab === "listed"
                        ? "border-2 border-purple-600"
                        : "border-2 border-gray-100 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <svg className={`w-6 h-6 mb-2 ${activeTab === "listed" ? "text-purple-600" : "text-gray-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className={`text-center leading-tight ${activeTab === "listed" ? "text-purple-600" : "text-gray-600"}`}>
                      <span className="block">Listed</span>
                      <span className="block">IPOs</span>
                    </span>
                  </button>
                </div>
              </div>
              {/* Main content */}
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">IPO - Initial Public Offering</h2>
                <div className="flex-1">
                  {/* Filter bar */}
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 sm:p-4 md:p-5 py-2 sm:py-1 pr-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                      {/* Left Section - Radio Buttons */}
                      <RadioGroup
                        value={selectedBoard}
                        onValueChange={setSelectedBoard}
                        className="!flex items-center gap-6"
                      >
                        <div className="flex items-center gap-2.5">
                          <RadioGroupItem value="Mainboard" id="mainboard" />
                          <label
                            htmlFor="mainboard"
                            className="text-sm font-medium text-gray-900 cursor-pointer"
                          >
                            Mainboard
                          </label>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <RadioGroupItem value="SME" id="sme" />
                          <label
                            htmlFor="sme"
                            className="text-sm font-medium text-gray-900 cursor-pointer"
                          >
                            SME
                          </label>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <RadioGroupItem value="All" id="all" />
                          <label
                            htmlFor="all"
                            className="text-sm font-medium text-gray-900 cursor-pointer"
                          >
                            All
                          </label>
                        </div>
                      </RadioGroup>

                      {/* Right Section - Action Buttons */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                        <button className="flex items-center justify-center gap-2 bg-[#6B46C1] hover:bg-[#5A32A3] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <span className="hidden sm:inline">Live Subscription</span>
                          <span className="sm:hidden">Live Sub</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-[#5A32A3] hover:bg-[#4C2A8A] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="hidden sm:inline">IPO Event Calendar</span>
                          <span className="sm:hidden">Calendar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-2 sm:gap-3 mt-4">
                    {currentIPOs.map((ipo, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg">
                        <div className="bg-white rounded-lg p-3 sm:p-4 md:p-5">
                          <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                            {/* Logo Section */}
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white border border-black rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-gray-800 font-bold text-lg sm:text-xl md:text-2xl">{ipo.name.charAt(0)}</span>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 min-w-0">
                              {/* Company Name and Badges */}
                              <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-1.5 flex-wrap">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 leading-tight">{ipo.name}</h3>
                                <span className="px-3 py-0.5 bg-green-600 text-white text-xs font-medium rounded">
                                  {ipo.boardType}
                                </span>
                                {ipo.isLive && (
                                  <span className="px-3 py-0.5 bg-red-600 text-white text-xs font-medium rounded flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Live
                                  </span>
                                )}
                                {ipo.allotmentAwaited && (
                                  <span className="px-3 py-0.5 bg-orange-400 text-white text-xs font-medium rounded flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Allotment Awaited
                                  </span>
                                )}
                              </div>

                              {/* Offer Date */}
                              <p className="text-sm text-gray-500 mb-5">Offer Date: {ipo.offerDate}</p>

                              {/* Offer Details Grid with Buttons */}
                              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 mt-3">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-8 flex-1 w-full sm:w-auto">
                                  <div>
                                    <p className="text-xs text-gray-500 mb-1">Offer Price</p>
                                    <p className="text-xs sm:text-sm font-normal text-gray-800">{ipo.offerPrice}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500 mb-1">Lot Size</p>
                                    <p className="text-xs sm:text-sm font-normal text-gray-800">{ipo.lotSize}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500 mb-1">Subscription</p>
                                    <p className="text-xs sm:text-sm font-bold text-blue-600">{ipo.subscription}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500 mb-1">Exp. Premium</p>
                                    <p className="text-xs sm:text-sm font-bold text-green-600">{ipo.expPremium}</p>
                                  </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto">
                                  <button className="flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 text-purple-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-purple-200 transition-colors whitespace-nowrap">
                                    View
                                  </button>
                                  {ipo.isLive && (
                                    <button className="flex-1 sm:flex-none px-3 sm:px-5 py-1.5 sm:py-2 bg-purple-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-purple-700 transition-colors whitespace-nowrap">
                                      Apply
                                    </button>
                                  )}
                                  {ipo.allotmentAwaited && (
                                    <button className="flex-1 sm:flex-none px-3 sm:px-5 py-1.5 sm:py-2 bg-purple-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-purple-700 transition-colors whitespace-nowrap">
                                      Check Allotment
                                    </button>
                                  )}
                                </div>
                              </div>
                               {/* Disclaimer Section */}
                          <div className="mt-5 pt-4 border-t border-gray-200 flex items-start gap-2">
                            <svg className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xs text-gray-500 leading-relaxed">
                              UPI Mandate for Bids placed between 5 PM and before 10 AM will be received after 10 AM.
                            </p>
                          </div>
                            </div>
                          </div>                         
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                    <button className="px-6 py-2 bg-purple-100 text-purple-700 border border-purple-700 rounded-lg font-bold text-base hover:bg-purple-200 transition-colors">
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="space-y-4">
                {/* Download App Section */}
                <div className="hidden lg:block">
                  <h3 className="text-xl lg:text-2xl font-bold text-purple-900 text-center mb-2">
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
                <div className="hidden lg:block bg-white rounded-lg overflow-hidden shadow-lg p-3 flex flex-col justify-start gap-3">
                  <div className="text-lg lg:text-xl font-medium text-[#1e3a8a]">Angel One</div>
                  <div className="w-full">
                    <img
                      src="/Angel-One-offer-tab.jpeg"
                      alt="Angel One App Download Offer"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <button className="bg-[#9333ea] hover:bg-[#7e22ce] text-white font-semibold py-2 rounded-lg transition-colors text-sm">
                    Know More
                  </button>
                </div>
                <div className="hidden lg:block bg-white rounded-lg overflow-hidden shadow-lg p-3 flex flex-col justify-start gap-3">
                  <div className="text-lg lg:text-xl font-medium text-[#1e3a8a]">Zerodha</div>
                  <div className="w-full">
                    <img
                      src="/Zerodha_offer-Img.png"
                      alt="Zerodha Brokerage Free Offer"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <button className="bg-[#9333ea] hover:bg-[#7e22ce] text-white font-semibold py-2 rounded-lg transition-colors text-sm">
                    Know More
                  </button>
                </div>
                <div className="hidden lg:block bg-white rounded-lg overflow-hidden shadow-lg p-3 flex flex-col justify-start gap-3">
                  <div className="text-lg lg:text-xl font-medium text-[#1e3a8a]">Upstox</div>
                  <div className="w-full">
                    <img
                      src="/Upstox-offer-tab.png"
                      alt="Upstox Zero Brokerage Offer"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <button className="bg-[#9333ea] hover:bg-[#7e22ce] text-white font-semibold py-2 rounded-lg transition-colors text-sm">
                    Know More
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
