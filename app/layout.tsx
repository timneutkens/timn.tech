import "../styles/global.css";
import Analytics from "../components/analytics";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = { width: "device-width", initialScale: 1 }

export const metadata: Metadata = {
  title: "Tim Neutkens",
  description:
    "Hi! I'm Tim Neutkens, a software engineer from The Netherlands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
