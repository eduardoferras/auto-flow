import type { Metadata } from "next";
import "@styles/reset.scss";
import "@styles/globals.scss";
import { inter, spaceGrotesk } from "@assets/fonts";
import AppFooter from "@components/AppFooter";
import AppHeader from "@components/AppHeader";
import S from "./layout.module.scss";

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
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <div className={S.app}>
          <AppHeader />
          <main className={S.main}>{children}</main>
          <AppFooter />
        </div>
      </body>
    </html>
  );
}
