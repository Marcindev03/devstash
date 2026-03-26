/** URL segment under `/items/...` — matches spec examples like `/items/snippets`. */
const SLUG_TO_PATH: Record<string, string> = {
  snippet: "snippets",
  prompt: "prompts",
  command: "commands",
  note: "notes",
  file: "files",
  image: "images",
  url: "links",
};

export const itemTypePathSegment = (slug: string): string =>
  SLUG_TO_PATH[slug] ?? slug;

export const pathSegmentToItemTypeSlug = (
  segment: string,
): string | undefined => {
  const entry = Object.entries(SLUG_TO_PATH).find(
    ([, path]) => path === segment,
  );
  if (entry) return entry[0];
  if (Object.hasOwn(SLUG_TO_PATH, segment)) return segment;
  return undefined;
};
