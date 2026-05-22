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
  giftOpen,
  toggleGiftOpen,
  cards,
  copyIcon,
  giftImage,
  onCopy,
}: GiftSectionProps) {
  return (
    <section id="gift" data-section className="snap-section">
      <div className="content-card gift-card">
        <div
          className="gift-visual reanimate fade delay-1"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.42)), url(${giftImage})`,
          }}
        />
        <p className="card-eyebrow reanimate fade delay-3">WEDDING GIFT</p>
        <p className="section-copy reanimate up delay-4">
          The greatest gift is having you with us. If you&apos;d like to give a token
          of love, we would be truly grateful.
        </p>

        <div className={`gift-panel ${giftOpen ? "is-open" : ""}`}>
          <div className="gift-panel-head">
            <button
              type="button"
              className={`text-button ${giftOpen ? "is-visible" : ""}`}
              onClick={() => toggleGiftOpen()}
            >
              CLOSE
            </button>
            <button type="button" className="pill-button" onClick={toggleGiftOpen}>
              SEND GIFT
            </button>
          </div>

          <div className="gift-grid">
            {cards.map((card) => (
              <article key={card.title} className="gift-option">
                <div className="gift-icon-wrap">
                  <img
                    src={card.logo}
                    alt={card.kind === "bank" ? "Bank logo" : "Gift icon"}
                    className={card.kind === "bank" ? "bank-logo" : "gift-logo"}
                  />
                </div>
                <div className="gift-body">
                  <h3>{card.title}</h3>
                  <p>{card.detail}</p>
                </div>
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => onCopy(card.copy)}
                >
                  <img src={copyIcon} alt="Copy" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
