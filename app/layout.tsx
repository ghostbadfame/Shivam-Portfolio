import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SHIVAM",
  description: "WEB DEVELOPMENT AND DESIGN PORTFOLIO OF SHIVAM KAPOOR",
  themeColor: "white",
  creator: "Shivam Kapoor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " selection:text-white selection:bg-black lg:overflow-hidden"
        }
      >
        {children}
      </body>
    </html>
  );
}
