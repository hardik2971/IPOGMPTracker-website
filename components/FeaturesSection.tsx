import { Search, Laptop, Bell, BarChart3, Building2 } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    { 
      icon: Search, 
      title: "Track All IPOs", 
      description: "Track all ongoing IPOs, upcoming IPOs, and recently Listed IPOs in one place. Never miss upcoming IPOs like Sunshine Pictures, Hero Motors, Veritas Finance, SK Finance, Prestige Hospitality Ventures, Skyways Air Services, Milky Mist Dairy Food, Shadowfax Technologies, CMR Green Technologies, IndiaFirst Life Insurance Company, and more.",
      highlightedTerms: ["Listed IPOs"]
    },
    { 
      icon: Laptop, 
      title: "Apply Online Easily", 
      description: "Cut the clutter! Use IPO-G's integrated platform to apply for IPOs online easily. Know the expected premium, and plan your investment for maximum listing day gains.",
      highlightedTerms: []
    },
    { 
      icon: Bell, 
      title: "Stay Updated", 
      description: "Stay updated with all upcoming Mainboard IPOs and upcoming SME IPOs in India. IPO-G provide detailed insights into draft papers, tentative dates, price bands, lot sizes, and subscription status.",
      highlightedTerms: ["upcoming SME IPOs"]
    },
    { 
      icon: BarChart3, 
      title: "Mainboard IPOs", 
      description: "Track all Mainboard IPOs listed on NSE and BSE from upcoming IPOs and current IPOs to past listings. Stay updated with performance insights, subscription status, and detailed data on large-cap company offerings.",
      highlightedTerms: ["upcoming IPOs", "current IPOs"],
      buttonText: "View Mainboard IPOs",
      buttonLink: "/ipo"
    },
    { 
      icon: Building2, 
      title: "SME IPOs", 
      description: "Get detailed coverage of SME IPOs, including current SME IPOs and upcoming SME IPOs from emerging small and medium enterprises.",
      highlightedTerms: ["SME IPOs", "current SME IPOs", "upcoming SME IPOs"],
      buttonText: "View SME IPOs",
      buttonLink: "/ipo"
    },
  ];

  const renderDescription = (description: string, highlightedTerms: string[]) => {
    if (highlightedTerms.length === 0) {
      return <span>{description}</span>;
    }

    // Sort terms by length (longest first) to handle overlapping terms
    const sortedTerms = [...highlightedTerms].sort((a, b) => b.length - a.length);
    const highlights: Array<{ start: number; end: number }> = [];
    
    // Find all highlight positions, processing longest terms first
    sortedTerms.forEach((term) => {
      const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedTerm, 'gi');
      const text = description;
      let match;
      // Reset regex lastIndex for each term
      regex.lastIndex = 0;
      while ((match = regex.exec(text)) !== null) {
        const start = match.index;
        const end = start + match[0].length;
        // Only add if not already covered by a longer highlight
        const isCovered = highlights.some(
          (h) => h.start <= start && h.end >= end
        );
        if (!isCovered) {
          highlights.push({ start, end });
        }
      }
    });

    // Sort highlights by start position and merge overlapping
    highlights.sort((a, b) => a.start - b.start);
    const mergedHighlights: Array<{ start: number; end: number }> = [];
    
    highlights.forEach((highlight) => {
      // Find overlapping highlights and merge them
      const overlapping = mergedHighlights.find(
        (h) => !(highlight.end <= h.start || highlight.start >= h.end)
      );
      if (overlapping) {
        overlapping.start = Math.min(overlapping.start, highlight.start);
        overlapping.end = Math.max(overlapping.end, highlight.end);
      } else {
        mergedHighlights.push({ ...highlight });
      }
    });

    mergedHighlights.sort((a, b) => a.start - b.start);

    // Build JSX segments
    const segments: any[] = [];
    let lastIndex = 0;
    let keyCounter = 0;

    mergedHighlights.forEach((highlight) => {
      if (highlight.start > lastIndex) {
        segments.push(
          <span key={`text-${keyCounter++}`}>
            {description.substring(lastIndex, highlight.start)}
          </span>
        );
      }
      segments.push(
        <span key={`highlight-${keyCounter++}`} className="text-purple-600 font-medium">
          {description.substring(highlight.start, highlight.end)}
        </span>
      );
      lastIndex = highlight.end;
    });

    if (lastIndex < description.length) {
      segments.push(
        <span key={`text-${keyCounter++}`}>
          {description.substring(lastIndex)}
        </span>
      );
    }

    return <span>{segments.length > 0 ? segments : description}</span>;
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 bg-[#f2f4ff]">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">Everything Under One Roof</h2>
        <div className="text-gray-600 text-base sm:text-lg font-medium mb-6 sm:mb-8 text-center max-w-2xl mx-auto px-4">Looking for the latest IPOs in India? At IPO-G, you get everything under one roof—from mainboard IPOs to SME IPOs, GMP updates, live subscription data, and allotment status.</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Top row - 3 cards */}
          {features.slice(0, 3).map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm p-6 flex flex-col text-center"
              >
                <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {renderDescription(feature.description, feature.highlightedTerms || [])}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Bottom row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mt-6 sm:mt-8">
          {features.slice(3).map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index + 3} 
                className="bg-white rounded-lg shadow-sm p-6 flex flex-col text-left"
              >
                <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-left">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {renderDescription(feature.description, feature.highlightedTerms || [])}
                </p>
                {feature.buttonText && (
                  <a
                    href={feature.buttonLink || "#"}
                    className="inline-flex items-center justify-center px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
                  >
                    {feature.buttonText}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
