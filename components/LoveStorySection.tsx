import Image from 'next/image'

export default function LoveStorySection({ storyImage }: { storyImage: string }) {
    return (
        <section id="story" data-section className="snap-section">
            <div className="content-card story-card">
                <div className="flex items-center">
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
                </div>
                <div className="story-copy">
                    <div className="section-header">
                        <p className="card-eyebrow reanimate fade">LOVE STORY</p>
                        <div className="divider reanimate fade delay-2" />
                    </div>

                    {/* === HORIZONTAL SCROLL CHAPTERS === */}
                    <div className="story-chapters-scroll-wrapper">
                        <div className="story-chapters-track">
                            <div className="story-chapter reanimate up delay-3">
                                <p className="belgantFont text-white text-xl my-2 font-bold">The Beginning</p>
                                <p className="section-copy text-white text-sm">
                                    Our story began like a quiet song, unexpected yet
                                    comforting. We met at just the right time, when life was
                                    still figuring itself out. What started as casual
                                    conversations turned into deep connections, shared dreams,
                                    and a sense of home in each other&apos;s presence.
                                </p>
                            </div>

                            <div className="story-chapter reanimate up delay-4">
                                <p className="belgantFont text-white text-xl my-2 font-bold">Growing Love</p>
                                <p className="section-copy text-white text-sm">
                                    As time passed, we grew not just as individuals, but as a
                                    team. We&apos;ve celebrated wins, braved challenges, and
                                    found countless reasons to laugh along the way.
                                </p>
                            </div>

                            <div className="story-chapter reanimate up delay-5">
                                <p className="belgantFont text-white text-xl my-2 font-bold">A Promise for Forever</p>
                                <p className="section-copy text-white text-sm">
                                    Now, with joyful hearts and hopeful eyes, we&apos;re
                                    stepping into the next chapter. This wedding isn&apos;t
                                    just a celebration of a day, it&apos;s a celebration of a
                                    journey, a promise, and the love we&apos;re lucky enough to
                                    call our own.
                                </p>
                            </div>

                        </div>

                        {/* Scroll hint */}
                        <div className="story-scroll-hint">
                            <span>Scroll to read more</span>
                            <span className="story-scroll-arrow">⟶</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
