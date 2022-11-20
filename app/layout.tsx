import '@/styles/global.css';

import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="sticky top-0 z-10 bg-base-100 border-b border-base-300">
          <nav className="max-w-2xl mx-auto px-6">
            <ul className="flex items-center justify-between py-4">
              <li>
                <Link href="/" className="text-2xl font-bold text-primary">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
