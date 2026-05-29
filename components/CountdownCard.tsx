import { motion } from "framer-motion";
import { ReactNode } from "react";

type CountdownProps = {
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  calendarUrl: string;
};

type OpeningHeadingProps = {
    children: ReactNode;
    className?: string;
    delay: number;
};

function OpeningHeading({ children, className = "", delay }: OpeningHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: -100 }}
            viewport={{ amount: 0.25 }}
            transition={{ duration: 0.75, delay }}
            className={`absolute ${className}`}
        >
            {children}
        </motion.div>
    );
}

export default function CountdownCard({ countdown, calendarUrl }: CountdownProps) {
  const countdownItems = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  return (
    <div className="content-card countdown-card snap-section flex-col">
      <OpeningHeading className="countdown-title top-[calc(50%-80px)] left-1/2 -translate-x-1/2 reanimate fade" delay={0}>
        ALMOST TIME FOR OUR CELEBRATION
      </OpeningHeading>
      <div className="countdown-grid w-full top-[calc(50%-100px)]">
        {countdownItems.map((item, index) => (
          <div
            key={item.label}
            className={`countdown-box reanimate up delay-${Math.min(index + 2, 6)}`}
          >
            <span>{item.value}</span>
            <small>{item.label}</small>
          </div>
        ))}
      </div>
      <a
        className="pill-button reanimate fade delay-6"
        href={calendarUrl}
        target="_blank"
        rel="noreferrer"
      >
        SAVE THE DATE
      </a>
    </div>
  );
}
