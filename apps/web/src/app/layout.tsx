import type { Metadata } from "next";
import "@styles/globals.scss";
import { inter } from "@assets/fonts";
import AppHeader from "@components/AppHeader";

export const metadata: Metadata = {
  title: "Auto Flow",
  description: "Marketplace for n8n & Zapier Templates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
