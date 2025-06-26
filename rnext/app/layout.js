import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextLink from "./components/NextLink";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<nav>
					<ul className="flex space-x-4 p-4 border-b">
						<li>
							<NextLink path="/analytics">Analytics</NextLink>
						</li>
						<li>
							<NextLink path="/settings">Settings</NextLink>
						</li>
						<li>
							<NextLink path="/blogs">Blogs</NextLink>
						</li>
						<li>
							<NextLink path="/posts">Posts</NextLink>
						</li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	);
}
