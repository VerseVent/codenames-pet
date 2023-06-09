import "@styles/global.css";
import { Inter } from "next/font/google";
import style from "./main.module.scss";

export const metadata = {
  title: "Codenamings",
  description: "Codenamings pet project",
};

// export const fetchCache = "no-cache";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} ${style.bodyContainer}`}>
        <main className={style.container}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
