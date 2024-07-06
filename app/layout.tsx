import "./globals.css";
import { Metadata } from "next";
import Script from "next/script"; // Import the Script component from next/script

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
					strategy="afterInteractive"
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-1GY673B37C"
				></Script>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-1GY673B37C', {
						'cookie_domain': 'flashcall.me'
					});
					`}
				</Script>
			</head>
			<body className="no-scrollbar overflow-x-clip">{children}</body>
		</html>
	);
}
