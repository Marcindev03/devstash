/**
 * Single source of mock data for the dashboard UI until a database exists.
 * Field shapes follow context/project-spec.md (USER, ITEM, ITEMTYPE, COLLECTION, TAG, ITEMCOLLECTION).
 */

/** USER (extends NextAuth) — spec fields: isPro, stripeCustomerId, stripeSubscriptionId */
export const mockUser = {
  id: "user_mock_1",
  name: "John Doe",
  email: "john@example.com",
  image: null as string | null,
  isPro: false,
  stripeCustomerId: null as string | null,
  stripeSubscriptionId: null as string | null,
} as const;

/** ITEMTYPE — spec: id, name, icon, color, isSystem; user null for system types */
export const mockItemTypes = [
  {
    id: "type_snippet",
    name: "Snippets",
    slug: "snippet",
    icon: "code",
    color: "#3b82f6",
    isSystem: true,
    userId: null as string | null,
    itemCount: 24,
  },
  {
    id: "type_prompt",
    name: "Prompts",
    slug: "prompt",
    icon: "sparkles",
    color: "#8b5cf6",
    isSystem: true,
    userId: null as string | null,
    itemCount: 18,
  },
  {
    id: "type_command",
    name: "Commands",
    slug: "command",
    icon: "terminal",
    color: "#f97316",
    isSystem: true,
    userId: null as string | null,
    itemCount: 15,
  },
  {
    id: "type_note",
    name: "Notes",
    slug: "note",
    icon: "sticky-note",
    color: "#fde047",
    isSystem: true,
    userId: null as string | null,
    itemCount: 12,
  },
  {
    id: "type_file",
    name: "Files",
    slug: "file",
    icon: "file",
    color: "#6b7280",
    isSystem: true,
    userId: null as string | null,
    itemCount: 5,
  },
  {
    id: "type_image",
    name: "Images",
    slug: "image",
    icon: "image",
    color: "#ec4899",
    isSystem: true,
    userId: null as string | null,
    itemCount: 3,
  },
  {
    id: "type_url",
    name: "Links",
    slug: "url",
    icon: "link",
    color: "#10b981",
    isSystem: true,
    userId: null as string | null,
    itemCount: 8,
  },
] as const;

/** COLLECTION — spec: id, name, description, isFavorite, defaultTypeId, createdAt, updatedAt + user */
export const mockCollections = [
  {
    id: "col_react_patterns",
    userId: "user_mock_1",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    isFavorite: true,
    defaultTypeId: "type_snippet",
    createdAt: "2024-06-01T10:00:00.000Z",
    updatedAt: "2025-01-10T14:00:00.000Z",
    itemCount: 12,
    includedTypeIds: ["type_snippet", "type_note", "type_url"] as const,
  },
  {
    id: "col_python_snippets",
    userId: "user_mock_1",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    isFavorite: false,
    defaultTypeId: "type_snippet",
    createdAt: "2024-07-15T11:30:00.000Z",
    updatedAt: "2025-01-08T09:00:00.000Z",
    itemCount: 8,
    includedTypeIds: ["type_snippet", "type_note"] as const,
  },
  {
    id: "col_context_files",
    userId: "user_mock_1",
    name: "Context Files",
    description: "AI context files for projects",
    isFavorite: true,
    defaultTypeId: "type_file",
    createdAt: "2024-08-20T16:00:00.000Z",
    updatedAt: "2025-01-05T12:00:00.000Z",
    itemCount: 5,
    includedTypeIds: ["type_file", "type_note"] as const,
  },
  {
    id: "col_interview_prep",
    userId: "user_mock_1",
    name: "Interview Prep",
    description: "Technical interview preparation",
    isFavorite: false,
    defaultTypeId: "type_note",
    createdAt: "2024-09-01T08:00:00.000Z",
    updatedAt: "2025-01-02T18:00:00.000Z",
    itemCount: 24,
    includedTypeIds: [
      "type_note",
      "type_snippet",
      "type_url",
      "type_prompt",
    ] as const,
  },
  {
    id: "col_git_commands",
    userId: "user_mock_1",
    name: "Git Commands",
    description: "Frequently used git commands",
    isFavorite: true,
    defaultTypeId: "type_command",
    createdAt: "2024-10-10T12:00:00.000Z",
    updatedAt: "2025-01-11T10:00:00.000Z",
    itemCount: 15,
    includedTypeIds: ["type_command", "type_note"] as const,
  },
  {
    id: "col_ai_prompts",
    userId: "user_mock_1",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    isFavorite: false,
    defaultTypeId: "type_prompt",
    createdAt: "2024-11-01T09:00:00.000Z",
    updatedAt: "2025-01-09T15:30:00.000Z",
    itemCount: 18,
    includedTypeIds: ["type_prompt", "type_snippet", "type_note"] as const,
  },
] as const;

/** TAG — spec: id, name */
export const mockTags = [
  { id: "tag_react", name: "react" },
  { id: "tag_auth", name: "auth" },
  { id: "tag_hooks", name: "hooks" },
] as const;

/** ITEM — spec: id, title, contentType, content, fileUrl, fileName, fileSize, url, description, isFavorite, isPinned, language, createdAt, updatedAt + type/user relations */
export const mockItems = [
  {
    id: "item_use_auth_hook",
    userId: "user_mock_1",
    title: "useAuth Hook",
    contentType: "text" as const,
    content:
      "export function useAuth() {\n  // ...\n  return { user, signIn, signOut };\n}",
    fileUrl: null as string | null,
    fileName: null as string | null,
    fileSize: null as number | null,
    url: null as string | null,
    description: "Custom authentication hook for React applications",
    isFavorite: true,
    isPinned: true,
    language: "typescript",
    typeId: "type_snippet",
    createdAt: "2025-01-15T12:00:00.000Z",
    updatedAt: "2025-01-15T12:00:00.000Z",
  },
  {
    id: "item_api_error_handling",
    userId: "user_mock_1",
    title: "API Error Handling Pattern",
    contentType: "text" as const,
    content:
      "async function fetchWithRetry(url: string, options?: RequestInit) {\n  // exponential backoff\n}",
    fileUrl: null as string | null,
    fileName: null as string | null,
    fileSize: null as number | null,
    url: null as string | null,
    description: "Fetch wrapper with exponential backoff retry logic",
    isFavorite: false,
    isPinned: true,
    language: "typescript",
    typeId: "type_snippet",
    createdAt: "2025-01-12T09:30:00.000Z",
    updatedAt: "2025-01-12T09:30:00.000Z",
  },
] as const;

/** ITEMCOLLECTION — spec: itemId, collectionId, addedAt */
export const mockItemCollections = [
  {
    itemId: "item_use_auth_hook",
    collectionId: "col_react_patterns",
    addedAt: "2025-01-15T12:00:00.000Z",
  },
  {
    itemId: "item_api_error_handling",
    collectionId: "col_react_patterns",
    addedAt: "2025-01-12T09:30:00.000Z",
  },
] as const;

/** Item–tag join (spec lists TAG + ITEM fields for tag relations; not a separate table name in spec) */
export const mockItemTags = [
  { itemId: "item_use_auth_hook", tagId: "tag_react" },
  { itemId: "item_use_auth_hook", tagId: "tag_auth" },
  { itemId: "item_use_auth_hook", tagId: "tag_hooks" },
] as const;

export const mockData = {
  user: mockUser,
  itemTypes: mockItemTypes,
  collections: mockCollections,
  tags: mockTags,
  items: mockItems,
  itemCollections: mockItemCollections,
  itemTags: mockItemTags,
} as const;
