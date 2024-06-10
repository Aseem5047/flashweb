import About from "@/components/sections/About";
import CheckoutBanner from "@/components/sections/CheckoutBanner";
import Hero from "@/components/sections/Hero";
import Info from "@/components/sections/Info";
import OwnApp from "@/components/sections/OwnApp";
import ShareLink from "@/components/sections/ShareLink";
import SwitchToggle from "@/components/sections/SwitchToggle";
import React from "react";

const HomePage = () => {
	return (
		<main className="grid grid-cols-1 items-center">
			{/* Hero Section */}
			<Hero />
			{/* About section */}
			<About />
			{/* Switch toggle section */}
			<SwitchToggle />
			{/* Checkout Banner section */}
			<CheckoutBanner />
			{/* Share Link Section */}
			<ShareLink />
			{/* Own App Section */}
			<OwnApp />
			{/* Accordion Section */}
			<Info />
		</main>
	);
};

export default HomePage;
