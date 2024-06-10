import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const OwnApp = () => {
	const theme = `5px 5px 0px 0px #ffffff`;

	return (
		<section
			className={`flex flex-col gap-14 items-center justify-center py-20 max-md:px-4 bg-[#232323] text-white`}
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0 items-start md:px-14 lg:px-24">
				<div className="flex flex-col items-start justify-center gap-7">
					{/* heading and content */}
					<h1 className="hidden lg:block md:text-5xl font-semibold !leading-snug">
						Make your <br /> own app and start earning with pay-per-min chats.
					</h1>
					<h1 className="text-4xl lg:hidden font-semibold !leading-snug">
						Add all your links in one place{" "}
					</h1>
					<span className="text-xl leading-loose hidden lg:block">
						Join 1000+ people who are earning upto 10 Lakhs a month just by
						talking to their followers. Stop worrying about scheduling calls or
						collecting payments, flashcall handles everything for you.
					</span>
					{/* more content */}
					<span className="text-xl leading-loose lg:hidden">
						Connect your profiles in one place for your followers.
					</span>
					<Link href="https://forms.gle/bo42SCVG6T4YjJzg8">
						<Button
							className="hidden lg:flex items-center justify-center gap-4 uppercase bg-transparent text-white border border-white w-[320px] !py-6 md:mt-4"
							style={{
								boxShadow: theme,
							}}
						>
							<Image
								src="/icons/logoDarkCircle.png"
								alt="logo"
								width={100}
								height={100}
								className="rounded-xl w-6 h-6"
							/>
							<p className="text-sm font-semibold">Get Your Link</p>
						</Button>
					</Link>
				</div>
				{/* banner */}
				<Image
					src="/images/ownApp.png"
					alt="logo"
					width={1000}
					height={1000}
					className="rounded-xl w-full h-full max-h-[480px] object-contain"
				/>

				<Button
					className="flex lg:hidden items-center justify-center w-[95%] mx-auto gap-4 uppercase bg-transparent text-white border border-white !py-8"
					style={{
						boxShadow: theme,
					}}
				>
					<Image
						src="/icons/logoDarkCircle.png"
						alt="logo"
						width={200}
						height={200}
						className="rounded-xl w-6 h-6"
					/>
					<p className="text-xl font-semibold">Get Your Link</p>
				</Button>
			</div>
		</section>
	);
};

export default OwnApp;
