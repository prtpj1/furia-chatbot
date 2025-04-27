import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "FURIA Chatbot",
	description: "Landing page do time FURIA com chatbot com IA",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>{children}</body>
		</html>
	);
}
