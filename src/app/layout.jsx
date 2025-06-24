import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Intelik | Enterprise AI & Blockchain Solutions",
  description:
    "Intelik delivers enterprise-grade AI automation, blockchain solutions, cloud architecture, and custom software development for forward-thinking organizations.",
  keywords: [
    "AI automation",
    "blockchain solutions",
    "enterprise software",
    "cloud architecture",
    "digital transformation",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Background color base for the gradient theme */}
          <div className="bg-gradient-to-b from-background to-background min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-20 relative">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 