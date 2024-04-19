import { queryClient } from "@/shared/api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export function AppProvider({ children }: { children?: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <style jsx global>{`
        html {
          font-family: ${fontSans.style.fontFamily};
        }
      `}</style>
      <main className="min-h-screen bg-background font-sans antialiased">
        {children}
      </main>
    </QueryClientProvider>
  );
}
