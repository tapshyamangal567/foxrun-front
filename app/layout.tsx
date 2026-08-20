import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorFollower from "@/components/CursorFollower";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";

export const metadata: Metadata = {
  title: "FoxRun - Book Your Ride, Anytime | Premium Ride Mobility",
  description: "Book a ride effortlessly with FoxRun. Get reliable rides, experienced drivers, and 24/7 support right from your phone. Download the app and book your way, anytime, anywhere.",
  keywords: ["book a ride", "ride service", "ride-hailing", "ride booking app", "foxrun", "self-drive", "raipur mobility"],
  icons: {
    icon: "/assets/img/logo.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-[#111827] selection:bg-[#FFB400] selection:text-[#111111] relative min-h-screen">
        <SmoothScroll>
          <BackgroundAtmosphere />
          <CursorFollower />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

