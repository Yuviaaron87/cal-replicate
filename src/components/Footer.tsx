import {
  Download,
  ExternalLink,
} from "lucide-react";

import {
  FaApple,
  FaChrome,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const columns = [
  {
    title: "Product",
    links: [
      "Scheduling",
      "Routing",
      "Teams",
      "Workflows",
      "Instant Meetings",
      "Payments",
      "Video Conferencing",
      "App Store",
      "Desktop App",
      "FAQ",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Sales",
      "Recruiting",
      "Customer Success",
      "Healthcare",
      "Education",
      "Financial Services",
      "Legal",
      "C-suite",
    ],
  },
  {
    title: "Developers",
    links: [
      "Developer Documentation",
      "API",
      "Scheduling Components",
      "OAuth",
      "GitHub",
      "Docker",
      "Webhooks",
      "Integrations",
    ],
  },
  {
    title: "Company",
    links: [
      "Jobs",
      "About",
      "Open Startup",
      "Support",
      "Privacy",
      "Terms",
      "License",
      "Security",
      "Changelog",
      "Get a demo",
      "Talk to sales",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#f7f7f5]">
      <div className="mx-auto max-w-[1140px] px-6 py-20">

        {/* Main Footer */}
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">

          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
              Cal.com
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-600">
              Cal.com is a modern scheduling platform designed
              to make meetings simple for individuals, businesses
              and developers.
            </p>

            {/* Compliance */}
            <div className="mt-7 flex flex-wrap gap-3">
              {["ISO", "SOC 2", "GDPR", "HIPAA"].map((item) => (
                <div
                  key={item}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-[9px] font-bold text-neutral-600"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Mission */}
            <p className="mt-8 max-w-md text-sm leading-6 text-neutral-700">
              Our mission is to make scheduling simple and
              connect people through better use of time.
            </p>

            {/* Language + Status */}
            <div className="mt-7 flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm transition hover:border-neutral-400"
              >
                English
              </button>

              <div className="flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2 text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                All Systems Operational
              </div>
            </div>

            {/* Downloads */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-neutral-900">
                Downloads
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm transition hover:border-neutral-400"
                >
                  <FaApple className="h-4 w-4" />
                  iPhone
                </button>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm transition hover:border-neutral-400"
                >
                  <Download className="h-4 w-4" />
                  Android
                </button>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm transition hover:border-neutral-400"
                >
                  <FaChrome className="h-4 w-4" />
                  Chrome
                </button>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  "Safari",
                  "Edge",
                  "Firefox",
                  "macOS",
                  "Windows",
                  "Linux",
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm transition hover:border-neutral-400"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-8 grid max-w-sm grid-cols-2 gap-3">
              <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
                <p className="text-xs text-orange-600">
                  ★★★★★
                </p>

                <p className="mt-2 text-xs font-medium text-neutral-800">
                  Great reviews
                </p>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-xs text-emerald-600">
                  ★★★★★
                </p>

                <p className="mt-2 text-xs font-medium text-neutral-800">
                  Trusted by users
                </p>
              </div>
            </div>

            {/* Help */}
            <p className="mt-8 text-sm text-neutral-600">
              Need help?{" "}
              <a
                href="#support"
                className="underline underline-offset-4 transition hover:text-black"
              >
                Contact support
              </a>
            </p>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-neutral-900">
                  {column.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group flex items-center gap-1 text-sm text-neutral-600 transition hover:text-black"
                      >
                        {link}

                        {["API", "GitHub", "Docker"].includes(link) && (
                          <ExternalLink className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col gap-5 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-neutral-500">
            © 2026 Cal.com. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2">

            <a
              href="#github"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-500 transition hover:border-neutral-950 hover:text-black"
            >
              <FaGithub className="h-4 w-4" />
            </a>

            <a
              href="#twitter"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-500 transition hover:border-neutral-950 hover:text-black"
            >
              <FaTwitter className="h-4 w-4" />
            </a>

            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-500 transition hover:border-neutral-950 hover:text-black"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}