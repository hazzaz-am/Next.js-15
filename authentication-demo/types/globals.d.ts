
export type Roles = "admin" | "moderator";

declare global {
	interface CustomJwtSessionsClaims {
		metadata: {
			role?: Roles;
		};
	}
}
