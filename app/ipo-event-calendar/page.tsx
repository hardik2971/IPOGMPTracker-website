import Header from "@/components/Header";
import Footer from "@/components/Footer";

type StatusType = "OPEN" | "CLOSE" | "ALLOTMENT";

interface CalendarEvent {
  company: string;
  board: string;
  status: StatusType;
}

interface CalendarDay {
  dateLabel: string;
  events: CalendarEvent[];
}

const mockCalendar: CalendarDay[] = [
  {
    dateLabel: "Fri, 16 Jan 2026",
    events: [
      { company: "Aritas Vinyl", board: "BSE SME", status: "OPEN" },
      { company: "Amagi Media Labs", board: "MAINBOARD", status: "CLOSE" },
      { company: "GRE Renew Enertech", board: "BSE SME", status: "CLOSE" },
      { company: "INDO SMC", board: "BSE SME", status: "CLOSE" },
      {
        company: "Narmadesh Brass Industries",
        board: "BSE SME",
        status: "CLOSE",
      },
      {
        company: "Avana Electrosystems",
        board: "NSE SME",
        status: "ALLOTMENT",
      },
    ],
  },
  {
    dateLabel: "Mon, 19 Jan 2026",
    events: [
      { company: "KRM Ayurveda", board: "NSE SME", status: "OPEN" },
      { company: "Armour Security India", board: "NSE SME", status: "CLOSE" },
      { company: "Amagi Media Labs", board: "MAINBOARD", status: "ALLOTMENT" },
    ],
  },
];

const statusStyles: Record<StatusType, string> = {
  OPEN: "bg-[#E3F2FD] text-[#0D47A1]",
  CLOSE: "bg-[#FFEBEE] text-[#C62828]",
  ALLOTMENT: "bg-[#E8F5E9] text-[#2E7D32]",
};

const statusDotStyles: Record<StatusType, string> = {
  OPEN: "bg-[#0D47A1]",
  CLOSE: "bg-[#C62828]",
  ALLOTMENT: "bg-[#2E7D32]",
};

export default function IPOEventCalendar() {
  return (
    <div className="min-h-screen bg-[#f6f7ff]">
      <Header />

      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 max-w-3xl">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            IPO Event Calendar
          </h1>
          <button
            type="button"
            className="p-2 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Refresh calendar"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v6h6M20 20v-6h-6M5 19a9 9 0 0014-7 9 9 0 00-9-9 9 9 0 00-6.7 2.9"
              />
            </svg>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
          Track IPO opening, closing, and allotment dates across mainboard and
          SME issues.
        </p>

        <div className="space-y-4 sm:space-y-5">
          {mockCalendar.map((day) => (
            <section
              key={day.dateLabel}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Date header */}
              <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#f5f7ff] px-3 sm:px-4 md:px-5 py-3 sm:py-3.5">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm text-[#1e3a8a] flex-shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-900">
                    {day.dateLabel}
                  </span>
                </div>

                <button
                  type="button"
                  className="self-start sm:self-auto inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 border border-[#7c3aed] text-[#7c3aed] rounded-lg text-xs sm:text-sm font-medium bg-white hover:bg-[#f3e8ff] transition-colors"
                >
                  Add Reminder
                </button>
              </header>

              {/* Event list */}
              <div className="divide-y divide-gray-100">
                {day.events.map((event) => (
                  <div
                    key={`${day.dateLabel}-${event.company}-${event.status}`}
                    className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3"
                  >
                    <p className="text-sm sm:text-base text-gray-900 font-medium">
                      {event.company}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e3f2fd] text-[#1565c0] text-[11px] sm:text-xs font-semibold uppercase tracking-wide">
                        {event.board}
                      </span>

                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wide ${statusStyles[event.status]}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${statusDotStyles[event.status]}`}
                        />
                        {event.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
