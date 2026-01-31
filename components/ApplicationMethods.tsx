import Image from "next/image";
import { Smartphone, Building2 } from "lucide-react";

export default function ApplicationMethods() {
  const methods = [
    {
      icon: Smartphone,
      title: "UPI Application",
      description: "Apply for IPOs using UPI for a seamless and quick application process. Just approve the mandate on your UPI app.",
      highlightedText: "Apply for IPOs using UPI",
    },
    {
      icon: Building2,
      title: "ASBA Application",
      description: "Apply through the traditional ASBA IPO Application (Application Supported by Blocked Amount) method via your bank account.",
      highlightedText: "ASBA IPO Application",
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 bg-[#f2f4ff]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 md:gap-12">
          {/* Left Panel - Text Content */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Easy Application Methods</h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg font-medium">
              We provide multiple ways to apply for IPOs, making the process simple and accessible for all investors.
            </p>
            
            <div className="flex flex-col gap-6">
              {methods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-50 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                        <p className="text-gray-600">
                          {method.description.split(method.highlightedText).map((part, i, arr) => 
                            i === arr.length - 1 ? (
                              <span key={i}>{part}</span>
                            ) : (
                              <span key={i}>
                                {part}
                                <span className="text-blue-500">{method.highlightedText}</span>
                              </span>
                            )
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Panel - Visual Illustrations */}
          <div className="flex-1 flex justify-center w-full lg:w-auto">
            <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm w-full">
              <Image 
                src="/easy_app.png" 
                alt="Application Methods" 
                width={400} 
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
