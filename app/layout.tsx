import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anastasiia-breiterman.breiterman-l-2206.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anastasiia Breiterman — Project, Marketing & Growth",
  description: "Portfolio of Anastasiia Breiterman, a project and marketing leader turning ambitious ideas into traction across fintech, consumer tech and international markets.",
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: {
    title: "Anastasiia Breiterman — Project · Marketing · Growth",
    description: "I turn ambitious ideas into traction.",
    images: [{ url: `${basePath}/og.png`, width: 1200, height: 630, alt: "Anastasiia Breiterman portfolio" }],
  },
  twitter: { card: "summary_large_image", images: [`${basePath}/og.png`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
