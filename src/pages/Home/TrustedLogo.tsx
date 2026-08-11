import { motion } from "motion/react";

import {
  ANGEL,
  COINBASE,
  DEEL,
  FRAMER,
  RAMP,
  SUPABASE,
  UDEMY,
  VERCEL,
} from "../../assets/svg";

const logos = [
  {
    name: "AngelList",
    image: ANGEL,
  },
  {
    name: "Coinbase",
    image: COINBASE,
  },
  {
    name: "Deel",
    image: DEEL,
  },
  {
    name: "Framer",
    image: FRAMER,
  },
  {
    name: "Ramp",
    image: RAMP,
  },
  {
    name: "Supabase",
    image: SUPABASE,
  },
  {
    name: "Udemy",
    image: UDEMY,
  },
  {
    name: "Vercel",
    image: VERCEL,
  },
];

export default function TrustedLogo() {
  return (
    <section className="relative overflow-hidden border-t border-neutral-200 bg-white py-10">
      {/* Heading */}
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="mb-8 text-center text-xs font-medium text-neutral-400">
          Trusted by companies around the world
        </p>
      </div>

      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

      {/* Marquee */}
      <div className="overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-14"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* First logos */}
          {logos.map((logo) => (
            <div
              key={`first-${logo.name}`}
              className="flex h-12 w-32 shrink-0 items-center justify-center"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-8 max-w-[120px] object-contain opacity-50 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}

          {/* Duplicate logos for seamless loop */}
          {logos.map((logo) => (
            <div
              key={`second-${logo.name}`}
              className="flex h-12 w-32 shrink-0 items-center justify-center"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-8 max-w-[120px] object-contain opacity-50 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}