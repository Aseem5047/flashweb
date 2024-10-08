// components/shared/ClientLayout.tsx
"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React, { ReactNode, useEffect, useState } from "react";

const ClientLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<div className="relative md:bg-hero bg-contain no-scrollbar">
			<Navbar />
			<section className="flex min-h-screen flex-1 overflow-x-hidden no-scrollbar">
				<div className="w-full h-full">{children}</div>
			</section>
			<Footer />
		</div>
	);
};

export default ClientLayout;
