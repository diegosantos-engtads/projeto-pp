import { Inter } from "next/font/google";
import SideMenu from "./components/SideMenu";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        <main className="root">
          <SideMenu />
          {children}
        </main>
      </body>
    </html>
  );
}
