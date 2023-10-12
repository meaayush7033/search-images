import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "./context/imageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Search your images",
  description: "Search your images free.Created by Ayush kumar Mishra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
