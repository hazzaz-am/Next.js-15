import NavigateButton from "@/app/components/NavigateButton";
import SortProducts from "@/app/components/SortProducts";
import { Suspense } from "react";

export const metadata = {
	title: "Settings - Dashboard",
	description: "Manage your account settings",
};

export default function Settings() {
	return (
		<>
			<div className="text-2xl text-red-600">Settings Page</div>
			<NavigateButton path="/dashboard/analytics">
				Go to Analytics
			</NavigateButton>
			<Suspense>
				<SortProducts />
			</Suspense>
		</>
	);
}
