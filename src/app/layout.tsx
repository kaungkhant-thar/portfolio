import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { NextIntlClientProvider } from "next-intl";
import ActiveSectionContextProvider from "@/context/action-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaung Khant Thar | Modern Developer Portfolio",
  description: "Showcase of my work and skills",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // let messages;
  // try {
  //   messages = (await import(`../../messages/${locale}.json`)).default;
  // } catch (error) {
  //   notFound();
  // }

  return (
    <html suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-foreground scroll-smooth`}
      >
        {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
