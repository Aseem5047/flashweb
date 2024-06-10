import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socials } from "@/constants";
import { Button } from "../ui/button";

const Footer = () => {
	const theme = `5px 5px 5px 0px #232323`;

	return (
		<div className="flex flex-col items-center justify-center w-full bg-primary">
			<div className="flex flex-col items-center justify-center w-full pt-7 pb-5 gap-7">
				{/* logo */}
				<Image
					src="/icons/logoFooter.png"
					alt="logo"
					width={500}
					height={100}
					className="rounded-xl w-[333px] h-auto"
				/>
				{/* get link button5*/}
				<Link href="https://forms.gle/bo42SCVG6T4YjJzg8">
					<Button
						className="flex items-center justify-center gap-4 uppercase bg-primary text-white grdientEffect  border border-black w-[320px] !py-6 hoverScaleDownEffect"
						style={{
							boxShadow: theme,
						}}
					>
						<Image
							src="/icons/logo.png"
							alt="logo"
							width={100}
							height={100}
							className="rounded-xl w-auto h-auto"
						/>
						<p className="text-sm font-semibold">Get Your Link</p>
					</Button>
				</Link>
				{/* socials */}
				<ul className="text-[14px] font-[400] flex gap-4">
					{socials.links.map((link, index) => (
						<li
							key={index}
							className="hoverScaleEffect w-fit bg-secondary p-2 rounded-full"
						>
							<Link href="https://forms.gle/bo42SCVG6T4YjJzg8">
								<Image
									src={link}
									alt="social logo"
									width={24}
									height={24}
									className="w-auto h-auto"
								/>
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* other info */}
			<div className="flex w-full bg-black text-white py-2">
				<p className="text-[14px] font-[400] text-center w-full">
					2024 FLASHCALL | All rights reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
