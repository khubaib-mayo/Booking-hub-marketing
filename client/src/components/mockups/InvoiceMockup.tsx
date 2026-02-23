import { FileText, Download, Mail, Printer } from "lucide-react";

export function InvoiceMockup() {
  return (
    <div className="bg-white text-left">
      <div className="px-4 sm:px-5 py-3 border-b border-zinc-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-zinc-400" />
          <span className="text-sm font-semibold text-zinc-800">Invoice Preview</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="p-1.5 rounded-md hover:bg-zinc-50">
            <Download className="w-3.5 h-3.5 text-zinc-400" />
          </button>
          <button className="p-1.5 rounded-md hover:bg-zinc-50">
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
          </button>
          <button className="p-1.5 rounded-md hover:bg-zinc-50">
            <Printer className="w-3.5 h-3.5 text-zinc-400" />
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-8 max-w-lg mx-auto">
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-md bg-brand-500 flex items-center justify-center">
                <span className="text-[9px] font-bold text-white">BH</span>
              </div>
              <span className="text-sm font-bold text-zinc-800">BookingHub</span>
            </div>
            <p className="text-[10px] text-zinc-400 leading-relaxed">
              Ocean Adventures Ltd.<br />
              123 Marina Drive<br />
              Lisbon, Portugal 1200-109
            </p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-zinc-800 tracking-tight">INVOICE</p>
            <p className="text-[11px] text-zinc-400 mt-1">#INV-2024-0089</p>
            <div className="mt-2 text-[10px] text-zinc-400">
              <p>Date: Dec 15, 2024</p>
              <p>Due: Jan 15, 2025</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-100 p-4 mb-6 bg-zinc-50/50">
          <p className="text-[10px] text-zinc-400 uppercase tracking-wide mb-1">Bill To</p>
          <p className="text-xs font-semibold text-zinc-800">Sarah Johnson</p>
          <p className="text-[10px] text-zinc-400 leading-relaxed">
            456 Beach Road<br />
            Sydney, Australia 2000<br />
            sarah.johnson@email.com
          </p>
        </div>

        <div className="rounded-lg border border-zinc-100 overflow-hidden mb-6">
          <div className="grid grid-cols-[2fr_auto_auto_auto] gap-2 px-4 py-2 text-[10px] font-medium text-zinc-400 uppercase tracking-wide bg-zinc-50/80 border-b border-zinc-100">
            <span>Description</span>
            <span className="text-right">Qty</span>
            <span className="text-right">Rate</span>
            <span className="text-right">Amount</span>
          </div>
          {[
            { desc: "Whale Watching Expedition", detail: "Full day tour - Premium package", qty: "4", rate: "$60.00", amount: "$240.00" },
            { desc: "Snorkeling Equipment Rental", detail: "Mask, fins, wetsuit", qty: "4", rate: "$15.00", amount: "$60.00" },
            { desc: "Underwater Photography", detail: "Professional photo package", qty: "1", rate: "$45.00", amount: "$45.00" },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-[2fr_auto_auto_auto] gap-2 px-4 py-2.5 items-center border-b border-zinc-50 last:border-0">
              <div>
                <p className="text-xs font-medium text-zinc-700">{item.desc}</p>
                <p className="text-[10px] text-zinc-400">{item.detail}</p>
              </div>
              <span className="text-xs text-zinc-500 text-right tabular-nums">{item.qty}</span>
              <span className="text-xs text-zinc-500 text-right tabular-nums">{item.rate}</span>
              <span className="text-xs font-medium text-zinc-700 text-right tabular-nums">{item.amount}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-end mb-8">
          <div className="w-48">
            <div className="flex justify-between py-1.5 text-xs">
              <span className="text-zinc-400">Subtotal</span>
              <span className="text-zinc-700 font-medium tabular-nums">$345.00</span>
            </div>
            <div className="flex justify-between py-1.5 text-xs">
              <span className="text-zinc-400">Tax (10%)</span>
              <span className="text-zinc-700 font-medium tabular-nums">$34.50</span>
            </div>
            <div className="flex justify-between py-1.5 text-xs">
              <span className="text-zinc-400">Deposit Paid</span>
              <span className="text-emerald-500 font-medium tabular-nums">-$120.00</span>
            </div>
            <div className="border-t border-zinc-200 mt-1 pt-2 flex justify-between text-sm">
              <span className="font-semibold text-zinc-800">Total Due</span>
              <span className="font-bold text-zinc-900 tabular-nums">$259.50</span>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-4">
          <p className="text-[10px] text-zinc-400 leading-relaxed">
            Payment due within 30 days. Please include invoice number with your payment.
            Thank you for choosing Ocean Adventures!
          </p>
        </div>
      </div>
    </div>
  );
}
