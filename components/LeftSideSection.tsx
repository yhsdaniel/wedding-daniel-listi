import { belgantFont } from '@/app/fonts'
import { coverImage } from '@/lib/invitationData'
import React from 'react'

export default function LeftSideSection() {
    return (
        <div className="2xl:w-8/12 w-7/12 h-screen relative hidden xl:block">
            <div
                className="size-full flex flex-col justify-start items-start gap-8 text-left p-10 bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0.18) 70%, rgba(0, 0, 0, 0.76)), url(${coverImage})`,
                }}
            >
                <p className="text-white">THE WEDDING OF</p>
                <div className="cover-title-block text-left">
                    <h1 className={`${belgantFont.className}`}>Daniel</h1>
                    <h1 className={`${belgantFont.className} text-white/40 absolute -top-4 translate-y-[50%] -right-4`} style={{ fontSize: "6rem" }}>&</h1>
                    <h1 className={`${belgantFont.className}`}>Listi</h1>
                </div>
            </div>
        </div>
    )
}
