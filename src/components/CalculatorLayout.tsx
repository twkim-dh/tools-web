"use client";

import Link from "next/link";

export default function CalculatorLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{title}</span>
      </nav>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{title}</h1>
      {children}
    </div>
  );
}
