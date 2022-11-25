import React from "react";
import { useState } from "react";
import Country from "./Country";

function SearchResult({ countries }) {
  const [showCountry, setShowCountry] = useState(true);
  const [countryIndex, setCountryIndex] = useState(0);

  return (
    <div>
      {showCountry ? (
        <ul>
          {countries.map((country, index) => (
            <li key={country.name} style={{ listStyleType: "none" }}>
              {country.name}

              <button
                onClick={() => {
                  setCountryIndex(index);
                  setShowCountry(!showCountry);
                }}
              >
                show
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <Country country={countries[countryIndex]} />
      )}
    </div>
  );
}

export default SearchResult;
