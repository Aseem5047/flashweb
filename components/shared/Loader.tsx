import Image from "next/image";

const Loader = () => {
	return (
		<div className="fixed top-0 left-0 flex justify-center items-center h-screen w-full z-40">
			<Image
				src="/icons/logoMobile.png"
				alt="Loading..."
				width={500}
				height={500}
				className="w-40 h-36 animate-pulse"
			/>
		</div>
	);
};

export default Loader;
