import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zahid Iqbal — Full-Stack & Mobile Developer",
  description:
    "Full-Stack & Flutter Developer with 1+ years of experience. Expert in React, Next.js, Flutter, Firebase, ML & Play Store deployment.",
  keywords: [
    "full-stack developer",
    "flutter developer",
    "react native",
    "firebase",
    "machine learning",
    "play store",
    "pakistan",
  ],
  openGraph: {
    title: "Zahid Iqbal — Full-Stack & Mobile Developer",
    description:
      "Expert Full-Stack & Mobile Developer — React, Flutter, Firebase, ML & Play Store.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var t = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', t);
              } catch(e) {}
            })();
          `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
