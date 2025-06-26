"use client";

import { useRouter } from "next/navigation";

export default function NavigateButton({ children, path }) {
	const router = useRouter();

	const handleNavigate = () => {
		router.push(path);
	};

	return (
		<button
			className="bg-blue-600 px-3 py-2 text-white"
			onClick={handleNavigate}
		>
			{children}
		</button>
	);
}
