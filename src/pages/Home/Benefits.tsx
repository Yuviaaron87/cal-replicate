import { motion } from "motion/react";
import {CalendarCheck,CalendarDays,Check,Clock3,Code2,CreditCard,Link2,MessageSquare,ShieldCheck,Video,Zap,} from "lucide-react";

const benefits = [
  {
    title: "Avoid meeting overload",
    description:
      "Only get booked when you want to. Set daily, weekly or monthly limits and add buffers around your meetings.",
    type: "availability",
  },
  {
    title: "Stand out with a custom booking link",
    description:
      "Customize your booking link so it's short and easy to remember for your coworkers and customers.",
    type: "booking",
  },
  {
    title: "Streamline your booker's experience",
    description:
      "Let your bookers view their calendar and choose the perfect time without unnecessary back-and-forth.",
    type: "calendar",
  },
  {
    title: "Reduce no-shows with automated meeting reminders",
    description:
      "Send reminders before meetings so important conversations don't get forgotten.",
    type: "reminder",
  },
];

const extras = [
  {
    icon: CreditCard,
    title: "Accept payments",
  },
  {
    icon: Video,
    title: "Built-in video conferencing",
  },
  {
    icon: Link2,
    title: "Short booking links",
  },
  {
    icon: ShieldCheck,
    title: "Privacy first",
  },
  {
    icon: MessageSquare,
    title: "50+ languages",
  },
  {
    icon: Code2,
    title: "Easy embeds",
  },
  {
    icon: Zap,
    title: "AI for your favorite apps",
  },
  {
    icon: CalendarCheck,
    title: "Simple customization",
  },
];

function AvailabilityCard() {
  return (
    <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium text-neutral-500">
          Notice and buffers
        </span>

        <Clock3 className="h-3.5 w-3.5 text-neutral-400" />
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <p className="mb-1 text-[9px] text-neutral-400">
            Minimum notice
          </p>

          <div className="rounded-md border border-neutral-200 px-3 py-2 text-[10px]">
            2 days
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="mb-1 text-[9px] text-neutral-400">
              Buffer before event
            </p>

            <div className="rounded-md border border-neutral-200 px-2 py-2 text-[10px]">
              10 mins
            </div>
          </div>

          <div>
            <p className="mb-1 text-[9px] text-neutral-400">
              Buffer after event
            </p>

            <div className="rounded-md border border-neutral-200 px-2 py-2 text-[10px]">
              30 mins
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingCard() {
  return (
    <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-4">
      <div className="rounded-lg bg-neutral-50 px-3 py-2 text-center text-[10px] font-medium">
        cal.com/yuvi
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100">
          <CalendarDays className="h-4 w-4 text-neutral-500" />
        </div>

        <div>
          <p className="text-[10px] font-semibold">
            Platform API Meeting
          </p>

          <p className="mt-1 text-[8px] text-neutral-400">
            30 min · Video meeting
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-[9px] text-neutral-400">
        <Check className="h-3 w-3" />
        Easy booking experience
      </div>
    </div>
  );
}

function CalendarCard() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-2">
        <span className="text-[9px] font-medium">
          Overview my calendar
        </span>

        <CalendarDays className="h-3.5 w-3.5 text-neutral-400" />
      </div>

      <div className="grid grid-cols-5 border-b border-neutral-100 text-center">
        {["Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div
            key={day}
            className="border-r border-neutral-100 py-2 text-[8px] text-neutral-400"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-1 p-3">
        {["Call", "Demo", "Meeting", "", "Event"].map(
          (item, index) => (
            <motion.div
              key={`${item}-${index}`}
              animate={{
                opacity: item ? [0.65, 1, 0.65] : 0.3,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="h-12 rounded-md bg-neutral-100 p-1.5 text-[7px]"
            >
              {item}
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

function ReminderCard() {
  return (
    <div className="mt-6 flex min-h-32 items-center justify-center rounded-xl border border-neutral-200 bg-white p-4">
      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full rounded-xl border border-neutral-200 bg-white p-3 shadow-sm"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100">
            <CalendarCheck className="h-3.5 w-3.5" />
          </div>

          <div>
            <p className="text-[9px] font-semibold">
              Meeting scheduled
            </p>

            <p className="text-[8px] text-neutral-400">
              Reminder sent successfully
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Benefits() {
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
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm">
            <Zap className="h-3.5 w-3.5" />
            Benefits
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            Your all-purpose scheduling app
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg">
            Discover a variety of our advanced features.
            Unlimited and free for individuals.
          </p>
        </motion.div>

        {/* Main benefits */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
            >
              <h3 className="text-sm font-semibold text-neutral-950 sm:text-base">
                {benefit.title}
              </h3>

              <p className="mt-2 max-w-lg text-xs leading-5 text-neutral-500 sm:text-sm">
                {benefit.description}
              </p>

              {benefit.type === "availability" && (
                <AvailabilityCard />
              )}

              {benefit.type === "booking" && <BookingCard />}

              {benefit.type === "calendar" && <CalendarCard />}

              {benefit.type === "reminder" && <ReminderCard />}
            </motion.article>
          ))}
        </div>

        {/* More features */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <h2 className="text-center text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            ...and so much more!
          </h2>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {extras.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="flex min-h-28 flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white p-4 text-center shadow-sm transition"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50">
                    <Icon className="h-4 w-4 text-neutral-700" />
                  </div>

                  <p className="mt-3 text-[10px] font-medium leading-4 text-neutral-700 sm:text-xs">
                    {item.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}