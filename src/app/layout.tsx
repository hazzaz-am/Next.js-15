"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const navLinks = [
	{ name: "Login", href: "/login" },
	{ name: "Register", href: "/register" },
	{ name: "Forgot Password", href: "/forgot-password" },
];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathName = usePathname();

	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<header className="text-white bg-blue-500 py-4 mb-8 text-center">
					{navLinks.map((link) => {
						const isActive =
							pathName === link.href ||
							(pathName.startsWith(link.href) && pathName !== "/");
						return (
							<Link
								key={link.name}
								href={link.href}
								className={`mr-4 ${
									isActive ? "text-black font-bold" : "text-white"
								}`}
							>
								{link.name}
							</Link>
						);
					})}
				</header>
				{children}
				<footer className="bg-[#d4d4d4] py-4 mt-8 text-center">
					<p>Footer</p>
				</footer>
			</body>
		</html>
	);
}
