import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';

export default function Blog() {
  // Featured articles data - Only 3 articles as per image
  const featuredArticles = [
    {
      title: "Upcoming IPOs with Shareholders Quota in 2025",
      date: "Jan 12, 2026",
      image: "/blog/blog-feature1.jpg",
      slug: "nse-ipo-sebi-noc-approval"
    },
    {
      title: "List of Current And Upcoming Buybacks Of Shares In 2024",
      date: "Jan 8, 2026",
      image: "/blog/blog-feature2.jpg",
      slug: "amagi-media-labs-ipo-2026"
    },
    {
      title: "What is Share Buyback or Stock Repurchase?",
      date: "Jan 6, 2026",
      image: "/blog/blog-feature3.jpg",
      slug: "bharat-coking-coal-ipo-allotment"
    },
    {
      title: "Shareholder Quota in IPO",
      date: "Jan 6, 2026",
      image: "/blog/blog-feature4.jpg",
      slug: "bharat-coking-coal-ipo-allotment"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Article Section - Left (2/3 width) */}
          <div className="lg:col-span-8">
            <div className='grid grid-cols-12 gap-3'>
              <div className="col-span-8 border-r border-gray-200 pr-3">
                <div>
                  <Image src="/blog/blog-main.jpg" alt="Blog 1" width={500} height={700} className='w-full h-auto object-cover'/>
                  <div className='pt-5 flex flex-col gap-2'>
                  <div className='text-3xl font-bold text-gray-900'>Shadowfax Technologies IPO: Dates, Price Band and everything you need to know</div>
                  <div className='text-gray-800 text-sm'>Are you looking for the next big opportunity in India's booming logistics and e-commerce sector? Shadowfax Technologies Limited, the backbone</div>
                  <div className='text-gray-500 text-xs'>Jan 14, 2026</div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 flex flex-col gap-3">
                <div className='border-b border-gray-200 pb-3'>
                  <Image src="/blog/blog-main-2.jpg" alt="Blog 2" width={500} height={500} />
                  <div className='pt-3 flex flex-col gap-2'>
                  <div className='text-base font-bold text-gray-900'>NSE IPO: SEBI NOC Approval Expected by Month-End – What You Need to Know</div>
                  <div className='text-gray-500 text-xs'>Jan 12, 2026</div>
                  </div>
                </div>
                <div >
                  <Image src="/blog/blog-main-3.jpg" alt="Blog 3" width={500} height={500} />
                  <div className='pt-3 flex flex-col gap-2'>
                  <div className='text-base font-bold text-gray-900'>Amagi Media Labs IPO 2026</div>
                  <div className='text-gray-500 text-xs'>Jan 12, 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Sidebar - Right (1/3 width) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h2 className="text-xs font-normal text-gray-900 mb-3">FEATURED</h2>
              <div className="space-y-3">
                {featuredArticles.map((article, index) => (
                  <Link
                    key={index}
                    href={`/blog/${article.slug}`}
                    className="block group hover:opacity-90 transition-opacity border-b border-gray-200 pb-3"
                  >
                    <div className="flex gap-4">
                      {/* Thumbnail - Only show if image exists */}
                      {article.image && (
                        <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-3 group-hover:text-blue-600 transition-colors leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-500">{article.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
