import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ weight: "500" });
export const metadata: Metadata = {
  title: {
    template: "%s | Widgets",
    default: "Widgets"
  },
  description: "Create beautiful, dynamic widgets for your websites <3",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
