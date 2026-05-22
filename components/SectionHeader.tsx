import { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  children?: ReactNode;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  children,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`.trim()}>
      <p className="card-eyebrow reanimate fade">{eyebrow}</p>
      <div className="divider reanimate fade delay-2" />
      {children}
    </div>
  );
}
