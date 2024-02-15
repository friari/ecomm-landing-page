import type { Metadata } from 'next';
import { poppins, robotoSlab, rufina } from '@/app/ui/fonts';
import '@/app/ui/globals.css';
import Header from '@/app/ui/sections/Header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${robotoSlab.variable} ${rufina.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
