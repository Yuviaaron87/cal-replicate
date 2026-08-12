import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Scheduling meetings used to take so much time. Schedulify made the entire process simple and effortless.",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Acme",
    initials: "SJ",
  },
  {
    quote:
      "The flexibility and simplicity of Schedulify completely changed how our team handles meetings.",
    name: "Micah Friedland",
    role: "CEO & Founder",
    company: "Navi",
    initials: "MF",
  },
  {
    quote:
      "More elegant than the alternatives. It feels simple, fast, and exactly right for our team.",
    name: "Alex Morgan",
    role: "Product Marketing",
    company: "Mintlify",
    initials: "AM",
  },
  {
    quote:
      "Our team spends less time coordinating calendars and more time actually working together.",
    name: "David Chen",
    role: "Engineering Lead",
    company: "Ramp",
    initials: "DC",
  },
  {
    quote:
      "A clean scheduling experience that our customers understood immediately.",
    name: "Emma Wilson",
    role: "Customer Success",
    company: "Storyblok",
    initials: "EW",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-[#f7f7f5] py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm">
            <Quote className="h-3.5 w-3.5" />
            Testimonials
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-neutral-950 sm:text-5xl">
            Don't just take our word for it
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-neutral-500">
            Our users are our best ambassadors. Discover why teams choose
            Schedulify to make scheduling simple.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative mt-16">
          <div className="flex items-center justify-center">
            <motion.div
              className="flex items-center gap-6"
              animate={{
                x: `calc(50% - ${active * 416 + 208}px)`,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {testimonials.map((item, index) => {
                const isActive = index === active;

                return (
                  <motion.article
                    key={item.name}
                    animate={{
                      scale: isActive ? 1 : 0.94,
                      opacity: isActive ? 1 : 0.45,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="w-[380px] shrink-0 rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm sm:w-[400px]"
                  >
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star
                          key={star}
                          className="h-3.5 w-3.5 fill-neutral-900 text-neutral-900"
                        />
                      ))}
                    </div>

                    <p
                      className={`mt-7 text-xl font-semibold leading-8 tracking-tight ${
                        isActive
                          ? "text-neutral-950"
                          : "text-neutral-500"
                      }`}
                    >
                      "{item.quote}"
                    </p>

                    <div className="mt-10 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-xs font-semibold text-white">
                        {item.initials}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-neutral-900">
                          {item.name}
                        </p>

                        <p className="mt-0.5 text-xs text-neutral-500">
                          {item.role}, {item.company}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === active
                  ? "w-7 bg-neutral-950"
                  : "w-1.5 bg-neutral-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}