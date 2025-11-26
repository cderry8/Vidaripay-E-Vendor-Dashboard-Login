import type { Metadata } from "next";
import { ClientLayout } from "./clientlayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vidari Pay",
  description: "Vendor dashboard",
  icons: {
    icon: "/Vidaripay-logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
