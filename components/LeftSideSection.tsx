import { coverImage } from '@/lib/invitationData'
import React from 'react'

export default function LeftSideSection() {
    return (
        <div className="w-8/12 h-screen relative hidden md:block">
            <div
                className="size-full flex flex-col justify-start items-start gap-8 text-left p-10 bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.76)), url(${coverImage})`,
                }}
            >
                <p className="cover-kicker text-xl font-bold">THE WEDDING OF</p>
                <div className="cover-title-block-leftside">
                    <h1>Daniel</h1>
                    <h1>&</h1>
                    <h1>Listi</h1>
                </div>
            </div>
        </div>
    )
}
