import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { PageHeader } from './components';
import { ThemeProvider } from '@/components/shadcn';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Elgun's Portfolio Website",
  description: 'Personal Portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <PageHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
