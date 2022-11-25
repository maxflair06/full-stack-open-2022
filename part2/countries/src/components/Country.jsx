import Weather from "./Weather";

function Country({ country }) {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        style={{
          width: "200px",
          height: "100px",
          border: "1px solid black",
        }}
        src={country.flags.png}
        alt="flag"
        width="100"
      />
      <Weather country={country} />
    </div>
  );
}

export default Country;
