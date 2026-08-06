'use client'

import React from 'react'

type CountdownProps = {
    countdown: {
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
    };
};

export default function CountdownServer({ countdown }: CountdownProps) {
    const countdownItems = [
        { label: "Days", value: countdown.days },
        { label: "Hours", value: countdown.hours },
        { label: "Minutes", value: countdown.minutes },
        { label: "Seconds", value: countdown.seconds },
    ];

    return (
        <>
            {
                countdownItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col reanimate up delay-${Math.min(index + 2, 6)}`}
                    >
                        <span className="text-xl" suppressHydrationWarning> {item.value} </span>
                        < small > {item.label} </small>
                    </div>
                ))
            }
        </>
    )
}
