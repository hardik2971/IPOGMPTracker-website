export default function AdSection({ brokerName = "Zerodha", tagline = "Free equity & mutual fund investments" }: { brokerName?: string; tagline?: string }) {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{brokerName}</h3>
            <p className="text-xl text-gray-600 mb-6">{tagline}</p>
          </div>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-bold text-lg whitespace-nowrap">
            SIGN UP
          </button>
        </div>
      </div>
    </section>
  );
}
