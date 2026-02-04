"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useEffect, useState } from "react";
import { Home, ChevronRight } from "lucide-react";
import { ipoApi } from "@/api/ipo";
import type { Ipo, Pagination as PaginationInterface } from "@/types/api/ipo";
import { DisplayIpo } from "@/types/ipo";
import IpoCard from "@/components/ipo/IpoCard";
import { mapApiIpoToDisplay } from "@/helper/ipoHelpers";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SMEUpcomingIPO() {
  const pathname = usePathname();
  const router = useRouter();

  const isCurrent = pathname === "/ipo/current-ipo";
  const isUpcoming = pathname === "/ipo/upcoming-ipo";
  const isListed = pathname === "/ipo/listed-ipo";

  const [selectedBoard, setSelectedBoard] = useState("Mainboard");
    const [activeTab, setActiveTab] = useState("current");
    const [displayedIpos, setDisplayedIpos] = useState<DisplayIpo[]>([]);
    const [limit, setLimit] = useState<number>(20);
    const [page, setPage] = useState<number>(1);
    const [ipos, setIpos] = useState<Ipo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [pagination, setPagination] = useState<PaginationInterface | null>(
      null
    );
  
    const handleBoardChange = (value: string) => {
      setSelectedBoard(value);
      setError(null);
    };
  
    const handleLimitChange = (value: string) => {
      setLimit(Number(value));
      setPage(1); // Reset to first page when limit changes
    };
  
    const handlePageChange = (newPage: number) => {
      setPage(newPage);
      // Scroll to top of IPO section
      window.scrollTo({ top: 400, behavior: "smooth" });
    };
  
    const fetchIpos = async () => {
      try {
        setIsLoading(true);
        setError(null);
  
        const res = await ipoApi.getAllIpos({ page, limit });
  
        setIpos(res.data);
        if (res.pagination) {
          setPagination(res.pagination);
        }
  
        return res.data;
      } catch (err) {
        console.error("Failed to fetch IPOs", err);
        setError("Unable to load IPOs. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
  
    // Fetch IPOs when page or limit changes
    useEffect(() => {
      fetchIpos();
    }, [page, limit]);
  
    // Filter IPOs by board type
    useEffect(() => {
      if (!ipos.length) return;
  
      let filtered = ipos;
  
      if (selectedBoard === "SME") {
        filtered = ipos.filter((ipo) => ipo.ipo_type === "SME");
      } else if (selectedBoard === "Mainboard") {
        filtered = ipos.filter((ipo) => ipo.ipo_type !== "SME");
      }
  
      const ipoData = filtered.map(mapApiIpoToDisplay);
      setDisplayedIpos(ipoData);
    }, [selectedBoard, ipos]);
  
    // Generate page numbers to display
    const getPageNumbers = (): (number | "ellipsis")[] => {
      if (!pagination) return [];
  
      const { totalPages, page: currentPage } = pagination;
      const pages: (number | "ellipsis")[] = [];
  
      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
  
        if (currentPage > 3) {
          pages.push("ellipsis");
        }
  
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
  
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
  
        if (currentPage < totalPages - 2) {
          pages.push("ellipsis");
        }
  
        pages.push(totalPages);
      }
  
      return pages;
    };
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
                    <div className="grid gap-2 sm:gap-3 mt-2">
                      {isLoading && (
                        <div className="border border-gray-200 rounded-lg bg-white p-4 text-sm text-gray-600">
                          Loading IPOs...
                        </div>
                      )}

                      {error && !isLoading && (
                        <div className="border border-gray-200 rounded-lg bg-white p-4 text-sm text-red-600">
                          {error}
                        </div>
                      )}

                      {!isLoading &&
                        !error &&
                        displayedIpos.map((ipo, index) => (
                          <IpoCard key={index} ipo={ipo} />
                        ))}

                      {!isLoading && !error && displayedIpos.length === 0 && (
                        <div className="border border-gray-200 rounded-lg bg-white p-4 text-sm text-gray-600">
                          No IPOs found for the selected filter.
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      {/* Results info and limit selector */}
                      {pagination && (
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2 mt-4 mb-2">
                          <p className="text-sm text-gray-600">
                            Showing{" "}
                            <span className="font-medium">
                              {(pagination.page - 1) * pagination.limit + 1}
                            </span>{" "}
                            to{" "}
                            <span className="font-medium">
                              {Math.min(
                                pagination.page * pagination.limit,
                                pagination.total
                              )}
                            </span>{" "}
                            of{" "}
                            <span className="font-medium">{pagination.total}</span>{" "}
                            IPOs
                          </p>
                          <div className="flex items-center gap-2">
                            <Select
                              value={limit.toString()}
                              onValueChange={handleLimitChange}
                            >
                              <SelectTrigger className="w-20 h-8 bg-white">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-white">
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                              </SelectContent>
                            </Select>
                            <span className="text-sm text-gray-600">per page</span>
                          </div>
                        </div>
                      )}
                      {/* Pagination */}
                      {!isLoading &&
                        !error &&
                        pagination &&
                        pagination.totalPages > 1 && (
                          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Pagination>
                              <PaginationContent>
                                {/* Previous Button */}
                                <PaginationItem>
                                  <PaginationPrevious
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (pagination.hasPrevPage) {
                                        handlePageChange(page - 1);
                                      }
                                    }}
                                    className={
                                      !pagination.hasPrevPage
                                        ? "pointer-events-none opacity-50"
                                        : "cursor-pointer"
                                    }
                                  />
                                </PaginationItem>

                                {/* Page Numbers */}
                                {getPageNumbers().map((pageNum, index) => (
                                  <PaginationItem key={index}>
                                    {pageNum === "ellipsis" ? (
                                      <PaginationEllipsis />
                                    ) : (
                                      <PaginationLink
                                        href="#"
                                        isActive={pageNum === page}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          handlePageChange(pageNum);
                                        }}
                                        className="cursor-pointer"
                                      >
                                        {pageNum}
                                      </PaginationLink>
                                    )}
                                  </PaginationItem>
                                ))}

                                {/* Next Button */}
                                <PaginationItem>
                                  <PaginationNext
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (pagination.hasNextPage) {
                                        handlePageChange(page + 1);
                                      }
                                    }}
                                    className={
                                      !pagination.hasNextPage
                                        ? "pointer-events-none opacity-50"
                                        : "cursor-pointer"
                                    }
                                  />
                                </PaginationItem>
                              </PaginationContent>
                            </Pagination>
                          </div>
                        )}
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
