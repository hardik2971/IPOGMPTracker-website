"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import LoginContent from "@/components/LoginContent";
import {
  HelpCircle,
  Smartphone,
  Monitor,
  CheckCircle2,
  Settings,
  Building2,
  Dice6,
  Percent,
  Search,
  Lightbulb,
  Globe,
  TrendingUp,
  FileText,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { useState } from "react";

export default function IPOAllotmentStatus() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-10 px-4 bg-[#f2f4ff]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-9">
              <div className="flex flex-col items-center justify-center">
                {/* Title */}
                <h1 className="text-3xl font-semibold text-purple-900 mb-8 text-center">
                  IPO Allotment Status
                </h1>
                <div>
                  <Image
                    src="/login.webp"
                    alt="IPO Allotment Status"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-1/2 mx-auto text-center">
                  <div className="flex flex-col items-center justify-center text-purple-900 mb-4 gap-2">
                    <div className="font-medium">
                      Please login to check allotment
                    </div>
                    <div className="text-sm">
                      You can also check allotment using the legacy method.
                      Navigate to the IPO Detail Page, then click on "Check
                      Allotment".
                    </div>
                  </div>
                  {/* Login/Register Button */}
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <button className="cursor-pointer bg-[#9333ea] hover:bg-[#7e22ce] text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm">
                        Login/Register
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl p-0 gap-0 overflow-visible">
                      <VisuallyHidden>
                        <DialogTitle>Login / Register</DialogTitle>
                      </VisuallyHidden>
                      <LoginContent />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              {/* IPO Allotment Guide Section */}
              <div className="p-8 mt-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-purple-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-purple-900">
                      IPO Allotment Guide
                    </h1>
                  </div>
                  <p className="text-lg text-gray-700">
                    Complete guide to understanding IPO allotment process
                  </p>
                </div>

                {/* Section 1: What is IPO allotment? */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      What is IPO allotment?
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed ml-16">
                    IPO allotment is the process through which shares are
                    offered to the applicants of an initial public offer. There
                    is a window of share allotment after every IPO subscription
                    period. During this period, the shares are apportioned to
                    investors according to the applied quantity and the demand
                    of the IPO. Allotment determines whether and how many shares
                    each investor shall get. This is either fully or partially
                    allotted, depending on the number of applications and the
                    availability of the shares.
                  </p>
                </div>

                {/* Section 2: How to check IPO allotment status */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      How to check IPO allotment status on IPOGMPTracker?
                    </h2>
                  </div>

                  {/* Sub-section 2.1: IPOGMPTracker Website */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-4 ml-16">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Monitor className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        IPOGMPTracker Website
                      </h3>
                    </div>
                    <p className="text-gray-700 ml-14">
                      In IPOGMPTracker website click on the allotment tab in the
                      navigation bar → select the respective IPO from the
                      drop-down list → enter the demat details (if not added
                      initially) → click on "Check Allotment."
                    </p>
                  </div>

                  {/* Sub-section 2.2: IPOGMPTracker Mobile App */}
                  <div className="bg-gray-50 rounded-lg p-6 ml-16">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Smartphone className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        IPOGMPTracker Mobile App
                      </h3>
                    </div>
                    <p className="text-gray-700 ml-14">
                      In IPOGMPTracker App tap on the allotment tab in the
                      bottom bar → select the respective IPO from the drop-down
                      list → enter the demat details (if not added initially) →
                      click on "Check Allotment."
                    </p>
                  </div>
                </div>

                {/* Section 3: Procedure of IPO allotment */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Settings className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Procedure of IPO allotment
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-6 ml-16">
                    The IPO allotment procedure essentially comprises the
                    following steps:
                  </p>

                  {/* Steps Container */}
                  <div className="space-y-4 ml-16">
                    {/* Step 1 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl font-bold text-purple-600 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Subscription Period
                          </h3>
                          <p className="text-gray-700">
                            Investors apply for shares in the IPO subscription
                            window.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl font-bold text-purple-600 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Application Collection
                          </h3>
                          <p className="text-gray-700">
                            Applications collected and recorded by the IPO
                            registrar.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl font-bold text-purple-600 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Allocation Process
                          </h3>
                          <p className="text-gray-700">
                            Shares are allocated based on demand, application
                            size, and allotment rules like pro-rata or lottery.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl font-bold text-purple-600 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Finalization
                          </h3>
                          <p className="text-gray-700">
                            Allotment is finalized, and the applicants to whom
                            allotment is made are informed.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl font-bold text-purple-600 flex-shrink-0">
                          5
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Refunds
                          </h3>
                          <p className="text-gray-700">
                            The amount applied for by unsuccessful applicants is
                            returned.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 6 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl font-bold text-purple-600 flex-shrink-0">
                          6
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Credit of Shares
                          </h3>
                          <p className="text-gray-700">
                            The number of shares subscribed to by every allottee
                            is credited to their respective demat accounts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4: How IPO allotment is calculated? */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      How IPO allotment is calculated?
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-6 ml-16">
                    IPO allotment depends on total demand for the issue and the
                    availability of shares. Based on these factors, a company
                    resorts to methods such as lottery or pro-rata in the case
                    of an oversubscribed IPO.
                  </p>

                  {/* Two Cards Side by Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-16 mb-6">
                    {/* Lottery Method Card */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                          <Dice6 className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Lottery Method
                        </h3>
                      </div>
                      <p className="text-gray-700">
                        Used when demand significantly exceeds supply. Winners
                        are selected randomly from eligible applications.
                      </p>
                    </div>

                    {/* Pro-rata Method Card */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                          <Percent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Pro-rata Method
                        </h3>
                      </div>
                      <p className="text-gray-700">
                        Shares distributed proportionally based on the amount
                        applied for by each investor.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 ml-16">
                    For instance, if an investor applies for a larger number of
                    shares than allotted, the shares will either be distributed
                    through a random draw or proportionately, depending on the
                    overall subscription and rules of allotment.
                  </p>
                </div>

                {/* Section 5: Steps to verify application status */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Search className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Steps to verify application status
                    </h2>
                  </div>

                  {/* Banner */}
                  <div className="bg-yellow-100 rounded-lg p-4 mb-6 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-5 h-5 text-yellow-900" />
                      </div>
                      <p className="text-gray-900 font-bold">
                        Multiple Verification Platforms Available
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 ml-16">
                    IPOGMPTracker provides an easy interface to check the
                    allotment of the respective IPO, even if you have applied
                    the IPO from any other platform. Other than this, you can
                    check the allotments from the Official Registrar website or
                    BSE/NSE websites.
                  </p>

                  {/* Three Platform Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 ml-16">
                    {/* Button 1: IPOGMPTracker Platform */}
                    <button className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-3 text-left">
                      <div className="w-10 h-10 rounded-lg border-2 border-purple-600 flex items-center justify-center flex-shrink-0">
                        <Smartphone className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-900 font-medium">
                        IPOGMPTracker Platform
                      </span>
                    </button>

                    {/* Button 2: Official Registrar Website */}
                    <button className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-3 text-left">
                      <div className="w-10 h-10 rounded-lg border-2 border-purple-600 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-900 font-medium">
                        Official Registrar Website
                      </span>
                    </button>

                    {/* Button 3: BSE/NSE Websites */}
                    <button className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-3 text-left">
                      <div className="w-10 h-10 rounded-lg border-2 border-purple-600 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-900 font-medium">
                        BSE/NSE Websites
                      </span>
                    </button>
                  </div>

                  {/* Information Box */}
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 ml-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Required Information for Verification:
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <span className="text-gray-700 font-medium">
                        Bid Application Number
                      </span>
                      <span className="text-gray-700 font-medium">DP ID</span>
                      <span className="text-gray-700 font-medium">
                        PAN Card Number
                      </span>
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
