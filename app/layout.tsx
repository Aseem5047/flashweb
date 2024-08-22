import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
	title: "FlashCall.me",
	description: "Application Connecting People",
	icons: {
		icon: "/icons/logoDarkCircle.png",
	},

	openGraph: {
		type: "article",
		url: "https://flashcall.me",
		title: "FlashCall",
		description: "Application Connecting People",
		images: "/icons/logoDarkCircle.png",
		siteName: "Flashcall.me",
		locale: "en_US",
	},

	twitter: {
		card: "summary_large_image",
		site: "https://flashcall.me",
		title: "FlashCall",
		description: "Application Connecting People",
		images: "/icons/logoDarkCircle.png",
		creator: "@johndoe",
	},
	metadataBase:
		process.env.NODE_ENV === "production"
			? new URL("https://flashcall.me")
			: new URL("http://localhost:3000"),
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
