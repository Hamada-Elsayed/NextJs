import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "H-Next",
  description: " my first Next.js project Fetch data from a fake API in different ways",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="navbar">
          <div><a href="\" className="logo"> logo</a></div>
          <div>
            <ul>
              <li> <a href="\">Home</a></li>
              <li> <a href="todos">todos</a></li>              
              <li> <a href="images">images</a></li>
              <li> <a href="posts">posts</a></li>
              <li> <a href="users">users</a></li>

            </ul>

          </div>
        </div>


        {children}
      </body>
    </html>
  );
}
