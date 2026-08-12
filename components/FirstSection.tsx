import { ChevronDown } from 'lucide-react'
import React from 'react'

export default function FirstSection() {
    return (
        <section id="home" data-section className="snap-section hero-card w-full flex justify-between items-center">
            <div className="content-card hero-card text-center">
                <div className="card-eyebrow reanimate fade">THE WEDDING OF</div>
                <div className="cover-title-block">
                    <span className="cover-ghost reanimate fade delay-2">D L</span>
                    <h1 className="cover-title reanimate fade delay-3">Daniel</h1>
                    <h1 className="cover-title reanimate fade delay-4">Listi</h1>
                </div>
                <p className="section-copy text-sm reanimate up delay-5">
                    We&apos;re delighted to invite you to our wedding.
                </p>
            </div>
            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <span>SCROLL</span>
                <div className="scroll-indicator-arrow">
                    <ChevronDown size={14} strokeWidth={2} />
                    <ChevronDown size={14} strokeWidth={2} className="-mt-1" />
                </div>
            </div>
        </section>
    )
}
