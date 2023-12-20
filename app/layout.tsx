import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Shivam",
//   description: "WEB DEVELOPMENT AND DESIGN PORTFOLIO OF SHIVAM KAPOOR",
//   themeColor: "white",
//   creator: "Shivam Kapoor",
//   icon: "/icon.jpg"
  
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>shivam</title>
        <link rel="icon" href={"/gg.ico"} />
        <meta name="description" content={"WEB DEVELOPMENT AND DESIGN PORTFOLIO OF SHIVAM KAPOOR"} />
        <meta name="theme-color" content={"white"} />
        <meta name="creator" content={"Shivam Kapoor"} />
      </head>
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
