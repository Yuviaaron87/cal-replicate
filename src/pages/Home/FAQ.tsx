import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, HelpCircle, Plus } from "lucide-react";
import Button from "../../components/Button";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Schedulify and how does it work?",
    answer:
      "Schedulify is a modern scheduling platform that helps individuals and teams eliminate the back-and-forth of finding a suitable meeting time. Share your scheduling link, let people choose an available time, and keep your calendars organized automatically.",
  },
  {
    question: "What makes Schedulify different from other scheduling apps?",
    answer:
      "Schedulify combines simple scheduling with calendar synchronization, availability controls, meeting preferences, and integrations. The goal is to make scheduling feel simple while giving teams the flexibility they need.",
  },
  {
    question: "How much does Schedulify cost and what's included in each plan?",
    answer:
      "Schedulify can provide different plans depending on the features and requirements of each user or organization. Each plan can include different scheduling, collaboration, integrations, and administrative capabilities.",
  },
  {
    question:
      "What are Schedulify's pricing plans, and is it good scheduling software for small businesses?",
    answer:
      "Schedulify is designed to work for individuals, small businesses, and growing teams. The platform can scale from simple one-to-one meetings to more advanced scheduling workflows.",
  },
  {
    question:
      "Can Schedulify be used for Healthcare, Sales, Support, and B2B teams?",
    answer:
      "Yes. Schedulify can be structured for different types of teams and workflows, including healthcare, sales, customer support, recruiting, and B2B organizations.",
  },
  {
    question: "Can I connect my existing calendar to Schedulify?",
    answer:
      "Yes. Calendar integrations allow your availability to be synchronized so that people can book available times without creating unnecessary scheduling conflicts.",
  },
  {
    question: "Does Schedulify support video meetings?",
    answer:
      "Yes. Meeting types can be configured to use supported video conferencing services, allowing a meeting link to be included with the scheduled event.",
  },
];

function FAQRow({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-neutral-200">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span
          className={`text-base font-semibold leading-6 transition-colors sm:text-lg ${
            isOpen ? "text-neutral-950" : "text-neutral-900"
          }`}
        >
          {item.question}
        </span>

        <span className="flex h-6 w-6 shrink-0 items-center justify-center">
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Plus className="h-5 w-5 text-neutral-700" />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <p className="max-w-5xl pb-7 pr-10 text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      id="faq"
      className="overflow-hidden bg-[#f7f7f5] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-[52px] lg:leading-[1.05]">
            Frequently asked questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-500">
            These are some of our most frequently asked questions.
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              variant="primary"
              size="md"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Talk to sales
            </Button>

            <Button
              variant="secondary"
              size="md"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Get started
            </Button>
          </div>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-16"
        >
          {faqItems.map((item, index) => (
            <FAQRow
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}