import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "로또 번호 생성기",
  description: "1~45 중 무작위 6개의 숫자를 생성합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[inter.className, 'bg-gray-900'].join(' ')}>{children}</body>
    </html>
  );
}
