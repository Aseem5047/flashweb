import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
	const theme = `5px 5px 5px 0px #232323`;
	return (
		<nav className="sticky top-0 bg-white md:bg-transparent blurEffect w-full md:px-14 lg:px-24 z-40 py-2">
			<section className="flex items-center justify-between px-3 xs:px-5 md:px-10 py-2 md:bg-primary rounded-full border border-white">
				{/* logo */}
				<Link href="/" className="hidden md:block">
					<Image
						src="/icons/logoFooter.png"
						alt="logo"
						width={1000}
						height={1000}
						className="rounded-[4px] w-full h-10 hoverScaleEffect p-2 border border-black"
						style={{
							boxShadow: theme,
						}}
					/>
				</Link>

				<Link href="/" className="md:hidden">
					<Image
						src="/icons/logoMobile.png"
						alt="logo"
						width={1000}
						height={1000}
						className="rounded-[4px] w-12 h-12 border border-black hoverScaleEffect"
						style={{
							boxShadow: theme,
						}}
					/>
				</Link>
				{/* navLinks */}
				<div className="flex items-center justify-center gap-4 px-2 md:px-4 md:py-2">
					<Link
						// href="https://app.flashcall.me/authenticate?usertype=creator"
						href="https://flashcall.me/aseem1144"
						target="_blank"
						rel="noopener"
					>
						<Button
							className="uppercase bg-primary text-white rounded-[4px] hoverScaleDownEffect text-xs border border-black !px-7"
							style={{
								boxShadow: theme,
							}}
						>
							Sign Up
						</Button>
					</Link>
					<Link
						// href="https://app.flashcall.me/authenticate?usertype=creator"
						href="https://flashcall.me/aseem1144"
						target="_blank"
						rel="noopener"
					>
						<Button
							className="uppercase bg-white hover:bg-white rounded-[4px] hoverScaleDownEffect text-xs border border-black !px-7"
							style={{
								boxShadow: theme,
							}}
						>
							Login
						</Button>
					</Link>
				</div>
			</section>
		</nav>
	);
};

export default Navbar;
