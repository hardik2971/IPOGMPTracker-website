import Image from "next/image";

export default function AppDownload() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-[#f2f4ff]">
      <div className="container mx-auto">
       <div className="w-full h-full">
        <Image src="/IPO_Ji_Feature.webp" alt="App Download" width={1000} height={1000} className="w-full h-auto object-cover rounded-lg" />
       </div>
      </div>
    </section>
  );
}
