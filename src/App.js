import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Card from "./components/Card";

import data from "./data.json";

function App() {
  const countries = data.map((item) => item.country);

  const [countryIndex, setCountryIndex] = useState(0);

  return (
    <>
      <Navbar />
      <div className="w-10/12 mx-auto">
        <h1 className="my-10 font-semibold text-3xl text-center">
          Explore Our Events
        </h1>
        <div className="flex w-full gap-8">
          <Sidebar
            countryIndex={countryIndex}
            setCountryIndex={setCountryIndex}
            countries={countries}
          />
          <div className="grid grid-cols-2 w-full gap-12">
            {data[countryIndex].universities.map((item) => (
              <div className="mx-auto">
                <Card info={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
