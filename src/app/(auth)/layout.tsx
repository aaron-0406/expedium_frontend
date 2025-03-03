"use client";

import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <nav className="relative top-0 z-50 w-full border-b bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link
            href="/"
            className="text-lg font-bold dark:text-white flex items-center"
          >
            <img src="/logo.png" alt="Logo" width={50} />
            Expedium
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
}
