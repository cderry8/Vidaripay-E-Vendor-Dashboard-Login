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
      <body className="relative bg-linear-to-b from-[#f7f9fb] to-[#f7f9fb] px-2   min-h-screen">
       
          {/* <div className=" hidden lg:block absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#eef6f1] animate-pulse-slow opacity-[0.9]"></div>
        <div className=" hidden lg:block absolute top-[23%] -left-20 w-60 h-60 rounded-full bg-[#f3f0ee] animate-float"></div>
        <div className="hidden lg:block absolute bottom-[6%] left-[25%] w-96 h-96 rounded-full border-2 border-[#eef4f4] animate-rotate-slow"></div> */}


        <ClientLayout>{children}</ClientLayout>

      </body>
    </html>
  );
}
