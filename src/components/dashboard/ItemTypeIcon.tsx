import {
  Code,
  File,
  Image,
  Link,
  type LucideIcon,
  Sparkles,
  StickyNote,
  Terminal,
} from "lucide-react";
import type { CSSProperties } from "react";

const ICON_MAP: Record<string, LucideIcon> = {
  code: Code,
  sparkles: Sparkles,
  terminal: Terminal,
  "sticky-note": StickyNote,
  file: File,
  image: Image,
  link: Link,
};

interface ItemTypeIconProps {
  icon: string;
  className?: string;
  style?: CSSProperties;
}

export const ItemTypeIcon = ({ icon, className, style }: ItemTypeIconProps) => {
  const Icon = ICON_MAP[icon] ?? Code;
  return <Icon aria-hidden className={className} style={style} />;
};
