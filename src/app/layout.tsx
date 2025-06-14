import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { NextIntlClientProvider } from "next-intl";
import ActiveSectionContextProvider from "@/context/action-section-context";
import { Navigation } from "./components/ui/navigation/nav";

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
    <html suppressHydrationWarning className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="https://ik.imagekit.io/wxk4trjev/assets/profile.jpg?tr=w-32,h-32"
          type="image/jpeg"
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground `}>
        {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
        <ActiveSectionContextProvider>
          <Navigation />
          {children}
        </ActiveSectionContextProvider>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
