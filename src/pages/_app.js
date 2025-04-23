import "@/styles/globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400","600","700"],
});



export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
