// src/app/layout.tsx
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Add Google Fonts here */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Roboto+Condensed:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
