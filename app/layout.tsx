import "../styles/global.css";
import Analytics from "../components/analytics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tim Neutkens",
  viewport: "width=device-width, initial-scale=1",
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
