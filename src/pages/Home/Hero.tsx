import { motion } from "motion/react";
import Button from "../../components/Button";
import {ArrowRight,CalendarDays,Check,Clock3,Globe2,Mail,Video,} from "lucide-react";


const features = [
  {
    icon: CalendarDays,
    title: "Easy scheduling",
    text: "Share your availability with anyone.",
  },
  {
    icon: Clock3,
    title: "Save your time",
    text: "Avoid the back and forth.",
  },
  {
    icon: Video,
    title: "Meet anywhere",
    text: "Connect your favorite tools.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[650px] w-[850px] -translate-x-1/2 rounded-full bg-neutral-100/70 blur-3xl" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 70%)",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-14 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[560px]"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-neutral-950" />
              Cal.com infrastructure for everyone
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-neutral-950 sm:text-6xl lg:text-[72px]"
            >
              The better way
              <br />
              to schedule
              <br />
              <span className="text-neutral-400">
                your meetings.
              </span>
            </motion.h1>
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-7 max-w-[500px] text-base leading-7 text-neutral-500 sm:text-lg"
            >
              A fully customizable scheduling platform for
              individuals, businesses and developers. Make
              scheduling simple and spend more time doing
              meaningful work.
            </motion.p>
            {/* SIGN UP BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              {/* Google */}
              <Button
                 variant="primary"
                 size="lg"
                 icon={<ArrowRight className="h-4 w-4" />}
            >
                Sign up with Google
                </Button>

              <Button
                 variant="secondary"
                 size="lg"
                 icon={<Mail className="h-4 w-4" />}
                 iconPosition="left"
            >
                Sign up with email
               </Button>
               
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 text-xs text-neutral-400"
            >
              Free forever for individuals. No credit card required.
            </motion.p>
          </motion.div>
          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative mx-auto max-w-[590px] rounded-[30px] border border-neutral-200 bg-white p-4 shadow-[0_30px_90px_rgba(0,0,0,0.12)] sm:p-6">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
                    S
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      Cal.com
                    </p>
                    <p className="text-xs text-neutral-400">
                      Smart scheduling
                    </p>
                  </div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
                  <CalendarDays className="h-4 w-4" />
                </div>
              </div>
              {/* Feature Grid */}
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.45 + index * 0.1,
                        duration: 0.5,
                      }}
                      whileHover={{ y: -5 }}
                      className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 transition hover:bg-white hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                        <Icon className="h-4 w-4" />
                      </div>

                      <h3 className="mt-5 text-sm font-semibold">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-neutral-500">
                        {feature.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
              {/* Availability Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-400">
                      Your availability
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      Ready when you are
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-medium shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Available
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-7 gap-2">
                  {Array.from({ length: 21 }).map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.75 + index * 0.02,
                      }}
                      className={`h-7 rounded-md ${
                        index % 5 === 0 || index % 7 === 0
                          ? "bg-neutral-950"
                          : "bg-white"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Floating Success Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 -top-8 hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                  <Check className="h-4 w-4 text-emerald-600" />
                </div>

                <div>
                  <p className="text-xs font-semibold">
                    Meeting booked
                  </p>

                  <p className="mt-0.5 text-[10px] text-neutral-400">
                    Just now
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Timezone Card */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -left-4 hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
                  <Globe2 className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold">
                    Timezone detected
                  </p>

                  <p className="mt-0.5 text-[10px] text-neutral-400">
                    Asia / Kolkata
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}