import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { ThemeProvider } from "next-themes";
import { useEffect } from 'react';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const circleCursor = document.querySelector('.circle-cursor');
      circleCursor.style.left = `${e.clientX}px`;
      circleCursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <>
      <ThemeProvider enableSystem={true} attribute='class'>
        <div className="circle-cursor"></div>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
