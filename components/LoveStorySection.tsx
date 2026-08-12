import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LoveStorySection({ storyImage }: { storyImage: string }) {
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
                        className="story-image md:w-8/12 object-cover object-center"
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
                        <div className="story-chapters-track">
                            <div className="story-chapter reanimate up delay-3">
                                {/* <p className="belgantFont text-white text-xl my-2 font-bold">The Beginning</p>
                                <p className="section-copy text-white text-sm">
                                    Our story began like a quiet song, unexpected yet
                                    comforting. We met at just the right time, when life was
                                    still figuring itself out. What started as casual
                                    conversations turned into deep connections, shared dreams,
                                    and a sense of home in each other&apos;s presence.
                                </p> */}
                                <p className="belgantFont text-white text-xl my-2 font-bold">Awal Mula</p>
                                <p className="section-copy text-white text-sm">
                                    Semuanya dimulai dari obrolan ringan yang ternyata nyambung. Dari sekadar membahas hal-hal sepele, kita perlahan mulai terbuka—berbagi rencana masa depan, sampai menertawakan hal-hal receh berdua.
                                    Berada di dekatmu rasanya tenang.
                                    Selelah apa pun hari yang kulewati di luar sana, ada di sampingmu selalu terasa seperti pulang ke rumah.
                                </p>
                            </div>

                            <div className="story-chapter reanimate up delay-4">
                                {/* <p className="belgantFont text-white text-xl my-2 font-bold">Growing Love</p>
                                <p className="section-copy text-white text-sm">
                                    As time passed, we grew not just as individuals, but as a
                                    team. We&apos;ve celebrated wins, braved challenges, and
                                    found countless reasons to laugh along the way.
                                </p> */}
                                <p className="belgantFont text-white text-xl my-2 font-bold">Cinta yang Tumbuh</p>
                                <p className="section-copy text-white text-sm">
                                    Seiring berjalannya waktu, kami tumbuh tak hanya sebagai individu, tetapi juga sebagai sebuah tim.
                                    Kami telah merayakan berbagai keberhasilan, menghadapi tantangan dengan tegar
                                    dan menemukan begitu banyak alasan untuk tertawa bersama dalam perjalanan ini.
                                </p>
                            </div>

                            <div className="story-chapter reanimate up delay-5">
                                {/* <p className="belgantFont text-white text-xl my-2 font-bold">A Promise for Forever</p>
                                <p className="section-copy text-white text-sm">
                                    Now, with joyful hearts and hopeful eyes, we&apos;re
                                    stepping into the next chapter. This wedding isn&apos;t
                                    just a celebration of a day, it&apos;s a celebration of a
                                    journey, a promise, and the love we&apos;re lucky enough to
                                    call our own.
                                </p> */}
                                <p className="belgantFont text-white text-xl my-2 font-bold">Sebuah Janji untuk Selamanya</p>
                                <p className="section-copy text-white text-sm">
                                    Kini, dengan hati yang penuh sukacita dan tatapan penuh harapan, kami melangkah menuju tahap selanjutnya.
                                    Pernikahan ini bukan sekadar perayaan untuk satu hari saja, melainkan perayaan atas sebuah perjalanan, sebuah janji
                                    dan cinta yang begitu berharga bagi kami berdua.
                                </p>
                            </div>

                        </div>

                        {/* Scroll hint */}
                        <div className="story-scroll-hint">
                            {/* <span>Scroll to read more</span> */}
                            <span>Scroll kanan untuk baca lengkapnya</span>
                            <span className="story-scroll-arrow">⟶</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
