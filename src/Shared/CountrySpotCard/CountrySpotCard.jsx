import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const CountrySpotCard = ({ spot }) => {
  const {
    _id,
    average_cost,
    country_name,
    location,
    seasonality,
    short_description,
    tourists_spot_name,
  } = spot;

  return (
    <div className="max-w-2xl px-8 py-4 bg-primary-1 rounded-lg shadow-md  font-poppins">
      <div className="flex items-center justify-between">
        <p className=" text-2xl font-semibold text-white ">
          {tourists_spot_name}
        </p>
        <p className="px-3 py-1  font-bold text-gray-100  bg-gray-600 rounded">
          {country_name}
        </p>
      </div>

      <div className="mt-2">
        <p className="text-xl font-bold text-white ">
          Average Cost: {average_cost} $
        </p>
        <p className="mt-2 text-gray-100">{short_description}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Link to={`/tourist_spot_details/${_id}`}>
          <button className="btn bg-primary-1 text-white hover:bg-purple-800">
            View Details
          </button>
        </Link>

        <div className="flex items-center">
          <p className="font-bold flex gap-1 items-center  text-gray-700 cursor-pointer dark:text-gray-200">
            <MdLocationOn className="text-xl"></MdLocationOn>
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountrySpotCard;
