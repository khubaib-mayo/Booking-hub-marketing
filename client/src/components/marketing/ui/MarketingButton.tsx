import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface MarketingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export const MarketingButton = forwardRef<HTMLButtonElement, MarketingButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 shadow-sm shadow-brand-500/20 hover:shadow-md hover:shadow-brand-500/25",
      secondary:
        "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 active:bg-zinc-100",
      ghost:
        "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 active:bg-zinc-100",
      outline:
        "border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300",
    };

    const sizes = {
      sm: "text-sm px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-2.5 gap-2",
      lg: "text-base px-8 py-3.5 gap-2",
    };

    if (href) {
      return (
        <a
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          data-testid={`link-${variant}-${size}`}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        data-testid={`button-${variant}-${size}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

MarketingButton.displayName = "MarketingButton";
