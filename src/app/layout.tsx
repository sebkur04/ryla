import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Şebnem Kurban - Portfolio",
  description: "Futuristic personal portfolio of Şebnem Kurban, focusing on AI and Data Science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-mono selection:bg-accent selection:text-earth-900 tech-grid relative">
        <div className="fixed inset-0 pointer-events-none tech-grid z-[-1]"></div>
        {children}
      </body>
    </html>
  );
}
