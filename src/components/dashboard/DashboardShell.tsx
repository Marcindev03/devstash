"use client";

import { PanelLeft, Plus, Search } from "lucide-react";
import { useCallback, useState } from "react";
import { useIsClient } from "usehooks-ts";

import {
  DashboardSidebar,
  type DashboardSidebarCollection,
  type DashboardSidebarItemType,
  type DashboardSidebarUser,
} from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface DashboardShellProps {
  user: DashboardSidebarUser;
  itemTypes: DashboardSidebarItemType[];
  favoriteCollections: DashboardSidebarCollection[];
  allCollections: DashboardSidebarCollection[];
  children: React.ReactNode;
}

export const DashboardShell = ({
  user,
  itemTypes,
  favoriteCollections,
  allCollections,
  children,
}: DashboardShellProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const isClient = useIsClient();

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const toggleSidebar = () => {
    if (!isClient) return;
    if (window.matchMedia("(min-width: 768px)").matches) {
      setDesktopCollapsed((prev) => !prev);
    } else {
      setMobileOpen((prev) => !prev);
    }
  };

  const sidebarProps = {
    user,
    itemTypes,
    favoriteCollections,
    allCollections,
    collapsed: desktopCollapsed,
    onNavigate: closeMobile,
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          id="dashboard-mobile-drawer"
          side="left"
          className="w-[min(100vw,18rem)] max-w-none gap-0 border-border py-4 pl-2 pr-4 sm:max-w-[18rem]"
        >
          <SheetTitle className="sr-only">Main navigation</SheetTitle>
          <DashboardSidebar
            {...sidebarProps}
            collapsed={false}
            className="h-full"
          />
        </SheetContent>
      </Sheet>

      <aside
        className={cn(
          "relative hidden shrink-0 flex-col border-r border-border bg-background transition-[width] duration-200 ease-out md:flex",
          desktopCollapsed ? "w-16 px-2 py-4" : "w-60 py-4 pl-2 pr-4",
        )}
      >
        <DashboardSidebar
          {...sidebarProps}
          collapsed={desktopCollapsed}
          className="h-full"
        />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="border-b border-border bg-background">
          <div className="flex h-14 w-full items-center justify-between gap-3 px-4 md:px-6">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <Button
                className="h-8 w-8 shrink-0 p-0"
                type="button"
                variant="outline"
                aria-expanded={mobileOpen}
                aria-pressed={desktopCollapsed}
                aria-controls="dashboard-mobile-drawer"
                onClick={toggleSidebar}
              >
                <PanelLeft aria-hidden className="h-4 w-4" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
              <div className="relative w-full max-w-sm min-w-0 md:min-w-[220px]">
                <Search
                  aria-hidden
                  className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  aria-label="Search"
                  className="h-9 border-muted bg-card pl-9 pr-14"
                  placeholder="Search items..."
                />
                <span className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground">
                  K
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Button
                className="h-9 flex items-center gap-2 px-3"
                type="button"
                variant="outline"
              >
                <Plus aria-hidden className="h-4 w-4" />
                New Collection
              </Button>
              <Button
                className="h-9 flex items-center gap-2 px-3"
                type="button"
              >
                <Plus aria-hidden className="h-4 w-4" />
                New Item
              </Button>
            </div>
          </div>
        </header>

        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};
