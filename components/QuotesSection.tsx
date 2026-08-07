import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Cherish } from 'next/font/google'

type OpeningHeadingProps = {
    children: ReactNode;
    className?: string;
    delay: number;
    absolute?: boolean; // ← tambah prop ini
};

function OpeningHeading({ children, className = "", delay, absolute = false }: OpeningHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.75, delay }}
            className={`${absolute ? "absolute" : ""} ${className}`}
        >
            {children}
        </motion.div>
    );
}

const cherish = Cherish({ subsets: ['latin'], weight: '400' });

export default function QuotesSection() {
    return (
        <section
            id="opening"
            data-section
            className="snap-start relative min-h-screen overflow-hidden bg-transparent"
        >
            <div className="relative h-screen">
                <div className="absolute top-[18%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <OpeningHeading delay={0.2}>
                        <div className="relative w-[120px] h-[160px]">
                            <h2
                                className="belgantFont absolute m-0 -left-5 -top-5 text-[7rem] leading-none text-white"
                            >
                                D
                            </h2>
                            <h2 className={`${cherish.className} absolute top-3 left-6 m-0 text-[6rem] italic leading-none text-white opacity-50`}>
                                &
                            </h2>
                            <h2
                                className="belgantFont absolute m-0 -bottom-0 -right-5 text-[7rem] leading-none text-white"
                            >
                                L
                            </h2>
                        </div>
                    </OpeningHeading>

                    <OpeningHeading delay={0.4}>
                        <p className="whitespace-nowrap text-lg tracking-[0.2em] text-white font-bold">
                            {/* #DelightwithLove */}
                            #ourDASTIny
                        </p>
                    </OpeningHeading>

                </div>

                <div className="absolute top-[55%] left-0 right-0 flex flex-col gap-3 px-4">

                    <OpeningHeading delay={0.6}>
                        <p
                            className="m-0 px-2 text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-white">
                            Mark 10:6-9
                        </p>
                    </OpeningHeading>

                    <OpeningHeading delay={0.8}>
                        <p
                            className="m-0 px-2 text-sm leading-7 text-white/90">
                            "But at the beginning of creation God 'made them male and female.' 'For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh.' So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate."
                        </p>
                    </OpeningHeading>

                </div>

            </div>
        </section>
    );
}