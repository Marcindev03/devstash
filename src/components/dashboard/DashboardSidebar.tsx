"use client";

import { Folder, Star } from "lucide-react";
import Link from "next/link";

import { ItemTypeIcon } from "@/components/dashboard/ItemTypeIcon";
import { SidebarCollapsibleSection } from "@/components/dashboard/SidebarCollapsibleSection";
import type { DashboardSidebarUser } from "@/components/dashboard/sidebar-types";
import { UserAvatar } from "@/components/dashboard/UserAvatar";
import { itemTypePathSegment } from "@/lib/items-path";
import { cn } from "@/lib/utils";

export type { DashboardSidebarUser };

export interface DashboardSidebarItemType {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
  itemCount: number;
}

export interface DashboardSidebarCollection {
  id: string;
  name: string;
  isFavorite: boolean;
  itemCount: number;
}

interface DashboardSidebarProps {
  user: DashboardSidebarUser;
  itemTypes: DashboardSidebarItemType[];
  favoriteCollections: DashboardSidebarCollection[];
  allCollections: DashboardSidebarCollection[];
  collapsed: boolean;
  onNavigate?: () => void;
  className?: string;
}

export const DashboardSidebar = ({
  user,
  itemTypes,
  favoriteCollections,
  allCollections,
  collapsed,
  onNavigate,
  className,
}: DashboardSidebarProps) => {
  const handleNav = () => {
    onNavigate?.();
  };

  return (
    <div className={cn("flex h-full min-h-0 flex-col gap-6", className)}>
      <div
        className={cn("flex items-center gap-2", collapsed && "justify-center")}
      >
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-indigo-600"
          aria-hidden
        />
        {!collapsed && (
          <Link
            href="/dashboard"
            className="truncate text-lg font-semibold tracking-tight text-foreground"
            onClick={handleNav}
          >
            DevStash
          </Link>
        )}
      </div>

      <nav
        className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto"
        aria-label="Dashboard"
      >
        <SidebarCollapsibleSection
          name="Types"
          collapsed={collapsed}
          collapsedMode="compact"
        >
          <ul
            className={cn(
              "flex flex-col",
              collapsed ? "items-center gap-2" : "gap-0.5",
            )}
          >
            {itemTypes.map((t) => (
              <li key={t.id}>
                <Link
                  href={`/items/${itemTypePathSegment(t.slug)}`}
                  className={cn(
                    "flex items-center rounded-md py-2 text-sm text-foreground hover:bg-muted",
                    collapsed ? "justify-center px-0" : "gap-3 pl-1 pr-2",
                  )}
                  title={collapsed ? t.name : undefined}
                  onClick={handleNav}
                >
                  <ItemTypeIcon
                    icon={t.icon}
                    className="h-4 w-4 shrink-0"
                    style={{ color: t.color }}
                  />
                  {!collapsed && (
                    <>
                      <span className="min-w-0 flex-1 truncate">{t.name}</span>
                      <span className="tabular-nums text-muted-foreground">
                        {t.itemCount}
                      </span>
                    </>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </SidebarCollapsibleSection>

        <hr
          className={cn(
            "my-0 border-0 border-t border-border",
            collapsed && "hidden",
          )}
          aria-hidden
        />

        <SidebarCollapsibleSection
          name="Collections"
          collapsed={collapsed}
          collapsedMode="hidden"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <p className="pl-1 pr-2 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                Favorites
              </p>
              <ul className="flex flex-col gap-0.5">
                {favoriteCollections.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`/collections/${c.id}`}
                      className="flex min-w-0 items-center gap-2 rounded-md py-2 pl-1 pr-2 text-sm hover:bg-muted"
                      onClick={handleNav}
                    >
                      <Folder
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-muted-foreground"
                      />
                      <span className="min-w-0 flex-1 truncate">{c.name}</span>
                      <Star
                        aria-hidden
                        className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <p className="pl-1 pr-2 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                All collections
              </p>
              <ul className="flex flex-col gap-0.5">
                {allCollections.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`/collections/${c.id}`}
                      className="flex min-w-0 items-center gap-2 rounded-md py-2 pl-1 pr-2 text-sm hover:bg-muted"
                      onClick={handleNav}
                    >
                      <Folder
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-muted-foreground"
                      />
                      <span className="min-w-0 flex-1 truncate">{c.name}</span>
                      <span className="shrink-0 tabular-nums text-muted-foreground">
                        {c.itemCount}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SidebarCollapsibleSection>
      </nav>

      <UserAvatar user={user} collapsed={collapsed} />
    </div>
  );
};
