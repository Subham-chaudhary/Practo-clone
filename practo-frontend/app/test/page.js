"use client"; // ✅ this is correct

import Header from "../components/Header";
import Footer from "../components/Footer";

function Test() {
  const handleClick = async () => {
    const res = await fetch(
      "https://cors-proxy.htmldriven.com/?url=https://www.htmldriven.com/sample.json"
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <button onClick={handleClick}>Get watchers count</button>
      </main>
      <Footer />
    </div>
  );
}

export default Test;
