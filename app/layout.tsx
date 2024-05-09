import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/top_nav_bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SafeMed",
	description: "Protecting Health, Securing Data",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<TopNavBar />
				{children}
			</body>
		</html>
	);
}
