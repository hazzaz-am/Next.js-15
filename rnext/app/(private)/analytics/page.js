import NavigateButton from "@/app/components/NavigateButton";

export const metadata = {
	title: "Analytics - Dashboard",
	description: "View your account analytics",
};

export default function Analytics() {
	return (
		<>
			<div className="text-2xl text-blue-600">Analytics Page</div>
			<NavigateButton path="/dashboard/settings">
				Go to Settings
			</NavigateButton>
		</>
	);
}
