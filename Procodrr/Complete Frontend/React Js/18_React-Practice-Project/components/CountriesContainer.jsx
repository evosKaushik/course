import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

const CountriesContainer = ({query}) => { 

  const countryCardArray = countriesData.filter(country => country.name.toLowerCase().includes(query)).map(country => {
    return (
      <CountryCard
        key={country.name}
        countryImageUrl={country.flag}
        countryName={country.name}
        countryPopulation={country.population.toLocaleString("en-IN")}
        countryRegion={country.region}
        countryCapital={country.capital}
      />
    );
  });
  return <div className="countries-container">{countryCardArray}</div>;
};

export default CountriesContainer; 
