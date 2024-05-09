/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xYHqD5MkVkT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TopNavBar() {
	return (
		<nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
			<div className="w-full max-w-7xl mx-auto px-4">
				<div className="flex justify-between h-14 items-center">
					<Link
						className="flex items-center"
						href="/">
						<div className="flex flex-row items-center justify-center gap-2">
							<Image
								src={"/logo.png"}
								width={20}
								height={20}
								alt={""}
							/>

							<span className="text-black font-bold">
								Safe<span className="text-red-500 font-bold">Med</span>
							</span>
						</div>
					</Link>

					<nav className="hidden md:flex gap-4">
						<Link
							className="font-medium flex items-center text-sm transition-colors hover:underline"
							href="#">
							Companies
						</Link>
						<Link
							className="font-medium flex items-center text-sm transition-colors hover:underline"
							href="#">
							Workers
						</Link>
						<Link
							className="font-medium flex items-center text-sm transition-colors hover:underline"
							href="/contact">
							Contact
						</Link>
					</nav>
					<div className="flex items-center gap-4">
						<Button
							asChild
							size="sm"
							variant="outline">
							<Link href={"/login"}>Log in</Link>
						</Button>
						<Button
							size="sm"
							className="bg-red-500 hover:bg-red-600"
							asChild>
							<Link href={"signup"}>Sign up</Link>
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
