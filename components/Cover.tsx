import { belgantFont } from '@/app/fonts';
import { coverImage } from '@/lib/invitationData';
import { Mail } from 'lucide-react';
import { motion } from "framer-motion";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

type CoverProps = {
    invitationOpen: boolean;
    setInvitationOpen: (value: boolean) => void;
    audioRef: React.RefObject<HTMLAudioElement | null>;
    setIsVisible: (value: boolean) => void;
}

export default function Cover({ invitationOpen, setInvitationOpen, audioRef, setIsVisible }: CoverProps) {
    const searchParams = useSearchParams();
    const guestName = searchParams.get('q');

    return (
        <>
            {!invitationOpen && (
                <motion.div
                    initial={{ opacity: 1, visibility: "visible" }}
                    animate={{ opacity: 1, visibility: "visible" }}
                    exit={{ opacity: 0, visibility: "hidden" }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                    className="fixed inset-0 size-full z-[100] bg-black overflow-hidden"
                >
                    <Image
                        src="https://res.cloudinary.com/q1kpnykw/image/upload/v1788163560/sampul.jpg"
                        alt="background cover"
                        fill
                        style={{
                            objectFit: 'cover',
                            zIndex: -1
                        }}
                        priority
                        unoptimized
                    />
                    <div
                        className="cover-media p-6 py-[25%] md:py-20 gap-6 hidden md:block"
                    // style={{
                    //     backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.18) 60%, rgba(0, 0, 0, 0.76)), url('${coverImage}')`,
                    //     backgroundRepeat: "no-repeat",
                    //     backgroundSize: "cover",
                    //     backgroundPosition: "center 40%",
                    // }}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-black">THE WEDDING OF</p>
                            <div className="cover-title-block text-left">
                                <h1 className={`${belgantFont.className} text-black/80`}>Daniel</h1>
                                <h1 className={`${belgantFont.className} text-black/40 absolute -top-4 translate-y-[50%] -right-4`} style={{ fontSize: "6rem" }}>&</h1>
                                <h1 className={`${belgantFont.className} text-black/80`}>Listi</h1>
                            </div>
                            <p className="text-black font-bold text-sm">SATURDAY, 30 / 01 / 2027</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <p className="text-white">
                                Dear,
                            </p>
                            <div className="flex justify-center items-center text-white border-b border-white w-60 h-8 text-center px-4 overflow-hidden text-ellipsis whitespace-nowrap">
                                {guestName}
                            </div>
                            <p className="text-white italic text-xs my-2">
                                We apologize if there is any misspelling of name or title.
                            </p>
                            <button
                                type="button"
                                className="pill-button cover-button"
                                style={{ boxShadow: '1px 1px 5px #fff' }}
                                onClick={() => {
                                    setInvitationOpen(true);
                                    audioRef.current?.play();
                                    setIsVisible(true);
                                }}
                            >
                                <Mail className="w-4 h-4 mr-2" />
                                BUKA UNDANGAN
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    )
}
