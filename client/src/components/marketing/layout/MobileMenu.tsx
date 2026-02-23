import { useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/constants";
import { MarketingButton } from "@/components/marketing/ui/MarketingButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            data-testid="mobile-menu-backdrop"
          />

          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            data-testid="mobile-menu-panel"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
                <span className="font-display text-lg font-bold text-zinc-900">
                  {siteConfig.name}
                </span>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-50 transition-colors"
                  onClick={onClose}
                  aria-label="Close menu"
                  data-testid="button-close-menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 px-6 py-6 space-y-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center px-4 py-3 text-base font-medium text-zinc-700 rounded-xl hover:bg-zinc-50 transition-colors"
                      data-testid={`link-mobile-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="px-6 py-6 border-t border-zinc-100 space-y-3">
                <MarketingButton
                  variant="primary"
                  size="lg"
                  href={siteConfig.signupUrl}
                  className="w-full justify-center"
                >
                  Start Free Trial
                </MarketingButton>
                <MarketingButton
                  variant="secondary"
                  size="lg"
                  href={siteConfig.loginUrl}
                  className="w-full justify-center"
                >
                  Log in
                </MarketingButton>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
