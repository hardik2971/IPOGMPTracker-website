// src/components/ipo/IpoCard.tsx
"use client";

import { DisplayIpo } from "@/types/ipo";

interface IpoCardProps {
  ipo: DisplayIpo;
}

export default function IpoCard({ ipo }: IpoCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg">
      <div className="bg-white rounded-lg p-3 sm:p-4 md:p-5">
        <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
          {/* Logo Section */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white border border-black rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-gray-800 font-bold text-lg sm:text-xl md:text-2xl">
              {ipo.name.charAt(0)}
            </span>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Company Name and Badges */}
            <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-1.5 flex-wrap">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 leading-tight">
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
              {ipo.allotmentAwaited && (
                <span className="px-3 py-0.5 bg-orange-400 text-white text-xs font-medium rounded flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Allotment Awaited
                </span>
              )}
            </div>

            {/* Offer Date */}
            <p className="text-sm text-gray-500 mb-5">
              Offer Date: {ipo.offerDate}
            </p>

            {/* Offer Details Grid with Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 mt-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-8 flex-1 w-full sm:w-auto">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Offer Price</p>
                  <p className="text-xs sm:text-sm font-normal text-gray-800">
                    {ipo.offerPrice}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Lot Size</p>
                  <p className="text-xs sm:text-sm font-normal text-gray-800">
                    {ipo.lotSize}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Subscription</p>
                  <p className="text-xs sm:text-sm font-bold text-blue-600">
                    {ipo.subscription}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Exp. Premium</p>
                  <p className="text-xs sm:text-sm font-bold text-green-600">
                    {ipo.expPremium}
                  </p>
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
                UPI Mandate for Bids placed between 5 PM and before 10 AM will
                be received after 10 AM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
