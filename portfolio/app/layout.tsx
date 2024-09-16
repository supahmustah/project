import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Nav from './components/nav';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const poppins = localFont({
  src: './fonts/Poppins-Regular.ttf',
  variable: '--font-poppins-reg',
  weight: '100 900',
});

const poppinsBold = localFont({
  src: './fonts/Poppins-Bold.ttf',
  variable: '--font-poppins-bold',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Lode Van Beneden',
  description: 'Portfolio developed by Lode',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${poppinsBold.variable} antialiased dark:text-white dark:bg-neutral-800`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
