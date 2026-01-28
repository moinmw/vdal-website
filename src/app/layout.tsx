import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "VDAL – Virtual Data Access Layer",
  description: "Unified Data Access & Analytics Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}



  