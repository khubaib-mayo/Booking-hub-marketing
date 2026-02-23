import { Users, DollarSign, TrendingUp, Clock, Search, Filter } from "lucide-react";

export function CommissionsMockup() {
  return (
    <div className="bg-white text-left">
      <div className="px-4 sm:px-5 py-4 border-b border-zinc-100">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-zinc-800">Commission Tracker</p>
          <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-brand-500 text-white text-[11px] font-medium">
            <DollarSign className="w-3 h-3" /> Bulk Payout
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {[
            { label: "Total Earned", value: "$3,840", sub: "This month", icon: DollarSign, color: "text-emerald-500", bg: "bg-emerald-50" },
            { label: "Pending", value: "$890", sub: "12 agents", icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
            { label: "Paid Out", value: "$2,950", sub: "This month", icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-50" },
            { label: "Agents", value: "8", sub: "Active", icon: Users, color: "text-purple-500", bg: "bg-purple-50" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-zinc-100 p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <div className={`w-6 h-6 rounded-md ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`w-3 h-3 ${stat.color}`} />
                </div>
                <span className="text-[10px] text-zinc-400">{stat.label}</span>
              </div>
              <p className="text-base font-bold text-zinc-900">{stat.value}</p>
              <p className="text-[10px] text-zinc-400">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="grid grid-cols-[1.2fr_1fr_auto_auto_auto_auto] gap-3 px-5 py-2.5 text-[10px] font-medium text-zinc-400 uppercase tracking-wide border-b border-zinc-50 bg-zinc-50/50">
          <span>Agent</span>
          <span>Booking</span>
          <span>Rate</span>
          <span>Amount</span>
          <span>Status</span>
          <span>Action</span>
        </div>
        {[
          { agent: "Maria Santos", role: "Senior Agent", initials: "MS", booking: "Whale Watching - Johnson", rate: "12%", amount: "$28.80", status: "Pending", statusColor: "bg-amber-50 text-amber-600" },
          { agent: "Pedro Lima", role: "Agent", initials: "PL", booking: "Sunset Cruise - Rivera", rate: "10%", amount: "$18.00", status: "Paid", statusColor: "bg-emerald-50 text-emerald-600" },
          { agent: "Ana Costa", role: "Senior Agent", initials: "AC", booking: "Diving Tour - Mueller", rate: "12%", amount: "$38.40", status: "Pending", statusColor: "bg-amber-50 text-amber-600" },
          { agent: "Maria Santos", role: "Senior Agent", initials: "MS", booking: "Reef Snorkeling - Park", rate: "12%", amount: "$18.00", status: "Paid", statusColor: "bg-emerald-50 text-emerald-600" },
          { agent: "João Silva", role: "Junior Agent", initials: "JS", booking: "Island Hopping - Okafor", rate: "8%", amount: "$15.60", status: "Pending", statusColor: "bg-amber-50 text-amber-600" },
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-[1.2fr_1fr_auto_auto_auto_auto] gap-3 px-5 py-2.5 items-center border-b border-zinc-50 last:border-0 hover:bg-zinc-50/50 transition-colors">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                <span className="text-[9px] font-bold text-brand-600">{row.initials}</span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-700 truncate">{row.agent}</p>
                <p className="text-[10px] text-zinc-400">{row.role}</p>
              </div>
            </div>
            <span className="text-xs text-zinc-500 truncate">{row.booking}</span>
            <span className="text-xs text-zinc-500 tabular-nums">{row.rate}</span>
            <span className="text-xs font-semibold text-zinc-700 tabular-nums">{row.amount}</span>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${row.statusColor}`}>
              {row.status}
            </span>
            <span>
              {row.status === "Pending" ? (
                <button className="text-[10px] font-medium text-brand-500 hover:text-brand-600">Mark Paid</button>
              ) : (
                <span className="text-[10px] text-zinc-300">-</span>
              )}
            </span>
          </div>
        ))}
      </div>

      <div className="sm:hidden space-y-1 p-3">
        {[
          { agent: "Maria Santos", booking: "Whale Watching", amount: "$28.80", status: "Pending" },
          { agent: "Pedro Lima", booking: "Sunset Cruise", amount: "$18.00", status: "Paid" },
          { agent: "Ana Costa", booking: "Diving Tour", amount: "$38.40", status: "Pending" },
        ].map((row, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-zinc-100">
            <div>
              <p className="text-xs font-medium text-zinc-700">{row.agent}</p>
              <p className="text-[10px] text-zinc-400">{row.booking}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-zinc-700">{row.amount}</p>
              <span className={`text-[10px] font-medium ${row.status === "Pending" ? "text-amber-500" : "text-emerald-500"}`}>
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
