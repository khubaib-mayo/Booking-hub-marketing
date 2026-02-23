import { Search, Filter, Download, Plus, ChevronDown } from "lucide-react";

export function BookingsMockup() {
  return (
    <div className="bg-white text-left">
      <div className="px-4 sm:px-5 py-4 border-b border-zinc-100">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-zinc-800">Bookings</p>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-brand-500 text-white text-[11px] font-medium">
              <Plus className="w-3 h-3" /> New Booking
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-400">
            <Search className="w-3 h-3" />
            <span>Search by name, trip, or reference...</span>
          </div>
          <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-zinc-200 text-[11px] text-zinc-500">
            <Filter className="w-3 h-3" /> Filters
          </button>
          <button className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-zinc-200 text-[11px] text-zinc-500">
            <Download className="w-3 h-3" /> Export
          </button>
        </div>
        <div className="flex items-center gap-2 mt-3 text-[11px]">
          <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-600 font-medium">All (156)</span>
          <span className="px-2.5 py-1 rounded-md text-zinc-400 hover:bg-zinc-50">Upcoming (23)</span>
          <span className="px-2.5 py-1 rounded-md text-zinc-400 hover:bg-zinc-50">Completed (128)</span>
          <span className="px-2.5 py-1 rounded-md text-zinc-400 hover:bg-zinc-50">Cancelled (5)</span>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="grid grid-cols-[auto_1.2fr_1fr_auto_auto_auto_auto_auto] gap-3 px-5 py-2.5 text-[10px] font-medium text-zinc-400 uppercase tracking-wide border-b border-zinc-50 bg-zinc-50/50">
          <span className="w-5"><input type="checkbox" className="w-3 h-3 rounded accent-brand-500" readOnly /></span>
          <span>Customer</span>
          <span>Trip</span>
          <span>Date</span>
          <span>Guests</span>
          <span>Amount</span>
          <span>Deposit</span>
          <span>Status</span>
        </div>
        {[
          { name: "Sarah Johnson", email: "sarah@email.com", initials: "SJ", trip: "Whale Watching Expedition", date: "Dec 15, 2024", guests: "4", amount: "$240", deposit: "$120", status: "Upcoming", statusColor: "bg-amber-50 text-amber-600" },
          { name: "Carlos Rivera", email: "carlos@email.com", initials: "CR", trip: "Sunset Sailing Cruise", date: "Dec 12, 2024", guests: "2", amount: "$180", deposit: "$180", status: "Completed", statusColor: "bg-emerald-50 text-emerald-600" },
          { name: "Anna Mueller", email: "anna@email.com", initials: "AM", trip: "Deep Sea Diving Tour", date: "Dec 18, 2024", guests: "6", amount: "$320", deposit: "$160", status: "Upcoming", statusColor: "bg-amber-50 text-amber-600" },
          { name: "David Okafor", email: "david@email.com", initials: "DO", trip: "Island Hopping Day Trip", date: "Dec 20, 2024", guests: "3", amount: "$195", deposit: "$100", status: "Upcoming", statusColor: "bg-amber-50 text-amber-600" },
          { name: "Lisa Park", email: "lisa@email.com", initials: "LP", trip: "Coral Reef Snorkeling", date: "Dec 8, 2024", guests: "2", amount: "$150", deposit: "$150", status: "Completed", statusColor: "bg-emerald-50 text-emerald-600" },
          { name: "Marco Rossi", email: "marco@email.com", initials: "MR", trip: "Fishing Charter Premium", date: "Dec 5, 2024", guests: "5", amount: "$450", deposit: "$450", status: "Completed", statusColor: "bg-emerald-50 text-emerald-600" },
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-[auto_1.2fr_1fr_auto_auto_auto_auto_auto] gap-3 px-5 py-2.5 items-center border-b border-zinc-50 last:border-0 hover:bg-zinc-50/50 transition-colors">
            <span className="w-5"><input type="checkbox" className="w-3 h-3 rounded accent-brand-500" readOnly /></span>
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0">
                <span className="text-[9px] font-bold text-zinc-500">{row.initials}</span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-700 truncate">{row.name}</p>
                <p className="text-[10px] text-zinc-400 truncate">{row.email}</p>
              </div>
            </div>
            <span className="text-xs text-zinc-600 truncate">{row.trip}</span>
            <span className="text-[11px] text-zinc-500 whitespace-nowrap">{row.date}</span>
            <span className="text-xs text-zinc-500 text-center">{row.guests}</span>
            <span className="text-xs font-semibold text-zinc-700">{row.amount}</span>
            <span className="text-xs text-zinc-500">{row.deposit}</span>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${row.statusColor}`}>
              {row.status}
            </span>
          </div>
        ))}
      </div>

      <div className="sm:hidden space-y-1 p-3">
        {[
          { name: "Sarah Johnson", trip: "Whale Watching", amount: "$240", status: "Upcoming" },
          { name: "Carlos Rivera", trip: "Sunset Cruise", amount: "$180", status: "Completed" },
          { name: "Anna Mueller", trip: "Diving Tour", amount: "$320", status: "Upcoming" },
          { name: "David Okafor", trip: "Island Hopping", amount: "$195", status: "Upcoming" },
        ].map((row, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-zinc-100">
            <div>
              <p className="text-xs font-medium text-zinc-700">{row.name}</p>
              <p className="text-[10px] text-zinc-400">{row.trip}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-zinc-700">{row.amount}</p>
              <span className={`text-[10px] font-medium ${row.status === "Upcoming" ? "text-amber-500" : "text-emerald-500"}`}>
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 py-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400">
        <span>Showing 1-6 of 156 bookings</span>
        <div className="flex items-center gap-1">
          <span className="px-2 py-1 rounded bg-brand-50 text-brand-600 font-medium">1</span>
          <span className="px-2 py-1 rounded hover:bg-zinc-50">2</span>
          <span className="px-2 py-1 rounded hover:bg-zinc-50">3</span>
          <span className="px-2 py-1">...</span>
          <span className="px-2 py-1 rounded hover:bg-zinc-50">26</span>
        </div>
      </div>
    </div>
  );
}
