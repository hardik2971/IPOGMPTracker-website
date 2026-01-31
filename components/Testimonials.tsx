export default function Testimonials() {
  return (
    <section className="py-8 sm:py-10 md:py-12 pt-0 px-4 bg-[#f2f4ff]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <div className="lg:col-span-9 mx-auto lg:mx-0 max-w-4xl lg:max-w-none">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md p-4 sm:p-5 md:p-6 relative">
              {/* Orange Quote Icon */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-orange-500 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-sm md:text-lg text-blue-900 leading-relaxed text-center mb-6">
                "When I was new to the world of IPOs, IPO.in helped me understand everything about IPOs from the basics to how they actually operate. It's a fantastic platform and I would highly recommend it to all IPO investors. 💯💯💯"
              </blockquote>

              {/* Star Rating - 4 Orange Stars */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-orange-500 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Author Information */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>

              </div>
            </div>
            <div className="text-center pt-5">
              <div className="text-blue-900 font-bold text-base">Vaishvik Trivedi</div>
              <div className="text-gray-500 text-sm">App User</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
