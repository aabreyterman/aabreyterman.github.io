import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anastasiia-breiterman.breiterman-l-2206.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anastasiia Breiterman, PMP® — Project, Product & Marketing",
  description: "Portfolio of Anastasiia Breiterman, PMP®: project and product management, marketing, business development and product launches across digital products and technology.",
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: {
    title: "Anastasiia Breiterman, PMP® — Project, Product & Marketing",
    description: "PMP®-certified international project and product manager with marketing and business-development experience.",
    images: [{ url: `${basePath}/og.png`, width: 1200, height: 630, alt: "Anastasiia Breiterman portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anastasiia Breiterman, PMP® — Project, Product & Marketing",
    description: "PMP®-certified international project and product manager with marketing and business-development experience.",
    images: [`${basePath}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
