import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";

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
			<head>
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=G-1GY673B37C`}
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-1GY673B37C');
					`}
				</Script>
			</head>
			<body className="no-scrollbar overflow-x-clip">{children}</body>
		</html>
	);
}
