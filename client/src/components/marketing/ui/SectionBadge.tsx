import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-500/10",
        className
      )}
      data-testid="badge-section"
    >
      {children}
    </span>
  );
}
