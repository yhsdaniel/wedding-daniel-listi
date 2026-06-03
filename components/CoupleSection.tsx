import React, { ReactNode } from 'react'
import { motion } from "framer-motion";

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

export default function CoupleSection() {
    return (
        <>
            <section id="couple-groom" data-section className="snap-section">
                <article
                    className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-[image:linear-gradient(180deg,_#00000000_0%,_#000000CC_100%),_url('https://wp.envelope.id/wp-content/uploads/2026/02/hansen.jpg')]"
                >
                    <div className="person-vertical-label">
                        THE GROOM
                    </div>
                    <div className="person-banner">
                        <motion.h2
                            className="belgantFont text-6xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.75, delay: 0.2 }}
                        >
                            Daniel
                        </motion.h2>
                        <motion.p
                            className="person-full-name"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.75, delay: 0.4 }}
                        >
                            Daniel Kristiawan
                        </motion.p>
                        <motion.p
                            className="section-copy"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.75, delay: 0.6 }}
                        >
                            Son of
                        </motion.p>
                        <motion.p
                            className="text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.75, delay: 0.8 }}
                        >
                            Mr. Johan Andrianto / Lo Swie Djiang (Father) &amp; Mrs. Heri Pebruariningsih / Lie Pik Tjiam (Mother)
                        </motion.p>
                        <motion.a
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.75, delay: 0.9 }}
                            className="inline-link py-1 px-4 bg-white/60 rounded-xl opacity-100 hover:opacity-100 transition-opacity"
                            href="https://instagram.com/yhskris"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @yhskris
                        </motion.a>
                    </div>
                </article>
            </section>

            <section id="couple-bride" data-section className="snap-section">
                <article
                    className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-[image:linear-gradient(180deg,_#00000000_0%,_#000000CC_100%),_url('https://wp.envelope.id/wp-content/uploads/2026/02/kezia.jpg')]"
                >
                    <div className="person-vertical-label">
                        THE BRIDE
                    </div>
                    <div className="person-banner">
                        <motion.h2
                            className="belgantFont text-6xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.75, delay: 0.2 }}
                        >
                            Listi
                        </motion.h2>
                        <motion.p
                            className="person-full-name"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.75, delay: 0.4 }}
                        >
                            Listiany Sukmawaty
                        </motion.p>
                        <motion.p
                            className="section-copy"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.75, delay: 0.6 }}
                        >
                            Daughter of
                        </motion.p>
                        <motion.p
                            className="text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.75, delay: 0.8 }}
                        >
                            Mr. Jaka Musada / Tan Tian Liong (Father) &amp; Mrs. Muflihah (Mother)
                        </motion.p>
                        <motion.a
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.75, delay: 0.9 }}
                            className="inline-link py-1 px-4 bg-white/60 rounded-xl opacity-100 hover:opacity-100 transition-opacity"
                            href="https://instagram.com/lis.lingz"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @lis.lingz
                        </motion.a>
                    </div>
                </article>
            </section>
        </>
    )
}
