import Image from "next/image";
import { motion } from 'framer-motion'
import { storyImage } from "@/lib/invitationData";

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
  copyIcon,
  giftImage,
  onCopy,
}: GiftSectionProps) {
  return (
    <section id="gift" data-section className="snap-section">
      <div className="content-card gift-card">
        {/* <div
          className="gift-visual reanimate fade delay-1"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.42)), url(${giftImage})`,
          }}
        />
        <p className="card-eyebrow reanimate fade delay-3">WEDDING GIFT</p> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="flex justify-center items-end gap-4 my-6"
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
          >
          </motion.div>
          <h4 className="belgantFont w-5/12 text-3xl md:text-3xl text-left">
            WEDDING GIFT
          </h4>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.4 }}
          className="section-copy reanimate up delay-4 text-sm">
          The greatest gift is having you with us. If you&apos;d like to give a token
          of love, we would be truly grateful.
        </motion.h2>

        <div className="gift-panel is-open">
          <div className="gift-grid">
            {cards.map((card) => (
              <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.75, delay: 0.6 }}
                key={card.title} className="gift-option">
                <div className="gift-icon-wrap">
                  <Image
                    src={card.logo}
                    alt={card.kind === "bank" ? "Bank logo" : "Gift icon"}
                    className={card.kind === "bank" ? "bank-logo" : "gift-logo"}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="gift-body">
                  <h3>{card.title}</h3>
                  <h3>{card.detail}</h3>
                </div>
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => onCopy(card.copy)}
                >
                  <Image
                    src={copyIcon}
                    alt="Copy"
                    width={40}
                    height={40}
                  />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
