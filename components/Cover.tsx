import { belgantFont } from '@/app/fonts';
import { coverImage } from '@/lib/invitationData';
import { Mail } from 'lucide-react';
import { motion } from "framer-motion";

type CoverProps = {
    invitationOpen: boolean;
    setInvitationOpen: (value: boolean) => void;
    audioRef: React.RefObject<HTMLAudioElement | null>;
    setIsVisible: (value: boolean) => void;
}

export default function Cover({ invitationOpen, setInvitationOpen, audioRef, setIsVisible }: CoverProps) {
    return (
        <>
            {!invitationOpen && (
                <motion.div
                    initial={{ opacity: 1, visibility: "visible" }}
                    animate={{ opacity: 1, visibility: "visible" }}
                    exit={{ opacity: 0, visibility: "hidden" }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                    className="fixed size-full z-50 overflow-hidden"
                >
                    <div
                        className="cover-media p-6 py-[25%] md:py-20 gap-6 hidden md:block"
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.18) 60%, rgba(0, 0, 0, 0.76)), url(${coverImage})`,
                        }}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-white">THE WEDDING OF</p>
                            <div className="cover-title-block text-left">
                                <h1 className={`${belgantFont.className}`}>Daniel</h1>
                                <h1 className={`${belgantFont.className} text-white/40 absolute -top-4 translate-y-[50%] -right-4`} style={{ fontSize: "6rem" }}>&</h1>
                                <h1 className={`${belgantFont.className}`}>Listi</h1>
                            </div>
                            <p className="text-white text-sm">SATURDAY, 30 / 01 / 2027</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <p className="text-white">
                                Dear,
                            </p>
                            <div className="flex justify-center items-center text-white border-b border-white w-60 h-8">Saudara</div>
                            <p className="text-white italic text-xs my-2">
                                We apologize if there is any misspelling of name or title.
                            </p>
                            <button
                                type="button"
                                className="pill-button cover-button"
                                onClick={() => {
                                    setInvitationOpen(true);
                                    audioRef.current?.play();
                                    setIsVisible(true);
                                }}
                            >
                                <Mail className="w-4 h-4 mr-2" />
                                OPEN INVITATION
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    )
}
