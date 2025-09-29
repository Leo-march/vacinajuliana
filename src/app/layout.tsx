import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instituto Butantan - Vacinas",
  description: "Informações sobre vacinas do Instituto Butantan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        {/* Container com imagem de fundo */}
        <div style={{
          minHeight: '100vh',
          position: 'relative',
          backgroundImage: 'url("https://butantan.gov.br/assets/images/banner-home.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}>
          {/* Overlay para deixar a imagem mais clara/borrada */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(3px)',
            zIndex: 0
          }} />
          
          {/* Conteúdo da página */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Topbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}