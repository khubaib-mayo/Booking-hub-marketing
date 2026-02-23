import { cn } from "@/lib/utils";

interface MockupFrameProps {
  type?: "browser" | "phone";
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export function MockupFrame({
  type = "browser",
  url = "app.bookinghub.com/dashboard",
  children,
  className,
}: MockupFrameProps) {
  if (type === "phone") {
    return (
      <div
        className={cn(
          "relative mx-auto w-[280px] rounded-[2.5rem] border-[8px] border-zinc-900 bg-zinc-900 shadow-2xl",
          className
        )}
        data-testid="mockup-phone"
      >
        <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-zinc-900" />
        <div className="relative overflow-hidden rounded-[2rem] bg-white">
          <div className="pt-8">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10",
        className
      )}
      data-testid="mockup-browser"
    >
      <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50/80 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-zinc-300" />
          <div className="h-3 w-3 rounded-full bg-zinc-300" />
          <div className="h-3 w-3 rounded-full bg-zinc-300" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-zinc-100 px-3 py-1">
          <span className="text-xs text-zinc-400 select-none">{url}</span>
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
