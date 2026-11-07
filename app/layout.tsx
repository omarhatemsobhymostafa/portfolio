
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const changa = localFont({
  src: [
    {
      path: "./fonts/Changa-VariableFont_wght.ttf",
      weight: "200 800",
      style: "normal",
    },
  ],
  variable: "--font-changa-local",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Application",
  description: "Modern Arabic typography with Changa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={changa.variable}>
      <body className="antialiased font-changa">
        {children}
      </body>
    </html>
  );
}
