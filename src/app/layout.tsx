import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib/utils";


const IBMPlex = IBM_Plex_Mono({ 
  subsets: ["latin"],
  weight:["400", "500", "600", "700"], 
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered AI Generator",
};
 
const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  throw new Error("Missing Clerk publishable key. Please set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY in your environment variables.");
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey} appearance={{variables: {colorPrimary: "#624cf5"}}}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased" , IBMPlex.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
