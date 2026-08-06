import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Anastasiia Breiterman — Project, Marketing & Growth",
  description: "Portfolio of Anastasiia Breiterman, a project and marketing leader turning ambitious ideas into traction across fintech, consumer tech and international markets.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Anastasiia Breiterman — Project · Marketing · Growth",
    description: "I turn ambitious ideas into traction.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Anastasiia Breiterman portfolio" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
