"use client";

import ClickableCard1 from "@/components/clickable_card1";
import ClickableCard2 from "@/components/clickable_card2";

import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex h-screen flex-col items-center justify-between pl-24 pr-24 pt-12 bg-grid-white/[0.2] relative">
			<div className="flex flex-row items-center justify-center pt-4">
				{/*    TITTOLO SOTTOTITOLO  */}
				<div className="flex flex-col items-start justify-center mr-8">
					{" "}
					{/* Added mr-8 for spacing */}
					<h1 className="font-black text-6xl mb-4">
						Protecting <span className="text-red-500">Health</span>,{" "}
						<br className="mt-4" /> Securing{" "}
						<span className="text-red-500">Data</span>
					</h1>
					<h3 className="text-muted-foreground font-sans text-xl mb-6">
						Your Trusted Guardian for Health and Data Security in Modern
						Healthcare
					</h3>
					<div className="flex items-center gap-2">
						<Button
							asChild
							size="lg"
							variant="outline">
							<Link href={"/contact"}>Contact Us</Link>
						</Button>
						<Button
							size="lg"
							className="bg-red-500 hover:bg-red-600"
							asChild>
							<Link href={"#find-more"}>Find More</Link>
						</Button>
					</div>
				</div>

				{/*    FOTO  */}
				<div>
					<Image
						src={"/image3.png"}
						width={500}
						height={500}
						alt={"illustration1"}
					/>
				</div>
			</div>

			<Separator />
			{/* THE TWO BUTTONS */}
			<div
				className="flex flex-row items-center gap-10 pb-36"
				id="find-more">
				<ClickableCard1 />
				<ClickableCard2 />
			</div>
		</main>
	);
}
