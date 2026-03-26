"use client";

import { ChevronDown } from "lucide-react";
import { type ReactNode, useState } from "react";

import { cn } from "@/lib/utils";

export type SidebarCollapsibleCollapsedMode = "compact" | "hidden";

export interface SidebarCollapsibleSectionProps {
  name: string;
  children: ReactNode;
  defaultOpen?: boolean;
  collapsed?: boolean;
  collapsedMode?: SidebarCollapsibleCollapsedMode;
}

export const SidebarCollapsibleSection = ({
  name,
  children,
  defaultOpen = true,
  collapsed = false,
  collapsedMode = "compact",
}: SidebarCollapsibleSectionProps) => {
  const [open, setOpen] = useState(defaultOpen);

  if (collapsed && collapsedMode === "hidden") {
    return null;
  }

  if (collapsed && collapsedMode === "compact") {
    return (
      <section aria-label={name} className="flex flex-col">
        {children}
      </section>
    );
  }

  return (
    <section>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mb-2 flex w-full items-center justify-between gap-2 rounded-md py-1.5 pl-1 pr-2 text-left text-xs font-semibold tracking-wide text-muted-foreground hover:bg-muted/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        aria-expanded={open}
      >
        <span>{name}</span>
        <ChevronDown
          aria-hidden
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            !open && "-rotate-90",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">{children}</div>
      </div>
    </section>
  );
};
