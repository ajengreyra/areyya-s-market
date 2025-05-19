import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Flower Knows Store',
  description: 'Makeup store made with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
