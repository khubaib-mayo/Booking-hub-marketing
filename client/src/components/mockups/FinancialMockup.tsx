import { DollarSign, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, AlertTriangle, BarChart3 } from "lucide-react";

export function FinancialMockup() {
  return (
    <div className="bg-white text-left">
      <div className="px-4 sm:px-5 py-4 border-b border-zinc-100">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-zinc-800">Financial Analytics</p>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-600 font-medium">This month</span>
            <span className="px-2.5 py-1 rounded-md text-zinc-400">Quarter</span>
            <span className="px-2.5 py-1 rounded-md text-zinc-400">Year</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Revenue", value: "$12,450", change: "+12.5%", up: true, icon: DollarSign },
            { label: "Cash Flow", value: "$8,320", change: "+8.2%", up: true, icon: TrendingUp },
            { label: "Overdue", value: "$1,240", change: "3 invoices", up: false, icon: AlertTriangle },
          ].map((card) => (
            <div key={card.label} className="rounded-xl border border-zinc-100 p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-zinc-400">{card.label}</span>
                <card.icon className={`w-3.5 h-3.5 ${card.up ? "text-emerald-400" : "text-amber-400"}`} />
              </div>
              <p className="text-lg font-bold text-zinc-900 tabular-nums">{card.value}</p>
              <div className="flex items-center gap-1 mt-1">
                {card.up ? (
                  <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 text-amber-500" />
                )}
                <span className={`text-[10px] font-medium ${card.up ? "text-emerald-500" : "text-amber-500"}`}>
                  {card.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="rounded-xl border border-zinc-100 p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-zinc-700">Revenue Trend</p>
            <div className="flex items-center gap-3 text-[10px]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-400"></span> Income</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-300"></span> Expenses</span>
            </div>
          </div>
          <div className="relative h-28 sm:h-36">
            <svg className="w-full h-full" viewBox="0 0 400 140" preserveAspectRatio="none">
              <defs>
                <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,120 L33,100 L66,110 L100,85 L133,90 L166,70 L200,75 L233,55 L266,60 L300,40 L333,35 L366,20 L400,25 L400,140 L0,140Z" fill="url(#incomeGrad)" />
              <path d="M0,120 L33,100 L66,110 L100,85 L133,90 L166,70 L200,75 L233,55 L266,60 L300,40 L333,35 L366,20 L400,25" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinejoin="round" />
              <path d="M0,130 L33,125 L66,128 L100,120 L133,122 L166,115 L200,118 L233,110 L266,112 L300,108 L333,105 L366,100 L400,102" fill="none" stroke="#FCA5A5" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="4 3" />
            </svg>
          </div>
          <div className="flex justify-between mt-1 text-[9px] text-zinc-300">
            {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-zinc-100 p-4">
            <p className="text-xs font-semibold text-zinc-700 mb-3">Payment Status</p>
            <div className="space-y-2.5">
              {[
                { label: "Received", value: "$8,450", pct: 68, color: "bg-emerald-400" },
                { label: "Pending", value: "$2,760", pct: 22, color: "bg-amber-400" },
                { label: "Overdue", value: "$1,240", pct: 10, color: "bg-red-400" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-zinc-500">{item.label}</span>
                    <span className="font-medium text-zinc-700 tabular-nums">{item.value}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-100 p-4">
            <p className="text-xs font-semibold text-zinc-700 mb-3">Top Tours by Revenue</p>
            <div className="space-y-2.5">
              {[
                { tour: "Whale Watching", revenue: "$3,240", pct: 85 },
                { tour: "Sunset Cruise", revenue: "$2,880", pct: 72 },
                { tour: "Diving Tour", revenue: "$2,160", pct: 55 },
                { tour: "Island Hopping", revenue: "$1,920", pct: 48 },
              ].map((item) => (
                <div key={item.tour}>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-zinc-500">{item.tour}</span>
                    <span className="font-medium text-zinc-700 tabular-nums">{item.revenue}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                    <div className="h-full rounded-full bg-brand-400" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
