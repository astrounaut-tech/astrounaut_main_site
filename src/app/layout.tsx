import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import CustomCursor from '@/components/common/CustomCursor';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Astrounaut - Your Business Partner',
    template: '%s | Astrounaut',
  },
  description:
    'Astrounaut is your trusted business partner, providing innovative solutions and exceptional service.',
  keywords: ['business', 'solutions', 'innovation', 'astrounaut'],
  authors: [{ name: 'Astrounaut Team' }],
  creator: 'Astrounaut',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://astrounaut.com',
    title: 'Astrounaut - Your Business Partner',
    description:
      'Astrounaut is your trusted business partner, providing innovative solutions and exceptional service.',
    siteName: 'Astrounaut',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astrounaut - Your Business Partner',
    description:
      'Astrounaut is your trusted business partner, providing innovative solutions and exceptional service.',
    creator: '@astrounaut',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
