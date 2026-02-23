import { DollarSign, Calendar, Users, Clock, TrendingUp, Search, Bell } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="bg-white min-h-[300px] sm:min-h-[450px] text-left">
      <div className="flex items-center justify-between border-b border-zinc-100 px-4 sm:px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center">
            <Calendar className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-zinc-800 hidden sm:inline">Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-400">
            <Search className="w-3 h-3" />
            <span>Search bookings...</span>
          </div>
          <div className="w-7 h-7 rounded-lg bg-zinc-50 flex items-center justify-center">
            <Bell className="w-3.5 h-3.5 text-zinc-400" />
          </div>
          <div className="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center">
            <span className="text-[10px] font-bold text-brand-600">JD</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-base font-semibold text-zinc-800">Welcome back, James</p>
            <p className="text-[11px] text-zinc-400 mt-0.5">Here's what's happening today</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px]">
            <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-600 font-medium">This month</span>
            <span className="px-2.5 py-1 rounded-md text-zinc-400">Last month</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          {[
            { label: "Total Revenue", value: "$12,450", change: "+12%", icon: DollarSign, color: "text-emerald-500" },
            { label: "Bookings", value: "156", change: "+8%", icon: Calendar, color: "text-blue-500" },
            { label: "Commissions", value: "$890", change: "+5%", icon: Users, color: "text-purple-500" },
            { label: "Upcoming", value: "23", change: "Next 7d", icon: Clock, color: "text-brand-500" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-zinc-100 p-3 hover:border-zinc-200 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="w-7 h-7 rounded-lg bg-zinc-50 flex items-center justify-center">
                  <stat.icon className={`w-3.5 h-3.5 ${stat.color}`} />
                </div>
                <span className="text-[10px] font-medium text-emerald-500 flex items-center gap-0.5">
                  <TrendingUp className="w-2.5 h-2.5" />
                  {stat.change}
                </span>
              </div>
              <p className="text-lg font-bold text-zinc-900">{stat.value}</p>
              <p className="text-[10px] text-zinc-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-zinc-100 p-4 mb-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-zinc-700">Monthly Revenue</p>
            <div className="flex items-center gap-3 text-[10px]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-400"></span> Revenue</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-200"></span> Bookings</span>
            </div>
          </div>
          <div className="h-28 sm:h-40 flex items-end gap-[4px] sm:gap-[6px]">
            {[
              { rev: 25, book: 18 }, { rev: 38, book: 28 }, { rev: 32, book: 22 },
              { rev: 45, book: 35 }, { rev: 42, book: 30 }, { rev: 55, book: 40 },
              { rev: 48, book: 35 }, { rev: 60, book: 45 }, { rev: 52, book: 38 },
              { rev: 70, book: 55 }, { rev: 65, book: 48 }, { rev: 82, book: 62 },
            ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-[2px]">
                <div className="w-full bg-brand-400 rounded-t" style={{ height: `${d.rev}%` }} />
                <div className="w-full bg-brand-200/60 rounded-t" style={{ height: `${d.book}%` }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[9px] text-zinc-300">
            {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-zinc-100 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-50/80">
            <p className="text-xs font-semibold text-zinc-700">Recent Bookings</p>
            <span className="text-[10px] text-brand-500 font-medium">View all</span>
          </div>
          <div className="hidden sm:block">
            <div className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 px-4 py-2 text-[10px] font-medium text-zinc-400 uppercase tracking-wide border-b border-zinc-50">
              <span>Customer</span>
              <span>Trip</span>
              <span>Date</span>
              <span>Amount</span>
              <span>Status</span>
            </div>
            {[
              { name: "Sarah Johnson", initials: "SJ", trip: "Whale Watching", date: "Dec 15", amount: "$240", status: "Upcoming", statusColor: "bg-amber-50 text-amber-600" },
              { name: "Carlos Rivera", initials: "CR", trip: "Sunset Cruise", date: "Dec 12", amount: "$180", status: "Completed", statusColor: "bg-emerald-50 text-emerald-600" },
              { name: "Anna Mueller", initials: "AM", trip: "Diving Tour", date: "Dec 18", amount: "$320", status: "Upcoming", statusColor: "bg-amber-50 text-amber-600" },
              { name: "Tom Nakamura", initials: "TN", trip: "Reef Snorkeling", date: "Dec 10", amount: "$150", status: "Completed", statusColor: "bg-emerald-50 text-emerald-600" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 px-4 py-2.5 items-center border-b border-zinc-50 last:border-0 hover:bg-zinc-50/50 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-[9px] font-bold text-zinc-500">{row.initials}</span>
                  </div>
                  <span className="text-xs font-medium text-zinc-700">{row.name}</span>
                </div>
                <span className="text-xs text-zinc-500">{row.trip}</span>
                <span className="text-xs text-zinc-400">{row.date}</span>
                <span className="text-xs font-semibold text-zinc-700">{row.amount}</span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${row.statusColor}`}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>
          <div className="sm:hidden space-y-1 p-2">
            {[
              { name: "Sarah Johnson", trip: "Whale Watching", amount: "$240", status: "Upcoming" },
              { name: "Carlos Rivera", trip: "Sunset Cruise", amount: "$180", status: "Completed" },
              { name: "Anna Mueller", trip: "Diving Tour", amount: "$320", status: "Upcoming" },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-zinc-50/60">
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
        </div>
      </div>
    </div>
  );
}
