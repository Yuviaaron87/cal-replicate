import { motion } from "motion/react";
import Button from "../../components/Button";
import {ArrowRight,CalendarDays,Check,Copy,MicOff,Monitor,Phone,Video,} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect your calendar",
    description:
      "We'll handle all the cross-referencing, so you don't have to worry about double bookings.",
  },
  {
    number: "02",
    title: "Set your availability",
    description:
      "Want to block off weekends? Set up any buffers? We make that easy.",
  },
  {
    number: "03",
    title: "Choose how to meet",
    description:
      "It could be a video chat, phone call, or a walk in the park!",
  },
];

function CalendarAnimation() {
  return (
    <div className="relative mt-8 h-48 overflow-hidden">
      {/* Orbit rings */}
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-200" />

      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-200" />

      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-100" />

      {/* Center */}
      <div className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-[10px] font-semibold shadow-sm">
        Cal.com
      </div>

      {/* Rotating icons */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm">
          <CalendarDays className="h-4 w-4 text-neutral-500" />
        </div>

        <div className="absolute bottom-1 right-0 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm">
          <CalendarDays className="h-4 w-4 text-neutral-500" />
        </div>

        <div className="absolute bottom-1 left-0 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm">
          <CalendarDays className="h-4 w-4 text-neutral-500" />
        </div>
      </motion.div>

      {/* Inner rotating ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-neutral-300" />
      </motion.div>
    </div>
  );
}

function AvailabilityAnimation() {
  const rows = [
    ["Mon", "8:30 am", "5:00 pm"],
    ["Tue", "9:00 am", "6:30 pm"],
    ["Wed", "10:00 am", "7:00 pm"],
  ];

  return (
    <div className="relative mt-8 h-48 overflow-hidden rounded-t-2xl border border-neutral-200 bg-white pt-8">
      {/* Layered browser/card edges */}
      <div className="absolute -top-3 left-8 right-8 h-4 rounded-t-xl border border-neutral-200 bg-white" />

      <div className="absolute -top-1 left-4 right-4 h-4 rounded-t-xl border border-neutral-200 bg-white" />

      <div className="space-y-4 px-4">
        {rows.map((row, index) => (
          <motion.div
            key={row[0]}
            animate={{
              opacity: index === 1 ? [0.45, 1, 0.45] : 1,
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.35,
            }}
            className="flex items-center gap-2 text-[10px] text-neutral-400"
          >
            {/* Toggle */}
            <motion.div
              animate={{
                backgroundColor:
                  index === 1
                    ? ["#e5e5e5", "#171717", "#e5e5e5"]
                    : "#e5e5e5",
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.35,
              }}
              className="flex h-4 w-7 items-center rounded-full p-0.5"
            >
              <motion.span
                animate={{
                  x: index === 1 ? [0, 11, 0] : 0,
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.35,
                }}
                className="h-3 w-3 rounded-full bg-white shadow-sm"
              />
            </motion.div>

            <span className="w-7">{row[0]}</span>

            <span className="rounded-md border border-neutral-200 px-2 py-1">
              {row[1]}
            </span>

            <span>-</span>

            <span className="rounded-md border border-neutral-200 px-2 py-1">
              {row[2]}
            </span>

            <span>+</span>

            <Copy className="h-3 w-3" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MeetingAnimation() {
  return (
    <div className="relative mt-8 h-48 overflow-hidden rounded-t-2xl border border-neutral-200 bg-white">
      {/* Browser header */}
      <div className="flex h-7 items-center gap-1 border-b border-neutral-200 px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-200" />
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-200" />
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-200" />
      </div>

      {/* Participants */}
      <div className="grid h-32 grid-cols-2 divide-x divide-neutral-200">
        {[1, 2].map((person) => (
          <motion.div
            key={person}
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: person * 0.3,
            }}
            className="flex items-center justify-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
              <div className="relative h-9 w-9">
                <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-neutral-800" />

                <div className="absolute bottom-0 left-1/2 h-5 w-8 -translate-x-1/2 rounded-t-full bg-neutral-800" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Meeting controls */}
      <motion.div
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-neutral-200 bg-white px-3 py-2 shadow-sm"
      >
        <Video className="h-3 w-3" />

        <MicOff className="h-3 w-3" />

        <Phone className="h-3 w-3" />

        <Monitor className="h-3 w-3" />

        <Check className="h-3 w-3" />
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-[#f7f7f5] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm">
            <CalendarDays className="h-3.5 w-3.5" />
            How it works
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            With us, appointment scheduling is easy
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg">
            Effortless scheduling for business and individuals, powerful
            solutions for fast-growing modern companies.
          </p>

          <div className="mt-7 flex justify-center gap-3">
            <Button
                variant="primary"
                size="md"
        >
            Get started
           </Button>

            <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-400">
              Book a demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-xs font-semibold text-neutral-500">
                {step.number}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-neutral-950">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                {step.description}
              </p>

              {index === 0 && <CalendarAnimation />}

              {index === 1 && <AvailabilityAnimation />}

              {index === 2 && <MeetingAnimation />}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}