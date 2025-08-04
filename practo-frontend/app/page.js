"use client";
import Banner from "./components/Banner";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showWarning, setShowWarning] = useState(true);

  const router = useRouter();
  // const [transitioning, setTransitioning] = useState(false);
  // useEffect(() => {
  //   const handleRouteChangeStart = () => {
  //     setTransitioning(true);
  //   };

  //   const handleRouteChangeComplete = () => {
  //     setTransitioning(false);
  //   };

  //   router.events.on('routeChangeStart', handleRouteChangeStart);
  //   router.events.on('routeChangeComplete', handleRouteChangeComplete);

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChangeStart);
  //     router.events.off('routeChangeComplete', handleRouteChangeComplete);
  //   };
  // }, [router.events]);

  useEffect(() => {
    if (!showWarning) {
      const timer = setTimeout(() => {
        router.push("/find-doctors");
      }, 3000);
      return () => clearTimeout(timer);
    }

  }
    , [showWarning, router]);

  return (
    <div className="bg-gray-100">
      <div
        className={`fixed top-0 z-10 left-0 w-full flex justify-center items-center h-screen transition-opacity duration-300 ease-in-out ${showWarning ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="bg-yellow-100 p-8 rounded-lg shadow-lg md:w-1/4 w-full">
          <div className="flex flex-col text-center items-center justify-center">
            <p className="text-lg font-bold "><span className="text-red-950 text-2xl mb-8">Warning</span><br />This is a clone of the Practo website for educational purposes.<br />Only find doctors feature is implemented.<br /> After pressing close, you will be redirected to the find-doctors page.  </p>
            <hr className="stroke-gray-100 mt-8 mb-1  w-full"></hr>
            <button className="text-xl font-bold bg-yellow-400 hover:bg-yellow-500  w-1/4 hover:text-gray-700 text-gray-500 rounded-full px-2 py-2" onClick={() => setShowWarning(false)}>Close</button>
          </div>
        </div>
      </div>
      <main className={showWarning ? "blur-md" : ""}>
        <Banner />
      </main>

    </div>
  );
}

