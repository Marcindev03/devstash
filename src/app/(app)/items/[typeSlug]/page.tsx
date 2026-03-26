import Link from "next/link";
import { notFound } from "next/navigation";
import { pathSegmentToItemTypeSlug } from "@/lib/items-path";
import { mockData } from "@/lib/mock-data";

export default async function ItemsByTypePage({
  params,
}: {
  params: Promise<{ typeSlug: string }>;
}) {
  const { typeSlug } = await params;
  const slug = pathSegmentToItemTypeSlug(typeSlug);
  const itemType = slug
    ? mockData.itemTypes.find((t) => t.slug === slug)
    : undefined;

  if (!itemType) {
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
        <span>{itemType.name}</span>
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight">
        {itemType.name}
      </h1>
      <p className="mt-1 text-muted-foreground">
        Placeholder list for this type ({itemType.itemCount} items in mock
        data).
      </p>
    </div>
  );
}
