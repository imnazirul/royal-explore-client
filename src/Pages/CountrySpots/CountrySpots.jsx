import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountrySpotCard from "../../Shared/CountrySpotCard/CountrySpotCard";

const CountrySpots = () => {
  const { country } = useParams();
  const [countrySpotList, setCountrySpotList] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/country_spots/${country.toLocaleLowerCase()}`)
      .then((res) => res.json())
      .then((data) => setCountrySpotList(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="text-xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins underline mb-4">
        All Tourist Spots of {country}
      </h1>

      {countrySpotList ? (
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-3 lg:gap-6">
          {countrySpotList.map((spot) => (
            <CountrySpotCard spot={spot} key={spot._id}></CountrySpotCard>
          ))}
        </div>
      ) : (
        <div className="flex h-[70vh] justify-center items-center">
          <div className="h-20 w-20 md:w-24 md:h-24 border-[6px] md:border-[8px] border-dashed rounded-full animate-spin border-primary-1"></div>
        </div>
      )}
    </div>
  );
};

export default CountrySpots;
