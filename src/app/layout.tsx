import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import ThemeRegistry from "@/theme/ThemeRegistry";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WAJA",
  description:
    "WAJA empowers women and orphans in Ghana through automotive technology training, digital diagnostics, EV readiness, and entrepreneurship.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lexend.variable} ${sourceSans.variable}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
