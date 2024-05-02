import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import "../../public/css/reset.css";

const merienda = Merienda({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your life",
  description: "Ajudando voce a organizar sua vida!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={merienda.className}>{children}</body>
    </html>
  );
}
