"use client";

import { useEffect, useState } from "react";

export default function Preloader({ isVisible, setIsVisible }: { isVisible: boolean, setIsVisible: (visible: boolean) => void }) {
    const [isFading, setIsFading] = useState(true);

    useEffect(() => {
        // Kunci scroll pada body saat preloader aktif
        document.body.style.overflow = "hidden";

        const handleHide = () => {
            setIsFading(false)
            setTimeout(() => {
                setIsVisible(false);
            }, 1000);
            // Berikan waktu untuk animasi fade out Tailwind (duration-500) sebelum mengembalikan scroll
            setTimeout(() => {
                document.body.style.overflow = "visible";
            }, 1000);
        };

        // Timeout cadangan jika window load terlalu lama (maksimal 10 detik)
        const forceHide = setTimeout(() => {
            handleHide();
        }, 10000);

        // Hilangkan preloader setelah animasi selesai (4.5 detik sesuai script asli)
        const normalHide = setTimeout(() => {
            clearTimeout(forceHide);
            handleHide();
            document.body.style.overflow = "visible";
        }, 6500);

        return () => {
            clearTimeout(forceHide);
            clearTimeout(normalHide);
            document.body.style.overflow = "visible";
        };
    }, [isVisible, setIsVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Custom Keyframes yang tidak dicover oleh default Tailwind utilites */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes fadeInOut {
                        0%, 100% { opacity: 0; }
                        20%, 80% { opacity: 1; }
                    }
                    @keyframes fadeIn {
                        0% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                    @keyframes slideDown {
                        0% { transform: translate(0, 0); }
                        100% { transform: translate(0, calc(-50% + 15px)); }
                    }
                    @keyframes moveUp {
                        0% { top: 6rem; opacity: 0; }
                        100% { top: 0; opacity: 1; }
                    }
                    @keyframes pulseScale {
                        0%, 100% { transform: scale(0.9); }
                        50% { transform: scale(1); }
                    }

                    .animate-fade-in-out {
                        animation: fadeInOut 1.5s ease-in-out 1.5s forwards;
                    }
                    .animate-wedding-title {
                        animation: fadeIn 2s ease-in-out 2s forwards, slideDown 1.5s ease-out 3.5s forwards;
                    }
                    .animate-initials {
                        animation: moveUp 1.5s ease-out 3.5s forwards, pulseScale 2s ease-in-out 3.5s infinite;
                    }
                    .font-belgan {
                        font-family: 'Belgan Aesthetic', sans-serif;
                    }
                `}} />
            
            <div
                id="preloader"
                className={`fixed inset-0 bg-black/90 backdrop-blur-[5px] z-[100] flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                    isFading ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="text-white text-sm font-bold tracking-[3px] font-belgan absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 animate-fade-in-out">
                        THE WEDDING OF
                    </div>

                    <div className="text-white text-sm font-bold tracking-[3px] font-belgan absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 animate-wedding-title">
                        DANIEL &amp; LISTI
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+45px)] overflow-hidden h-20">
                        <div className="relative top-24 flex flex-row justify-center px-[100px] text-white font-normal text-[100px] leading-[90px] font-belgan animate-initials">
                            <span>D</span>
                            <span className="ml-0">L</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}