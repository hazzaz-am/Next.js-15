import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
	const authObj = await auth();
	const currObj = await currentUser();

	console.log("Auth Obj", authObj);
	console.log("Current Obj", currObj);
	return <div>DashboardPage</div>;
}
