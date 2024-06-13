import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Provider from "../provider/NextUiProvider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

export const metadata: Metadata = {
  title: "Nutri-Delivoo",
  description: "Nutri-Delivoo food delivery website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Provider>{children}</Provider>
        <Toaster position="top-center" reverseOrder={true} />
      </body>
    </html>
  );
}
