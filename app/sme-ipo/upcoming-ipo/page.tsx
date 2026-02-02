"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useState } from "react";
import { Home, ChevronRight } from "lucide-react";

export default function SMEUpcomingIPO() {
  const pathname = usePathname();
  const router = useRouter();

  const isCurrent = pathname === "/sme-ipo/current-ipo";
  const isUpcoming = pathname === "/sme-ipo/upcoming-ipo";
  const isListed = pathname === "/sme-ipo/listed-ipo";

  const [selectedBoard, setSelectedBoard] = useState("SME");
  const upcomingIPOs = [
    {
      name: "Bharat Coking Coal",
      boardType: "SME",
      isLive: true,
      offerDate: "Jan 9, 2026 - Jan 13, 2026",
      offerPrice: "21-23",
      lotSize: "600",
      subscription: "8.14 times",
      expPremium: "10-10.1 (43.48%)",
    },
    {
      name: "Amagi Media Labs",
      boardType: "SME",
      isLive: true,
      offerDate: "Jan 20, 2026 - Jan 24, 2026",
      offerPrice: "200-210",
      lotSize: "50",
      subscription: "5.2 times",
      expPremium: "15-16 (35.5%)",
    },
    {
      name: "Pranav Constructions",
      boardType: "SME",
      isLive: false,
      offerDate: "Jan 25, 2026 - Jan 29, 2026",
      offerPrice: "100-105",
      lotSize: "150",
      subscription: "0 times",
      expPremium: "8-9 (20%)",
    },
    {
      name: "Cordeila Cruises (Waterways Leisure Tourism)",
      boardType: "SME",
      isLive: false,
      offerDate: "Jan 30, 2026 - Feb 3, 2026",
      offerPrice: "175-180",
      lotSize: "80",
      subscription: "0 times",
      expPremium: "12-13 (28%)",
    },
    {
      name: "Clean Max Enviro Energy Solutions",
      boardType: "SME",
      isLive: false,
      offerDate: "Feb 5, 2026 - Feb 9, 2026",
      offerPrice: "125-130",
      lotSize: "120",
      subscription: "0 times",
      expPremium: "10-11 (25%)",
    },
    {
      name: "Fractal Analytics",
      boardType: "SME",
      isLive: false,
      offerDate: "Feb 10, 2026 - Feb 14, 2026",
      offerPrice: "300-310",
      lotSize: "40",
      subscription: "0 times",
      expPremium: "18-20 (40%)",
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
            <span className="text-gray-500">SME IPO</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="font-medium text-gray-900">Upcoming SME IPO</span>
          </nav>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-9">
              <div className="flex flex-col lg:flex-row gap-2">
                {/* Main content */}
                <div className="flex-1">
                  <div className="flex-1">
                    {/* Tabs + heading + board filter */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-4">
                      {/* Tabs */}
                      <div className="grid grid-cols-3 text-sm font-semibold text-[#4C3FB6] p-2 gap-2">
                        <Link href="/sme-ipo/current-ipo">
                          <button
                            className={`w-full px-6 py-3 text-center rounded-md border transition-colors ${
                              isCurrent
                                ? "bg-[#F4F3FF] border-[#6B46C1] text-[#1A237E]"
                                : "border-[#C5B8FF] hover:bg-[#F8F7FF] text-[#4C3FB6]"
                            }`}
                          >
                            Current
                          </button>
                        </Link>
                        <Link href="/sme-ipo/upcoming-ipo">
                          <button
                            className={`w-full px-6 py-3 text-center rounded-md border transition-colors ${
                              isUpcoming
                                ? "bg-[#F4F3FF] border-[#6B46C1] text-[#1A237E]"
                                : "border-[#C5B8FF] hover:bg-[#F8F7FF] text-[#4C3FB6]"
                            }`}
                          >
                            Upcoming
                          </button>
                        </Link>
                        <Link href="/sme-ipo/listed-ipo">
                          <button
                            className={`w-full px-6 py-3 text-center rounded-md border transition-colors ${
                              isListed
                                ? "bg-[#F4F3FF] border-[#6B46C1] text-[#1A237E]"
                                : "border-[#C5B8FF] hover:bg-[#F8F7FF] text-[#4C3FB6]"
                            }`}
                          >
                            Listed
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg">
                      {/* Heading + radio filters */}
                      <div className="px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#06174A]">
                          Upcoming SME IPO in India 2025
                        </h2>
                        <RadioGroup
                          value={selectedBoard}
                          onValueChange={(value) => {
                            setSelectedBoard(value);
                            if (value === "All") {
                              router.push("/ipo");
                            } else if (value === "Mainboard") {
                              router.push("/ipo/upcoming-ipo");
                            }
                          }}
                          className="!flex !items-center gap-6"
                        >
                          <div className="flex items-center gap-2.5">
                            <RadioGroupItem value="All" id="all" />
                            <label
                              htmlFor="all"
                              className="text-sm font-medium text-gray-900 cursor-pointer"
                            >
                              All
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
                            <RadioGroupItem value="Mainboard" id="mainboard" />
                            <label
                              htmlFor="mainboard"
                              className="text-sm font-medium text-gray-900 cursor-pointer"
                            >
                              Mainboard
                            </label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                    <div className="grid gap-2 mt-2">
                      {upcomingIPOs.map((ipo, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg"
                        >
                          <div className="bg-white rounded-lg p-5">
                            <div className="flex items-start gap-5">
                              {/* Logo Section */}
                              <div className="w-24 h-24 bg-white border border-black rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-gray-800 font-bold text-2xl">
                                  {ipo.name.charAt(0)}
                                </span>
                              </div>

                              {/* Main Content */}
                              <div className="flex-1 min-w-0">
                                {/* Company Name and Badges */}
                                <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                                  <h3 className="text-2xl font-bold text-gray-800">
                                    {ipo.name}
                                  </h3>
                                  <span className="px-3 py-0.5 bg-green-600 text-white text-xs font-medium rounded">
                                    {ipo.boardType}
                                  </span>
                                  {ipo.isLive && (
                                    <span className="px-3 py-0.5 bg-red-600 text-white text-xs font-medium rounded flex items-center gap-1.5">
                                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                      Live
                                    </span>
                                  )}
                                </div>

                                {/* Offer Date */}
                                <p className="text-sm text-gray-500 mb-5">
                                  Offer Date: {ipo.offerDate}
                                </p>

                                {/* Offer Details Grid with Buttons */}
                                <div className="flex items-start gap-6">
                                  <div className="flex  gap-8 flex-1">
                                    <div>
                                      <p className="text-xs text-gray-500 mb-1">
                                        Offer Price
                                      </p>
                                      <p className="text-sm font-normal text-gray-800">
                                        {ipo.offerPrice}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-xs text-gray-500 mb-1">
                                        Lot Size
                                      </p>
                                      <p className="text-sm font-normal text-gray-800">
                                        {ipo.lotSize}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-xs text-gray-500 mb-1">
                                        Subscription
                                      </p>
                                      <p className="text-sm font-bold text-blue-600">
                                        {ipo.subscription}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-xs text-gray-500 mb-1">
                                        Exp. Premium
                                      </p>
                                      <p className="text-sm font-bold text-green-600">
                                        {ipo.expPremium}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Action Buttons */}
                                  <div className="flex gap-2 flex-shrink-0">
                                    <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors whitespace-nowrap">
                                      View
                                    </button>
                                    <button className="px-5 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors whitespace-nowrap">
                                      Apply
                                    </button>
                                  </div>
                                </div>
                                {/* Disclaimer Section */}
                                <div className="mt-5 pt-4 border-t border-gray-200 flex items-start gap-2">
                                  <svg
                                    className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <p className="text-xs text-gray-500 leading-relaxed">
                                    UPI Mandate for Bids placed between 5 PM and
                                    before 10 AM will be received after 10 AM.
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
                        "IPOGMPTracker",
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
                              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 001 1.12-.38z"
                              clipRule="evenodd"
                            />
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
              </div>
            </div>
            <div className="col-span-3">
              <div className="space-y-4">
                {/* Download App Section */}
                <div>
                  <h3 className="text-2xl font-bold text-purple-900 text-center mb-2">
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
                <div className="bg-white rounded-lg overflow-hidden shadow-lg p-3 flex flex-col justify-start gap-3">
                  <div className="text-xl font-medium text-[#1e3a8a]">
                    Angel One
                  </div>
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
                  <div className="text-xl font-medium text-[#1e3a8a]">
                    Zerodha
                  </div>
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
                  <div className="text-xl font-medium text-[#1e3a8a]">
                    Upstox
                  </div>
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
