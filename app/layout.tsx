import "./global.css";
import { Inter } from "next/font/google";
import style from "./main.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={style.container}>{children}</div>
      </body>
    </html>
  );
}
