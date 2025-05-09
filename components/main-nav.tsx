"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems: { name: string; href: string }[] = [
  // { name: "Home", href: "/" },
  // { name: "Speakers", href: "/speakers" },
  // { name: "Extended Events", href: "/events" },
  // { name: "Schedule", href: "/schedule" },
  // { name: "Team", href: "/team" },
];

export function MainNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between rounded-full bg-white dark:bg-black shadow-md mt-4 max-w-5xl">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2 w-full">
        <Image
          src="/gdgck-logo.webp"
          alt="Google Cloud"
          width={180}
          height={40}
          className="h-8 w-auto dark:brightness-0 dark:invert"
          priority
        />
      </Link>

      {/* Desktop Navigation - Centered */}
      {/* <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "text-base font-medium transition-colors px-6 py-2",
              pathname === item.href
                ? "text-foreground border-b-2 border-blue-500"
                : "text-muted-foreground hover:text-foreground"
            )}
            style={pathname === item.href ? { borderRadius: 0 } : {}}
          >
            {item.name}
          </Link>
        ))}
      </div> */}

      {/* Login Button & Theme Toggle */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        {/* <Button className="rounded-full px-6 py-2 bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-base font-semibold shadow-md">
          Login Now
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm1 5h-2v6h6v-2h-4V7Z"
              />
            </svg>
          </span>
        </Button> */}

        {/* Mobile menu button */}
        {/* <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button> */}
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] z-50 bg-white dark:bg-black p-6 flex flex-col space-y-6 animate-in slide-in-from-top rounded-b-3xl shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground border-b-2 border-blue-500"
                  : "text-muted-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 w-full mt-4">
            <ThemeToggle />
            <Button className="rounded-full w-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 text-base font-semibold shadow-md">
              Login Now
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm1 5h-2v6h6v-2h-4V7Z"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
