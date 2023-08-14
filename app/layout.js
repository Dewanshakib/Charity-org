import "./globals.css";
import { Hind_Siliguri } from "next/font/google";

const Hind = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "স্বস্তির ছায়া",
  description: "মানবতার কল্যাণে স্বস্তির ছায়া",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={Hind.className}>{children}</body>
    </html>
  );
}
