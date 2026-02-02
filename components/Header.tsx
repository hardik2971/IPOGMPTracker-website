"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { VisuallyHidden } from "./ui/visually-hidden";
import LoginContent from "./LoginContent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 py-2.5">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/IPOGMpTracker.png"
              alt="IPOGMPTracker Logo"
              width={80}
              height={110}
              className="w-12 h-auto sm:w-16 md:w-[200px]"
            />
          </Link>
          <div className="hidden sm:flex flex-1 justify-center max-w-md mx-4">
            <input
              type="text"
              placeholder="Search IPO..."
              className="w-full max-w-[250px] px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-900 placeholder-black focus:outline-none focus:border-gray-300 transition-colors text-sm"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm xl:text-base"
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium focus:outline-none">
                <span>IPO</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2">
                <DropdownMenuItem asChild>
                  <Link href="/ipo/current-ipo">Current IPO</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ipo/upcoming-ipo">Upcoming IPO</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ipo/listed-ipo">Listed IPO</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sme-ipo/current-ipo">Current SME IPO</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sme-ipo/upcoming-ipo">Upcoming SME IPO</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sme-ipo/listed-ipo">Listed SME IPO</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium focus:outline-none">
                <span>Buyback</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2">
                <DropdownMenuItem asChild>
                  <Link href="/buyback/current-buyback">Current</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/buyback/upcoming-buyback">Upcoming</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/buyback/closed-buyback">Closed</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/broker"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm xl:text-base"
            >
              Brokers
            </Link>
            {/* Login/Register Button */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <div className="cursor-pointer text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  Orders/Bids
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 gap-0 overflow-visible">
                <VisuallyHidden>
                  <DialogTitle>Login required</DialogTitle>
                </VisuallyHidden>
                <LoginContent />
              </DialogContent>
            </Dialog>
            <Link
              href="/ipo-allotment-status"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm xl:text-base"
            >
              Allotment
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm xl:text-base"
            >
              Blog
            </Link>
            <Link
              href="/support"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm xl:text-base"
            >
              Support
            </Link>
            {/* Login/Register Button */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button className="cursor-pointer bg-[#9333ea] hover:bg-[#7e22ce] text-white font-semibold py-1.5 px-4 xl:py-2 xl:px-6 rounded-lg transition-colors text-xs xl:text-sm">
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

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-3">
          <input
            type="text"
            placeholder="Search IPO..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-900 placeholder-black focus:outline-none focus:border-gray-300 transition-colors text-sm"
          />
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-gray-200 mt-2">
            <Link
              href="/"
              className="block text-gray-700 hover:text-purple-600 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <div className="space-y-2 pl-4">
              <Link
                href="/ipo/current-ipo"
                className="block text-gray-600 hover:text-purple-600 py-1 text-sm"
              >
                Current IPO
              </Link>
              <Link
                href="/ipo/upcoming-ipo"
                className="block text-gray-600 hover:text-purple-600 py-1 text-sm"
              >
                Upcoming IPO
              </Link>
              <Link
                href="/ipo/listed-ipo"
                className="block text-gray-600 hover:text-purple-600 py-1 text-sm"
              >
                Listed IPO
              </Link>
            </div>
            <div className="space-y-2 pl-4">
              <Link
                href="/buyback/current-buyback"
                className="block text-gray-600 hover:text-purple-600 py-1 text-sm"
              >
                Current Buyback
              </Link>
              <Link
                href="/buyback/upcoming-buyback"
                className="block text-gray-600 hover:text-purple-600 py-1 text-sm"
              >
                Upcoming Buyback
              </Link>
              <Link
                href="/buyback/closed-buyback"
                className="block text-gray-600 hover:text-purple-600 py-1 text-sm"
              >
                Closed Buyback
              </Link>
            </div>
            <Link
              href="/broker"
              className="block text-gray-700 hover:text-purple-600 py-2 text-sm font-medium"
            >
              Brokers
            </Link>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <div className="cursor-pointer text-gray-700 hover:text-purple-600 py-2 text-sm font-medium">
                  Orders/Bids
                </div>
              </DialogTrigger>
            </Dialog>
            <Link
              href="/ipo-allotment-status"
              className="block text-gray-700 hover:text-purple-600 py-2 text-sm font-medium"
            >
              Allotment
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-purple-600 py-2 text-sm font-medium"
            >
              Blog
            </Link>
            <Link
              href="/support"
              className="block text-gray-700 hover:text-purple-600 py-2 text-sm font-medium"
            >
              Support
            </Link>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg text-center text-sm font-semibold hover:bg-purple-700 transition-colors">
                  Login/Register
                </button>
              </DialogTrigger>
            </Dialog>
          </div>
        )}
      </nav>
    </header>
  );
}
