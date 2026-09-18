import React, { ReactNode } from 'react'
import { motion } from "framer-motion";
import { groomImage, brideImage } from '@/lib/invitationData';
import Image from 'next/image';


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
                    className="relative h-screen w-full overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: `linear-gradient(180deg, #00000000 0%, #000000CC 100%)` }}
                >
                    <Image
                        src={groomImage}
                        alt="background cover"
                        fill
                        style={{
                            objectFit: 'cover',
                            zIndex: -1,
                        }}
                        priority
                        sizes='(max-width: 768px) 100vw, 800px'
                        unoptimized
                    />
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
                            Mr. Johan A. / Lo Swie Djiang (Father) <br /> Mrs. Heri P. / Lie Pik Tjiam (Mother)
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
            </section >

            <section id="couple-bride" data-section className="snap-section">
                <article
                    className="relative h-screen w-full overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: `linear-gradient(180deg, #00000000 0%, #000000CC 100%)` }}
                >
                    <Image
                        src={brideImage}
                        alt="background cover"
                        fill
                        style={{
                            objectFit: 'cover',
                            zIndex: -1,
                        }}
                        priority
                        sizes='(max-width: 768px) 100vw, 800px'
                        unoptimized
                    />
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
                            Mr. Jaka M. / Tan Tian Liong (Father) <br /> Mrs. Muflihah (Mother)
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
