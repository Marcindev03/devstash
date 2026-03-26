import Link from "next/link";
import { notFound } from "next/navigation";

import { mockData } from "@/lib/mock-data";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const collection = mockData.collections.find((c) => c.id === id);

  if (!collection) {
    notFound();
  }

  return (
    <div className="p-4 md:p-6">
      <p className="text-sm text-muted-foreground">
        <Link
          className="text-foreground underline-offset-4 hover:underline"
          href="/dashboard"
        >
          Dashboard
        </Link>
        <span aria-hidden className="px-1 text-muted-foreground">
          /
        </span>
        <span>Collections</span>
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight">
        {collection.name}
      </h1>
      <p className="mt-1 text-muted-foreground">{collection.description}</p>
      <p className="mt-4 text-sm text-muted-foreground">
        Placeholder page until collections are implemented end-to-end.
      </p>
    </div>
  );
}
