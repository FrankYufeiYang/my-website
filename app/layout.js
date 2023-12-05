import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yufei Yang, Software Engineer',
  description: "Yufei Yang's website",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
