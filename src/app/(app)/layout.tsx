import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { mockData } from "@/lib/mock-data";

const mapCollection = (collection: (typeof mockData.collections)[number]) => ({
  id: collection.id,
  name: collection.name,
  isFavorite: collection.isFavorite,
  itemCount: collection.itemCount,
});

export default function AppShellLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const favoriteCollections = mockData.collections.filter(
    (collection) => collection.isFavorite,
  );
  const favoriteIds = new Set<string>(
    favoriteCollections.map((collection) => collection.id),
  );
  const allCollections = [...mockData.collections]
    .filter((collection) => !favoriteIds.has(collection.id))
    .sort((left, right) => left.name.localeCompare(right.name));

  const itemTypes = mockData.itemTypes.map((itemType) => ({
    id: itemType.id,
    name: itemType.name,
    slug: itemType.slug,
    icon: itemType.icon,
    color: itemType.color,
    itemCount: itemType.itemCount,
  }));

  return (
    <DashboardShell
      user={{
        name: mockData.user.name,
        email: mockData.user.email,
        image: mockData.user.image,
      }}
      itemTypes={itemTypes}
      favoriteCollections={favoriteCollections.map(mapCollection)}
      allCollections={allCollections.map(mapCollection)}
    >
      {children}
    </DashboardShell>
  );
}
