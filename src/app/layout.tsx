import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://k-sundo.org'),
  title: "K-Sundo | The Energy Method Behind Peak Life",
  description: "Experience K-Sundo, a traditional Korean mind-body cultivation practice. Harmonize breathing, posture, and meditation for peak physical health, mental clarity, and inner peace.",
  openGraph: {
    title: "K-Sundo | The Energy Method Behind Peak Life",
    description: "Experience K-Sundo, a traditional Korean mind-body cultivation practice for peak physical health and mental clarity.",
    url: "https://k-sundo.org",
    siteName: "K-Sundo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "K-Sundo Peak Life",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K-Sundo | The Energy Method Behind Peak Life",
    description: "Traditional Korean mind-body cultivation for modern peak performance.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-black selection:text-white">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
