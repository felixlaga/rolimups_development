import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Header } from '@/components/structures/Header'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rolimups Development",
  description: "Created by Felix Laga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
        <Header />
        </header>
        <main>{children}</main>
        <footer className="bg-muted text-muted-foreground px-4 lg:px-6 py-8">
        <div className="container grid gap-8 lg:grid-cols-3">
          <div className="space-y-2">
            <p>&copy; 2024 Rolimups Development</p>
            <p>All rights reserved.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <LinkedinIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                <GitlabIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold">Sitemap</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/landingpage" className="hover:underline" prefetch={false}>
                Home
              </Link>
              <Link href="/team" className="hover:underline" prefetch={false}>
                Team
              </Link>
              <Link href="/services" className="hover:underline" prefetch={false}>
                Services
              </Link>
              <Link href="/about" className="hover:underline" prefetch={false}>
                About
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Contact
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}

function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}