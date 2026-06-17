export const USER_ROLES = [
  "owner",
  "supervisor",
  "moderator",
  "regular"
] as const;

export type UserRole = (typeof USER_ROLES)[number];

export const ROLE_LABELS: Record<UserRole, string> = {
  owner: "Propietario",
  supervisor: "Supervisor",
  moderator: "Moderador",
  regular: "Usuario regular"
};

export const ROLE_PERMISSIONS = {
  manageUsers: ["owner", "supervisor"],
  manageSongs: ["owner", "supervisor", "moderator"],
  manageCategories: ["owner", "supervisor", "moderator"],
  manageRepertoires: ["owner", "supervisor", "moderator"],
  readLibrary: ["owner", "supervisor", "moderator", "regular"]
} as const satisfies Record<string, readonly UserRole[]>;

export type RolePermission = keyof typeof ROLE_PERMISSIONS;

export function roleCan(role: UserRole, permission: RolePermission): boolean {
  const allowedRoles: readonly UserRole[] = ROLE_PERMISSIONS[permission];

  return allowedRoles.includes(role);
}

export type EntityId = string;

export interface UserSummary {
  id: EntityId;
  displayName: string;
  role: UserRole;
  isActive: boolean;
}

export interface Category {
  id: EntityId;
  name: string;
  description?: string;
}

export interface Song {
  id: EntityId;
  title: string;
  author?: string;
  lyrics: string;
  notes?: string;
  categoryIds: EntityId[];
}

export interface RepertoireSong {
  songId: EntityId;
  order: number;
  tagIds: EntityId[];
}

export interface RepertoireTag {
  tagId: EntityId;
  name: string;
  color: "slate" | "red" | "amber" | "green" | "blue" | "purple";
}

export interface Repertoire {
  id: EntityId;
  name: string;
  description?: string;
  tags: RepertoireTag[];
  songs: RepertoireSong[];
}
