"use client";

import { ThemeProvider } from "next-themes";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 👇 important: don't hardcode className here */}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
