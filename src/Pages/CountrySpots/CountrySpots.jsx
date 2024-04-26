import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TouristsSpotCard from "../Home/TouristsSpotCard";

const CountrySpots = () => {
  const { country } = useParams();
  const [countrySpotList, setCountrySpotList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/country_spots/${country.toLocaleLowerCase()}`)
      .then((res) => res.json())
      .then((data) => setCountrySpotList(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins underline mb-4">
        All Tourist Spots of {country}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 lg:gap-6">
        {countrySpotList.map((spot) => (
          <TouristsSpotCard key={spot._id} data={spot}></TouristsSpotCard>
        ))}
      </div>
    </div>
  );
};

export default CountrySpots;
