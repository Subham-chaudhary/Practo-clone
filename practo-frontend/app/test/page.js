"use client";

import Header from "../components/Header";
import React from "react";
import Footer from "../components/Footer";

function Test() {
  const [data, setData] = React.useState(null);

  const handleClick = async () => {
    const res = await fetch('https://proxy.cors.sh/https://www.practo.com/client-api/v1/cerebro/v3/autocomplete?query=mathur&indexes=[%22city%22,%22locality%22]', {
      headers: {
        'x-cors-api-key': 'temp_aa1c28f78dfc8c937e39674141ea344e'
      }
    });
    const jsondata = await res.json();
    setData(jsondata.results.default.matches);
  };

  return (
    <div className="bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Get watchers count</button>
        {data && <span>{JSON.stringify(data, null, 2)}</span>}
      </main>
    </div>
  );
}

export default Test;

