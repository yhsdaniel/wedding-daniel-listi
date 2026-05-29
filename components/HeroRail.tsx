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
