'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState, useCallback } from 'react'

export default function LoveStorySection({ storyImage }: { storyImage: string }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const checkScrollEnd = useCallback(() => {
        if (!scrollRef.current) return;
        const { scrollLeft: sLeft, scrollWidth: sWidth, clientWidth: cWidth } = scrollRef.current;
        const atEnd = sLeft + cWidth >= sWidth - 15;
        setIsAtEnd(atEnd);
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        checkScrollEnd();
        el.addEventListener('scroll', checkScrollEnd, { passive: true });
        window.addEventListener('resize', checkScrollEnd);

        return () => {
            el.removeEventListener('scroll', checkScrollEnd);
            window.removeEventListener('resize', checkScrollEnd);
        };
    }, [checkScrollEnd]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
        checkScrollEnd();
    };

    return (
        <section id="story" data-section className="snap-section">
            <div className="content-card story-card">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.75, delay: 0.2 }}
                    className="flex items-center">
                    <Image
                        src={storyImage}
                        alt="Story portrait"
                        className="story-image md:w-8/12 object-cover object-center rounded-xl"
                        width={250}
                        height={100}
                    />
                    <h4 className="belgantFont w-6/12 text-3xl md:text-3xl absolute z-30 top-10 right-0">
                        The Path Where Two Hearts Unite
                    </h4>
                </motion.div>
                <div className="story-copy">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.75, delay: 0.4 }}
                        className="section-header">
                        <p className="card-eyebrow reanimate fade">LOVE STORY</p>
                        <div className="divider reanimate fade delay-2" />
                    </motion.div>

                    {/* === HORIZONTAL SCROLL CHAPTERS === */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.75, delay: 0.6 }}
                        className="story-chapters-scroll-wrapper">
                        <div
                            className="story-chapters-track"
                            ref={scrollRef}
                            onScroll={checkScrollEnd}
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
                        >
                            <div className="story-chapter reanimate up delay-3">
                                <p className="belgantFont text-white text-xl my-2 font-bold">Awal Mula</p>
                                <p className="section-copy text-white text-sm">
                                    Semuanya dimulai dari obrolan ringan yang ternyata nyambung. Dari sekadar membahas hal-hal sepele, kita perlahan mulai terbuka—berbagi rencana masa depan, sampai menertawakan hal-hal receh berdua.
                                    Selelah apa pun hari yang kulewati di luar sana, ada di sampingmu selalu terasa seperti pulang ke rumah.
                                </p>
                            </div>

                            <div className="story-chapter reanimate up delay-4">
                                <p className="belgantFont text-white text-xl my-2 font-bold">Cinta yang Tumbuh</p>
                                <p className="section-copy text-white text-sm">
                                    Seiring berjalannya waktu, kami tumbuh tak hanya sebagai individu, tetapi juga sebagai sebuah tim.
                                    Kami telah merayakan berbagai keberhasilan, menghadapi tantangan dengan tegar
                                    dan menemukan begitu banyak alasan untuk tertawa bersama dalam perjalanan ini.
                                </p>
                            </div>

                            <div className="story-chapter reanimate up delay-5">
                                <p className="belgantFont text-white text-xl my-2 font-bold">Sebuah Janji untuk Selamanya</p>
                                <p className="section-copy text-white text-sm">
                                    Kini, dengan hati yang penuh sukacita dan tatapan penuh harapan, kami melangkah menuju tahap selanjutnya.
                                    Pernikahan ini bukan sekadar perayaan untuk satu hari saja, melainkan perayaan atas sebuah perjalanan, sebuah janji
                                    dan cinta yang begitu berharga bagi kami berdua.
                                </p>
                            </div>

                        </div>

                        <div className="flex justify-end items-center">
                            {/* Scroll hint */}
                            <div
                                className={`story-scroll-hint transition-opacity duration-50 ${isAtEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'
                                    }`}
                            >
                                <span>Scroll ke kanan</span>
                                <span className="story-scroll-arrow">⟶</span>
                            </div>
                            {/* Scroll left */}
                            {/* <div
                                className={`story-scroll-hint-left transition-opacity duration-100 ${!isAtEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'
                                    }`}
                            >
                                <span className="story-scroll-arrow">⟵</span>
                                <span>Scroll ke kiri</span>
                            </div> */}
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    )
}
