import React from 'react'
import { motion } from "framer-motion";
import { closingImage } from '@/lib/invitationData';

export default function LastSection() {
    return (
        <section id="closing" data-section className="snap-section bg-cover bg-center" style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.42)), url(${closingImage})`,
        }}>
            <div className="content-card closing-card h-full flex flex-col justify-between" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.75, delay: 0.2 }}
                    className="section-heading reanimate fade">WITH HEARTFELT GRATITUDE FOR YOUR PRESENCE AND BLESSINGS
                </motion.h2>
                <div>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.75, delay: 0.4 }}
                        className="closing-names my-4" style={{ fontSize: "2rem" }}>
                        Daniel &amp; Listi
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.75, delay: 0.6 }}
                        className="my-4 text-sm text-white/80">
                        We can&apos;t wait to share this special moment with you. Your
                        presence will make our day even more meaningful.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
