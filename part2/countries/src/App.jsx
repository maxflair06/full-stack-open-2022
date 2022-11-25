import axios from "axios";
import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const api = "https://restcountries.com/v3.1/all";

  //fetch countries from api
  useEffect(() => {
    axios.get(api).then((res) => {
      setCountries(
        res.data.map(({ name, capital, area, languages, flags, cioc }) => ({
          name: name.common,
          capital: capital,
          area: area,
          languages: languages,
          flags: flags,
          countryCode: cioc,
        }))
      );
    });
  }, []);
  //event handler for search input
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  //filter countries based on search input
  const filteredCountries = countries.reduce((acc, country) => {
    if (country.name.toLowerCase().includes(search.toLowerCase())) {
      acc.push(country);
    }

    return acc;
  }, []);

  return (
    <div>
      <label htmlFor="search">
        find countries
        <input type="text" id="search" onChange={handleChange} />
      </label>
      {filteredCountries.length > 10 ? (
        search && <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]} />
      ) : (
        <Countries countries={filteredCountries} />
      )}
    </div>
  );
}

export default App;
