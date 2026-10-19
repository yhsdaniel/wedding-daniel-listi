"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

type GiftCard = {
  kind: string;
  logo: string;
  title: string;
  detail: string;
  copy: string;
};

type GiftSectionProps = {
  giftOpen: boolean;
  toggleGiftOpen: () => void;
  cards: GiftCard[];
  copyIcon: string;
  giftImage: string;
  onCopy: (value: string) => void;
};

export default function GiftSection({
  cards,
  giftImage,
  onCopy,
}: GiftSectionProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (card: GiftCard) => {
    onCopy(card.copy);
    setCopiedKey(card.detail);
    setTimeout(() => {
      setCopiedKey((prev) => (prev === card.detail ? null : prev));
    }, 2000);
  };

  return (
    <section id="gift" data-section className="snap-section">
      <div className="content-card gift-card">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="flex justify-center items-end gap-4 mt-0 mb-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="wedding-gift reanimate fade delay-1"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.42)), url(${giftImage})`,
            }}
          />
          <h4 className="belgantFont w-5/12 text-3xl md:text-3xl text-left">
            WEDDING GIFT
          </h4>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.4 }}
          className="section-copy reanimate up delay-4 text-xs"
        >
          The greatest gift is having you with us. If you&apos;d like to give a token
          of love, we would be truly grateful.
        </motion.h2>

        <div className="gift-panel is-open">
          <div className="gift-grid">
            {cards.map((card, idx) => {
              const isCopied = copiedKey === card.detail;
              return (
                <motion.article
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.75, delay: 0.5 + idx * 0.15 }}
                  key={card.title}
                  className="bca-atm-card"
                >
                  {/* Subtle ATM card sheen & watermark */}
                  <div className="bca-card-sheen" />

                  {/* Header: Bank BCA Logo & Gold EMV Smart Chip */}
                  <div className="bca-card-header">
                    <div className="bca-logo-container">
                      <Image
                        src={card.logo}
                        alt={card.kind === "bank" ? "Bank BCA" : "Logo"}
                        width={90}
                        height={32}
                        className="bca-logo-img"
                        priority
                      />
                    </div>

                    {/* Gold EMV Chip */}
                    <div className="bca-emv-chip" aria-label="EMV Chip">
                      <div className="bca-chip-line-h" />
                      <div className="bca-chip-line-v1" />
                      <div className="bca-chip-line-v2" />
                      <div className="bca-chip-core" />
                    </div>
                  </div>

                  {/* Body: Account Number & Account Holder Name */}
                  <div className="bca-card-body">
                    <p className="bca-account-number select-all">
                      {card.detail}
                    </p>
                    <p className="bca-holder-name">
                      {card.title}
                    </p>
                  </div>

                  {/* Footer: Full-width Pill Copy Button */}
                  <button
                    type="button"
                    className={`bca-copy-btn ${isCopied ? "is-copied" : ""}`}
                    onClick={() => handleCopy(card)}
                  >
                    {isCopied ? (
                      <>
                        <Check size={16} />
                        <span>NOMOR TERSALIN</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>SALIN REKENING</span>
                      </>
                    )}
                  </button>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
