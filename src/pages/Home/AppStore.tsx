import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  MessageSquare,
  Video,
} from "lucide-react";
import Button from "../../components/Button";

const apps = [
  {
    name: "Salesforce",
    short: "SF",
    className: "bg-[#e8f4ff] text-[#1683d8]",
  },
  {
    name: "Outlook",
    short: "O",
    className: "bg-[#eaf2ff] text-[#0876d1]",
  },
  {
    name: "Google Meet",
    short: "G",
    className: "bg-[#eaf8ef] text-[#1a9b57]",
  },
  {
    name: "Google Calendar",
    short: "31",
    className: "bg-[#fff3e8] text-[#e85d04]",
  },
  {
    name: "Microsoft Teams",
    short: "T",
    className: "bg-[#eeeaff] text-[#5b45d8]",
  },
  {
    name: "Slack",
    short: "S",
    className: "bg-[#fff0f4] text-[#e04b75]",
  },
  {
    name: "Zoom",
    short: "Z",
    className: "bg-[#eaf4ff] text-[#2d8cff]",
  },
  {
    name: "Notion",
    short: "N",
    className: "bg-neutral-100 text-neutral-900",
  },
];

export default function AppStore() {
  return (
    <section className="bg-[#f7f7f5] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white"
        >
          <div className="grid items-center gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_0.9fr] lg:p-16">
            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm"
              >
                <span className="grid h-4 w-4 place-items-center rounded bg-neutral-950 text-[8px] text-white">
                  4
                </span>
                App store
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-neutral-950 sm:text-5xl"
              >
                All your key tools in sync with your meetings
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 max-w-lg text-base leading-7 text-neutral-500"
              >
                Connect your favorite tools and keep everything synchronized
                with your meetings. Schedulify works with the tools your team
                already uses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Get started
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Explore apps
                </Button>
              </motion.div>
            </div>

            {/* RIGHT APP GRID */}
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="grid grid-cols-4 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                {apps.map((app, index) => (
                  <motion.div
                    key={app.name}
                    initial={{
                      opacity: 0,
                      y: 25,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                    }}
                    className="group flex aspect-square items-center justify-center border-b border-r border-neutral-200 p-5"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-bold shadow-sm transition-transform duration-300 group-hover:rotate-3 ${app.className}`}
                    >
                      {app.short}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating center icon */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-4 -top-5 hidden h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-lg sm:flex"
              >
                <CalendarDays className="h-5 w-5" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -bottom-4 -left-4 hidden h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-lg sm:flex"
              >
                <MessageSquare className="h-5 w-5" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -bottom-5 right-20 hidden h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-lg sm:flex"
              >
                <Video className="h-5 w-5" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}