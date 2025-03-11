import { cookies } from "next/headers";

const DashboardPage = async () => {
	// console.log('DashboardPage is Server Component');
	const cookieStore = await cookies();
	const theme = cookieStore.get("theme");
	console.log("theme", theme);
	return (
		<div>
			<h1>Dashboard</h1>
			<input
				type="text"
				name="name"
				id="name"
				className="border-2 border-white"
			/>
		</div>
	);
};
export default DashboardPage;
