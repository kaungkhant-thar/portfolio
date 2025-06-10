import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { NextIntlClientProvider } from "next-intl";
import ActiveSectionContextProvider from "@/context/action-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaung Khant Thar | Modern Developer Portfolio",
  description: "Showcase of my work and skills",
  metadataBase: new URL("https://yourdomain.com"),
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // let messages;
  // try {
  //   messages = (await import(`../../messages/${locale}.json`)).default;
  // } catch (error) {
  //   notFound();
  // }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
