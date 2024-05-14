import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function SignInPage() {
	return (
		<section className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
			<div className="flex flex-col items-center justify-center gap-10 py-20 px-5 lg:px-10">
				<div className="text-center text-balance flex flex-col items-center justify-center gap-5">
					<h1 className="font-bold text-4xl md:text-5xl text-accent-foreground">
						Welcome back!
					</h1>
					<p className="font-medium text-base text-accent-foreground">
						Log in or create an account to get back to tracking your expenses!
					</p>
				</div>
				<center>
					<ClerkLoaded>
						<SignIn path="/sign-in" />
					</ClerkLoaded>
					<ClerkLoading>
						<Loader2
							size={100}
							className="animate-spin text-muted-foreground my-20"
						/>
					</ClerkLoading>
				</center>
			</div>
			<div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
				<Image src={"/"} alt="expense-tracker logo" width={100} height={100} />
			</div>
		</section>
	);
}
