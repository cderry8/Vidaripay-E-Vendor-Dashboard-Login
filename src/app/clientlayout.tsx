"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store"; 
import { usePathname } from "next/navigation";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login"; 

  return (
    <Provider store={store}>
      <div
        className={`relative bg-linear-to-b from-[#f7f9fb] to-[#f7f9fb] min-h-screen px-2 ${
          isLoginPage ? "overflow-hidden" : ""
        }`}
      >
        {isLoginPage && (
          <>
            <div className="hidden lg:block absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#eef6f1] animate-pulse-slow opacity-[0.9]"></div>
            <div className="hidden lg:block absolute top-[23%] -left-20 w-60 h-60 rounded-full bg-[#f3f0ee] animate-float"></div>
            <div className="hidden lg:block absolute bottom-[6%] left-[25%] w-96 h-96 rounded-full border-2 border-[#eef4f4] animate-rotate-slow"></div>
          </>
        )}

        {children}
      </div>
    </Provider>
  );
}
