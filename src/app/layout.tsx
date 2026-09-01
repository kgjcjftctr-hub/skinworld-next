import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Skin World | Dermatología Profesional',
  description:
    'Productos dermatológicos de calidad respaldados por profesional en dermatología. Descubre soluciones para tu piel.',
  keywords: [
    'dermatología',
    'skincare',
    'productos de piel',
    'cuidado dermatológico',
    'México',
  ],
  authors: [{ name: 'Skin World', url: 'https://skinworld.mx' }],
  creator: 'Skin World',
  publisher: 'Skin World',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://skinworld.mx',
    title: 'Skin World | Dermatología Profesional',
    description:
      'Productos dermatológicos de calidad respaldados por profesional en dermatología.',
    siteName: 'Skin World',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skin World | Dermatología Profesional',
    description:
      'Productos dermatológicos de calidad respaldados por profesional en dermatología.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#b19388" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
