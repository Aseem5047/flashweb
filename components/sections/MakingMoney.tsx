import React from "react";
import { makeMoneyPointers } from "@/constants";
import { Button } from "../ui/button";
const MakingMoney = () => {
	const theme = `5px 5px 0px 0px #50a65c`;
	return (
		<section className="w-full h-fit py-10 pb-20 bg-white grid grid-cols-1 gap-5 items-center justify-center md:px-14 lg:px-24 max-md:px-4">
			{/* heading */}
			<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold !leading-relaxed text-center">
				We make money, <span className="text-primary">only When you do</span>
			</h2>

			{/* more content */}
			<span className="text-xl leading-loose text-center text-gray-400">
				Start for absolutely free and make use of almost everything we offer
			</span>
			{/* content description */}
			<section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center mx-auto mt-5 lg:mt-10 gap-10">
				{/* left side */}
				<div className="bg-primary/15 size-full py-10 lg:scale-125 w-full rounded-[28px] text-center flex flex-col items-center justify-center">
					{/* heading */}
					<h2 className="text-primary text-3xl font-medium !leading-relaxed text-center">
						{makeMoneyPointers.title}
					</h2>
					{/* sub-heading */}
					<span className="font-medium">{makeMoneyPointers.description}</span>
					{/* get started button */}
					<Button className="text-white mt-14">
						{makeMoneyPointers.buttonText}
					</Button>
				</div>
				{/* right side */}
				<ul className="relative w-full h-full flex flex-col item-center justify-center gap-5 border-2 border-l-0 border-primary  rounded-3xl rounded-tl-none rounded-bl-none py-7 pr-7">
					{makeMoneyPointers.points.map((point, index) => (
						<li className="flex gap-2 pl-5" key={index}>
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6 text-primary"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
									/>
								</svg>
							</span>
							<span className="text-lg">{point}</span>
						</li>
					))}

					<div
						className="h-2.5 absolute bottom-0 w-[95%] rounded-br-3xl -z-0 overflow-hidden"
						style={{
							boxShadow: `0px 10px 0px 0px rgb(80 166 92 / 0.50)`,
						}}
					/>
				</ul>
			</section>
		</section>
	);
};

export default MakingMoney;
