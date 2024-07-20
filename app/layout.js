import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import FooterSite from "@/components/Footer";

const roboto = Roboto({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Andral Orelus Portfolio",
  description: "Personal portfolio website for Andral Orelus",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css"
            rel="stylesheet" />
          <ThemeProvider attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="dashboard-themes">
            <Header />
            <main>
              {children}
            </main>
            <FooterSite />
            <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
            <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>

  );
}
