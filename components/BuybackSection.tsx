"use client";

import { useState } from "react";

export default function BuybackSection() {
  const [selectedFilter, setSelectedFilter] = useState("Current");

  const buybacks = [
    {
      name: "Fairchem Organics Buyback 2025",
      recordDate: "Jan 5, 2026",
      issueDate: "Jan 10, 2026",
      closeDate: "Jan 25, 2026",
      buybackPrice: "₹800.00",
      issueSize: {
        shares: "4,25,000",
        percentage: "3.26",
        amount: "₹34.0 Crores"
      },
      type: "Tender Offer"
    },
    {
      name: "Nectar Lifesciences Buyback 2025",
      recordDate: "Jan 15, 2025",
      issueDate: "Jan 20, 2025",
      closeDate: "Jan 25, 2025",
      buybackPrice: "₹450.00",
      issueSize: {
        shares: "2,50,000",
        percentage: "2.15",
        amount: "₹11.25 Crores"
      },
      type: "Tender Offer"
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 pt-0 px-4 bg-[#f2f4ff]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <div className="lg:col-span-9">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A202C] mb-4">Buyback</h2>
            {/* Filter Section */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg px-4 sm:px-6 py-3 sm:py-4 mb-2">
              <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="filter"
                      value="Current"
                      checked={selectedFilter === "Current"}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedFilter === "Current"
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300 bg-white"
                      }`}>
                      {selectedFilter === "Current" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className={`font-semibold ${selectedFilter === "Current" ? "text-gray-900" : "text-gray-500"}`}>
                    Current
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="filter"
                      value="Upcoming"
                      checked={selectedFilter === "Upcoming"}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedFilter === "Upcoming"
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300 bg-white"
                      }`}>
                      {selectedFilter === "Upcoming" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className={`font-semibold ${selectedFilter === "Upcoming" ? "text-gray-900" : "text-gray-500"}`}>
                    Upcoming
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="filter"
                      value="Closed"
                      checked={selectedFilter === "Closed"}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedFilter === "Closed"
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300 bg-white"
                      }`}>
                      {selectedFilter === "Closed" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className={`font-semibold ${selectedFilter === "Closed" ? "text-gray-900" : "text-gray-500"}`}>
                    Closed
                  </span>
                </label>
              </div>
            </div>
            {/* Buyback Cards */}
            <div className="space-y-3 w-full">
              {buybacks.map((buyback, index) => (
                <div key={index} className="w-full bg-white border border-[#E5E7EB] rounded-lg p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Card Header */}
                  <div className="w-full flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      {/* Logo Placeholder */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <div className="text-white text-[6px] sm:text-[7px] md:text-[8px] font-bold text-center leading-tight px-0.5 sm:px-1">
                          FAIRCHEM<br />A FAIRFAX<br />COMPANY
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-5">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                          {/* Company Name and Tag */}
                          <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-wrap flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">{buyback.name}</h3>
                            <span className="bg-[#EDE9FE] text-[#8B5CF6] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                              {buyback.type}
                            </span>
                          </div>
                          {/* View Button */}
                          <button className="bg-purple-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium flex-shrink-0 text-sm sm:text-base w-full sm:w-auto">
                            View
                          </button>
                        </div>
                        {/* Buyback Details - 5 Column Layout */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                          <div>
                            <p className="text-xs sm:text-sm text-gray-500 mb-1">Record date</p>
                            <p className="text-sm sm:text-base font-semibold text-gray-900">{buyback.recordDate}</p>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-gray-500 mb-1">Issue Date</p>
                            <p className="text-sm sm:text-base font-semibold text-gray-900">{buyback.issueDate}</p>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-gray-500 mb-1">Close Date</p>
                            <p className="text-sm sm:text-base font-semibold text-gray-900">{buyback.closeDate}</p>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-gray-500 mb-1">Buyback Price</p>
                            <p className="text-sm sm:text-base font-semibold text-gray-900">{buyback.buybackPrice}</p>
                          </div>
                          <div className="col-span-2 sm:col-span-3 md:col-span-1">
                            <p className="text-xs sm:text-sm text-gray-500 mb-1">Issue size</p>
                            <div className="text-xs sm:text-sm md:text-base text-gray-900 leading-tight">
                              <p className="font-semibold">{buyback.issueSize.shares}</p>
                              <p className="font-normal">({buyback.issueSize.percentage} % of Total</p>
                              <p className="font-normal">number of</p>
                              <p className="font-normal">equity</p>
                              <p className="font-normal">Shares)</p>
                              <p className="font-semibold">({buyback.issueSize.amount})</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
            {/* View All Button */}
            <div className="flex justify-center mt-8">
              <button className="px-8 py-3 bg-purple-100 text-purple-700 border border-purple-700 rounded-lg font-bold text-base hover:bg-purple-200 transition-colors">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
