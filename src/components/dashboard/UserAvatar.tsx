"use client";

import { Settings } from "lucide-react";

import type { DashboardSidebarUser } from "@/components/dashboard/sidebar-types";
import { cn } from "@/lib/utils";

export interface UserAvatarProps {
  user: DashboardSidebarUser;
  collapsed: boolean;
}

export const UserAvatar = ({ user, collapsed }: UserAvatarProps) => {
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        "mt-auto flex items-center gap-3 border-t border-border pt-4",
        collapsed && "justify-center pt-3",
      )}
    >
      {user.image ? (
        <div
          className="h-9 w-9 shrink-0 rounded-full bg-cover bg-center"
          role="img"
          aria-label={`${user.name} profile photo`}
          style={{ backgroundImage: `url(${user.image})` }}
        />
      ) : (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium text-foreground">
          {initials}
        </div>
      )}
      {!collapsed && (
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-foreground">
            {user.name}
          </p>
          <p className="truncate text-xs text-muted-foreground">{user.email}</p>
        </div>
      )}
      {!collapsed && (
        <button
          type="button"
          className="shrink-0 rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Settings"
        >
          <Settings aria-hidden className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
