import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Carousel from '../components/Carousel/carousel';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Велопрогулки',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        <div className="container">
          <div className="auto_reg_form">
            { children }
          </div>
          <div className="carousel_container">
            <Carousel />
          </div>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
