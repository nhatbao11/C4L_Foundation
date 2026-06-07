import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://c4lfoundation.org"),
  title: "Quỹ Cỏ 4 Lá",
  description:
    "Quỹ Cỏ 4 Lá - Hệ sinh thái đầu tư vào con người (Human Capital Investment Ecosystem), nâng đỡ và rèn luyện sinh viên nghèo vượt khó trở thành các Self-Made Professionals.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${montserrat.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-slate-50 text-slate-900 font-sans min-h-screen flex flex-col justify-between antialiased">
        {children}
      </body>
    </html>
  );
}
