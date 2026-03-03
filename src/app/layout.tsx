import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thomas Ziebarth — Software Developer",
  description:
    "Software developer building modern web and mobile applications.",
  metadataBase: new URL("https://ziebarth.ca"),
  openGraph: {
    title: "Thomas Ziebarth — Software Developer",
    description:
      "Software developer building modern web and mobile applications.",
    url: "https://ziebarth.ca",
    siteName: "Thomas Ziebarth",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Ziebarth — Software Developer",
    description:
      "Software developer building modern web and mobile applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} bg-[#0a0a0a] text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
