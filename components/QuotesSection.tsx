import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Marcellus } from 'next/font/google'

const marcellus = Marcellus({ subsets: ['latin'], weight: '400' });

type OpeningHeadingProps = {
    children: ReactNode;
    className?: string;
    delay: number;
};

function OpeningHeading({ children, className = "", delay }: OpeningHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay }}
            className={`absolute ${className}`}
        >
            {children}
        </motion.div>
    );
}

export default function QuotesSection() {
    return (
        <section
            id="opening"
            data-section
            className="snap-start relative min-h-screen overflow-hidden bg-transparent"
        >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative h-screen">
                <OpeningHeading
                    delay={0.2}
                    className="top-[calc(50%-150px)] left-1/2 -translate-x-1/2"
                >
                    <h2 className={`${marcellus.className} m-0 text-[clamp(5rem,5vw,8rem)] font-[100] italic leading-[0.9] tracking-[0.22em] text-white opacity-50`}>
                        &amp;
                    </h2>
                </OpeningHeading>

                <OpeningHeading
                    delay={0.2}
                    className="top-[calc(50%-120px)] left-[calc(50%+30px)] -translate-x-1/2"
                >
                    <h2 className="m-0 text-[clamp(5rem,10vw,8rem)] font-[100] leading-[0.9] tracking-[0.22em] text-white">
                        L
                    </h2>
                </OpeningHeading>

                <OpeningHeading
                    delay={0.2}
                    className="top-[calc(50%-180px)] left-[calc(50%-30px)] -translate-x-1/2"
                >
                    <h2 className="m-0 text-[clamp(5rem,10vw,8rem)] font-[100] leading-[0.9] tracking-[0.22em] text-white">
                        D
                    </h2>
                </OpeningHeading>

                <OpeningHeading
                    delay={0.4}
                    className="top-[calc(50%-40px)] left-1/2 -translate-x-1/2"
                >
                    <p className="m-0 whitespace-nowrap text-sm tracking-[0.35em] text-white/80">
                        #DelightwithLove
                    </p>
                </OpeningHeading>

                <div className="h-screen w-full -bottom-1/4 absolute">
                    <OpeningHeading
                        delay={0.6}
                        className="top-[calc(50%-20px)] left-1/2 -translate-x-1/2"
                    >
                        <p className="m-0 whitespace-nowrap text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-white">
                            Mark 10:6-9
                        </p>
                    </OpeningHeading>

                    <OpeningHeading
                        delay={0.8}
                        className="top-[calc(50%+50px)] left-1/2 -translate-x-1/2 w-[min(90vw,44rem)] px-4"
                    >
                        <p className="m-0 text-sm leading-7 text-white/90 sm:text-base">
                            “But at the beginning of creation God ‘made them male and female.’ ‘For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh.’ So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.”
                        </p>
                    </OpeningHeading>
                </div>
            </div>
        </section>
    );
}
