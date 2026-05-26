import { MenuItem } from "@/app/types";

type HeroRailProps = {
  heroImage: string;
  menuItems: MenuItem[];
  activeSection: string;
  mobileMenuOpen: boolean;
  onNavigate: (id: string) => void;
  onToggleMobileMenu: () => void;
};

export default function HeroRail({
  heroImage,
  menuItems,
  activeSection,
  mobileMenuOpen,
  onNavigate,
  onToggleMobileMenu,
}: HeroRailProps) {
  return (
    <>
      <aside className="hero-rail">
        <div
          className="hero-visual"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.82)), url(${heroImage})`,
          }}
        >
          <p className="hero-kicker reanimate fade">THE WEDDING OF</p>
          <div className="hero-title-wrap">
            <span className="hero-ghost reanimate fade delay-2">D L</span>
            <h1 className="hero-title reanimate fade delay-3">Daniel</h1>
            <h1 className="hero-title reanimate fade delay-4">Listi</h1>
          </div>
          <nav className="hero-menu" aria-label="Invitation sections">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`hero-menu-link reanimate left ${
                  activeSection === item.id ? "is-active" : ""
                } delay-1`}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <p className="hero-note reanimate fade delay-6">
            We apologize if there is any misspelling of name or title.
          </p>
        </div>
      </aside>

      <button
        type="button"
        className="mobile-menu-button"
        onClick={onToggleMobileMenu}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-navigation"
      >
        Menu
      </button>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${mobileMenuOpen ? "is-open" : ""}`}
      >
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`mobile-menu-link ${
              activeSection === item.id ? "is-active" : ""
            }`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
