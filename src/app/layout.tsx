import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "DHLM Tools | 무료 온라인 계산기 & 도구 모음",
  description:
    "연봉 실수령액, 퇴직금, 대출이자, 부가세, 적금이자, 마진율, 유튜브 수익, 퍼센트 등 다양한 무료 온라인 계산기와 도구를 제공합니다.",
  metadataBase: new URL("https://tools.dhlm-studio.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} antialiased`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5182634360822108"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-brand"
            >
              DHLM Tools
            </Link>
            <nav className="flex gap-1 text-sm">
              <Link
                href="/"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
              >
                홈
              </Link>
              <Link
                href="/#finance"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
              >
                금융
              </Link>
              <Link
                href="/#life"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
              >
                생활
              </Link>
              <Link
                href="/#dev"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
              >
                개발
              </Link>
              <Link
                href="/#image"
                className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
              >
                이미지
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-white border-t border-gray-200 py-6">
          <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
            <span>DHLM-STUDIO &copy; 2026</span>
            <Link
              href="/privacy"
              className="hover:text-gray-700 underline"
            >
              개인정보처리방침
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
