import { PanelLeft, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3 px-4 md:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <Button className="h-8 w-8 p-0" type="button" variant="outline">
              <PanelLeft aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
            <div className="relative w-full max-w-sm min-w-[220px]">
              <Search
                aria-hidden="true"
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
          <div className="flex items-center gap-2">
            <Button
              className="h-9 px-3 flex items-center gap-2"
              type="button"
              variant="outline"
            >
              <Plus aria-hidden="true" className="h-4 w-4" />
              New Collection
            </Button>
            <Button className="h-9 px-3 flex items-center gap-2" type="button">
              <Plus aria-hidden="true" className="h-4 w-4" />
              New Item
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 p-4 md:p-6">
        <section className="grid gap-4 md:grid-cols-[240px_1fr]">
          <aside className="border-r border-border p-4 md:min-h-[calc(100vh-8.5rem)]">
            <h2 className="text-xl font-semibold">Sidebar</h2>
          </aside>
          <section className="p-4">
            <h2 className="text-xl font-semibold">Main</h2>
          </section>
        </section>
      </div>
    </main>
  );
}
