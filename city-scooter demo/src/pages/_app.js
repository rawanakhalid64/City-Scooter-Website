import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Cairo } from 'next/font/google';
import Head from 'next/head'
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const cairo = Cairo({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {

  const pathname = usePathname()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${cairo.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
       <NavBar/>
       <AnimatePresence mode="wait">
       <Component key={pathname} {...pageProps} />
       </AnimatePresence>
        <Footer/>
      </main>
    </>
  );
}
