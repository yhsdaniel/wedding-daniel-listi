'use client'

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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.25 }}
      transition={{ duration: 0.75, delay }}
      className={`${className}`}
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
    <div className="content-card countdown-card snap-section flex-col" style={{ alignItems: "flex-start", paddingLeft: "4rem" }}>
      <OpeningHeading className="absolute left-[15px] top-[120px] flex flex-col gap-3 text-3xl font-serif tracking-widest text-white/50 leading-none" delay={0.2}>
        <span>30</span>
        <span>01</span>
        <span>27</span>
      </OpeningHeading>
      <div className="absolute left-8 h-[110px] top-0 w-[1px] bg-white/30 z-10 flex flex-col justify-between pt-10 pb-6"></div>
      <div className="absolute left-8 h-[calc(100vh-255px)] bottom-0 w-[1px] bg-white/30 z-10 flex flex-col justify-between pt-10 pb-6"></div>
      <OpeningHeading className="w-full text-2xl text-left top-[30%] reanimate fade" delay={0.2}>
        ALMOST TIME FOR OUR CELEBRATION
      </OpeningHeading>
      <OpeningHeading className="flex gap-6 w-full my-6" delay={0.4}>
        {countdownItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col reanimate up delay-${Math.min(index + 2, 6)}`}
          >
            <span className="text-xl">{item.value}</span>
            <small>{item.label}</small>
          </div>
        ))}
      </OpeningHeading>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.25 }}
        transition={{ duration: 0.75, delay: 0.6 }}
        className="text-xs my-8 bg-white/30 hover:bg-white/30 px-7 py-3 rounded-2xl reanimate fade delay-6"
        href={calendarUrl}
        target="_blank"
        rel="noreferrer"
      >
        SAVE THE DATE
      </motion.a>
    </div>
  );
}
