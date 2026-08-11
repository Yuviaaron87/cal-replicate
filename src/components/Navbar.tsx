import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Code2,
  FileText,
  Menu,
  X,
  Users,
  Workflow,
} from "lucide-react";

type MenuItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const menus: Record<string, MenuItem[]> = {
  Solutions: [
    {
      title: "Sales",
      description: "Book more meetings and close deals faster.",
      icon: CalendarDays,
    },
    {
      title: "Recruiting",
      description: "Make candidate scheduling simple.",
      icon: Users,
    },
    {
      title: "Teams",
      description: "Coordinate meetings across your team.",
      icon: Users,
    },
    {
      title: "Customer Success",
      description: "Make customer meetings effortless.",
      icon: CalendarDays,
    },
  ],

  Developer: [
    {
      title: "Documentation",
      description: "Learn how to build with Schedulify.",
      icon: FileText,
    },
    {
      title: "API",
      description: "Build powerful scheduling integrations.",
      icon: Code2,
    },
    {
      title: "Components",
      description: "Add scheduling components to your app.",
      icon: Code2,
    },
    {
      title: "Webhooks",
      description: "Connect scheduling events to your system.",
      icon: Workflow,
    },
  ],

  Resources: [
    {
      title: "Blog",
      description: "Latest news, ideas and updates.",
      icon: FileText,
    },
    {
      title: "Help Center",
      description: "Find answers and useful guides.",
      icon: FileText,
    },
    {
      title: "Embed",
      description: "Add scheduling directly to your website.",
      icon: Code2,
    },
    {
      title: "App Store",
      description: "Connect your favorite applications.",
      icon: CalendarDays,
    },
    {
      title: "Workflows",
      description: "Automate your scheduling process.",
      icon: Workflow,
    },
    {
      title: "Integrations",
      description: "Connect your tools and calendars.",
      icon: Code2,
    },
  ],
};

const navLinks = [
  { label: "Enterprise", href: "#enterprise" },
  { label: "Schedulify AI", href: "#ai" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-[1140px]">
        <div className="rounded-2xl border border-neutral-200 bg-white/95 px-4 shadow-sm backdrop-blur-xl sm:px-6">

          {/* Main Navbar */}
          <div className="flex h-14 items-center justify-between">

            {/* Logo */}
            <a
              href="/"
              className="text-[22px] font-bold tracking-[-0.04em] text-neutral-950"
            >
              Cal.com
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-6 lg:flex">

              {/* Solutions */}
              <button
                onClick={() => toggleMenu("Solutions")}
                className="flex items-center gap-1 text-sm text-neutral-700 transition hover:text-black"
              >
                Solutions
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu === "Solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Normal Links */}
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-neutral-700 transition hover:text-black"
                >
                  {link.label}
                </a>
              ))}

              {/* Developer */}
              <button
                onClick={() => toggleMenu("Developer")}
                className="flex items-center gap-1 text-sm text-neutral-700 transition hover:text-black"
              >
                Developer
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu === "Developer" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Resources */}
              <button
                onClick={() => toggleMenu("Resources")}
                className="flex items-center gap-1 text-sm text-neutral-700 transition hover:text-black"
              >
                Resources
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu === "Resources" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <a
                href="#pricing"
                className="text-sm text-neutral-700 transition hover:text-black"
              >
                Pricing
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-2 lg:flex">
              <a
                href="#signin"
                className="px-3 py-2 text-sm font-medium text-neutral-800"
              >
                Sign in
              </a>

              <a
                href="#signup"
                className="flex items-center gap-1.5 rounded-xl bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black"
              >
                Get started
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Desktop Dropdown */}
          <AnimatePresence>
            {openMenu && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="hidden border-t border-neutral-200 py-4 lg:block"
              >
                <div
                  className={`grid gap-2 ${
                    openMenu === "Resources"
                      ? "grid-cols-3"
                      : "grid-cols-2"
                  }`}
                >
                  {menus[openMenu].map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.title}
                        href="#"
                        onClick={() => setOpenMenu(null)}
                        className="group flex gap-3 rounded-xl p-3 transition hover:bg-neutral-100"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50">
                          <Icon className="h-4 w-4 text-neutral-700" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-900">
                            {item.title}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-neutral-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-t border-neutral-200 lg:hidden"
              >
                <div className="space-y-1 py-4">

                  {/* Mobile Dropdown Links */}
                  {Object.keys(menus).map((menu) => (
                    <button
                      key={menu}
                      onClick={() => toggleMenu(menu)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm text-neutral-700 hover:bg-neutral-100"
                    >
                      {menu}

                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openMenu === menu ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ))}

                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {openMenu && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-3 space-y-1 border-l border-neutral-200 pl-3">
                          {menus[openMenu].map((item) => (
                            <a
                              key={item.title}
                              href="#"
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-2.5 text-sm text-neutral-600 hover:bg-neutral-100"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mobile Normal Links */}
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-3 text-sm text-neutral-700 hover:bg-neutral-100"
                    >
                      {link.label}
                    </a>
                  ))}

                  {/* Mobile Actions */}
                  <div className="mt-3 border-t border-neutral-200 pt-3">
                    <a
                      href="#signin"
                      className="block rounded-lg px-3 py-3 text-sm font-medium"
                    >
                      Sign in
                    </a>

                    <a
                      href="#signup"
                      className="mt-2 block rounded-xl bg-neutral-950 px-4 py-3 text-center text-sm font-medium text-white"
                    >
                      Get started
                    </a>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}