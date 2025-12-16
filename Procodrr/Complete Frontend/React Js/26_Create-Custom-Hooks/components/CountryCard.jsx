import { Link } from "react-router-dom";

const CountryCard = ({countryImageUrl, countryName, countryPopulation, countryRegion, countryCapital, countryData}) => {  
  return (
    <Link to={`/country/${countryName.toLowerCase()}`} className="country-card" state={countryData}>
      <div className="imageFlag"><img src={countryImageUrl} alt={countryName + 'Flag'} /></div>
      <div className="card-text">
        <h3 className="card-title">{countryName}</h3>
        <p>
          <b>Population: {countryPopulation}</b>
        </p>
        <p>
          <b>Region: {countryRegion}</b>
        </p>
        <p>
          <b>Capital: {countryCapital}</b>
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
