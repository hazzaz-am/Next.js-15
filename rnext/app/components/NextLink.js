"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NextLink({ path, prefetch = true, children }) {
	const pathName = usePathname();
	const activeClass = "text-blue-500 font-bold";
	const inactiveClass = "text-gray-500";

	const isActive = pathName === path;

	return (
		<Link
			prefetch={prefetch}
			href={path}
			className={isActive ? activeClass : inactiveClass}
		>
			{children}
		</Link>
	);
}
