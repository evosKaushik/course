import { Link } from "react-router-dom";

const CountryCard = ({countryImageUrl, countryName, countryPopulation, countryRegion, countryCapital}) => {
  return (
    <Link to={`/country?name=${countryName}`} className="country-card">
      <img src={countryImageUrl} alt={countryName + 'Flag'} />
      <div className="card-text">
        <h3 className="card-title"></h3>
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
