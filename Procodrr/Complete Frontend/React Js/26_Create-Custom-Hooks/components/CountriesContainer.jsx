import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

import SkeletonContainer from "./SkeletonContainer";


const CountriesContainer = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);
  
  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      })
      .catch(err =>{
        setCountriesData(err.message)
      })
  }, []);

  const countryCardArray = countriesData
    .filter(
      (country) =>
        country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
    )
    .map((country) => {
      return (
        <CountryCard
          key={country.name.common}
          countryImageUrl={country.flags.svg}
          countryName={country.name.common}
          countryPopulation={country.population.toLocaleString("en-IN")}
          countryRegion={country.region}
          countryCapital={country.capital?.[0]}
          countryData={country}
        />
      );
    });
  return (
    <>
      {!countryCardArray.length ? (
        <SkeletonContainer />
      ) : (
        <div className="countries-container">{countriesData === 'Failed to fetch'? 'Error to fetch data' : countryCardArray }</div>
      )}
    </>
  );
};

export default CountriesContainer;
