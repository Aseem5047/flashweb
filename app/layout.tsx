import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Flashcall",
	description: "Some Description about the organization",
	icons: {
		icon: "/icons/logoMobile.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="no-scrollbar overflow-x-clip">{children}</body>
		</html>
	);
}
