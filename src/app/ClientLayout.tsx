"use client";

import dynamic from "next/dynamic";
import Footer from "../components/Footer";
// import ClosingStatement from "@/components/ClosingStatement";

const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      {/* <ClosingStatement /> */}
      <Footer />
    </>
  );
}
