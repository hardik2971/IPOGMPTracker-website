//src/components/IPOSection.tsx
"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ipoApi } from "@/api/ipo";
import type { Ipo } from "@/types/api/ipo";
import { DisplayIpo } from "@/types/ipo";
import { currentIPOs } from "@/constant/mockIpo";
import IpoCard from "./ipo/IpoCard";
import { mapApiIpoToDisplay } from "@/helper/ipoHelpers";

export default function IPOSection() {
  const [selectedBoard, setSelectedBoard] = useState("Mainboard");
  const [activeTab, setActiveTab] = useState("current");

  // State for API data (used only when board === "All")
  const [allIpos, setAllIpos] = useState<Ipo[] | null>(null);
  const [isLoadingAll, setIsLoadingAll] = useState(false);
  const [allError, setAllError] = useState<string | null>(null);

  const handleBoardChange = async (value: string) => {
    setSelectedBoard(value);

    // Only call API when switching to "All" and if not already loaded
    if (value === "All" && !allIpos && !isLoadingAll) {
      try {
        setIsLoadingAll(true);
        setAllError(null);
        const res = await ipoApi.getAllIpos(); // IpoResponse
        setAllIpos(res.data);
      } catch (error) {
        console.error("Failed to fetch IPOs", error);
        setAllError("Unable to load IPOs at the moment. Please try again.");
      } finally {
        setIsLoadingAll(false);
      }
    }
  };

  // Decide which list to render without changing card UI
  let displayedIpos: DisplayIpo[] = currentIPOs;
  if (selectedBoard === "All" && allIpos && !isLoadingAll && !allError) {
    displayedIpos = allIpos.map(mapApiIpoToDisplay);
  }

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
                    <svg
                      className={`w-6 h-6 mb-2 ${
                        activeTab === "current"
                          ? "text-purple-600"
                          : "text-gray-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      />
                    </svg>
                    <span
                      className={`text-center leading-tight ${
                        activeTab === "current"
                          ? "text-purple-600"
                          : "text-gray-600"
                      }`}
                    >
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
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 mb-2 ${
                        activeTab === "upcoming"
                          ? "text-purple-600"
                          : "text-gray-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span
                      className={`text-center leading-tight ${
                        activeTab === "upcoming"
                          ? "text-purple-600"
                          : "text-gray-600"
                      }`}
                    >
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
                    <svg
                      className={`w-6 h-6 mb-2 ${
                        activeTab === "listed"
                          ? "text-purple-600"
                          : "text-gray-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <span
                      className={`text-center leading-tight ${
                        activeTab === "listed"
                          ? "text-purple-600"
                          : "text-gray-600"
                      }`}
                    >
                      <span className="block">Listed</span>
                      <span className="block">IPOs</span>
                    </span>
                  </button>
                </div>
              </div>
              {/* Main content */}
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                  IPO - Initial Public Offering
                </h2>
                <div className="flex-1">
                  {/* Filter bar */}
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 sm:p-4 md:p-5 py-2 sm:py-1 pr-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                      {/* Left Section - Radio Buttons */}
                      <RadioGroup
                        value={selectedBoard}
                        onValueChange={handleBoardChange}
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
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          <span className="hidden sm:inline">
                            Live Subscription
                          </span>
                          <span className="sm:hidden">Live Sub</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-[#5A32A3] hover:bg-[#4C2A8A] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="hidden sm:inline">
                            IPO Event Calendar
                          </span>
                          <span className="sm:hidden">Calendar</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2 sm:gap-3 mt-4">
                    {selectedBoard === "All" && isLoadingAll && (
                      <div className="border border-gray-200 rounded-lg bg-white p-4 text-sm text-gray-600">
                        Loading IPOs...
                      </div>
                    )}

                    {selectedBoard === "All" && allError && !isLoadingAll && (
                      <div className="border border-gray-200 rounded-lg bg-white p-4 text-sm text-red-600">
                        {allError}
                      </div>
                    )}

                    {!isLoadingAll &&
                      displayedIpos.map((ipo, index) => (
                        <IpoCard key={index} ipo={ipo} />
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
                      "Wealth management advisors",
                    ].map((tag, index) => (
                      <button
                        key={index}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-blue-600 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                      >
                        <svg
                          className="w-4 h-4 text-purple-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                            clipRule="evenodd"
                          />
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

          {/* Right sidebar */}
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
                    <img
                      src="/google_store.png"
                      alt="Google Play"
                      className="w-full h-auto rounded-lg"
                    />
                  </button>
                  {/* App Store Button */}
                  <button className="flex items-center justify-center w-full hover:opacity-90 transition-opacity">
                    <img
                      src="/apple_store_3.png"
                      alt="App Store"
                      className="w-full h-auto rounded-lg"
                    />
                  </button>
                </div>
              </div>

              <div className="hidden lg:block bg-white rounded-lg overflow-hidden shadow-lg p-3 flex flex-col justify-start gap-3">
                <div className="text-lg lg:text-xl font-medium text-[#1e3a8a]">
                  Angel One
                </div>
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
                <div className="text-lg lg:text-xl font-medium text-[#1e3a8a]">
                  Zerodha
                </div>
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
                <div className="text-lg lg:text-xl font-medium text-[#1e3a8a]">
                  Upstox
                </div>
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
          {/* End right sidebar */}
        </div>
      </div>
    </section>
  );
}
