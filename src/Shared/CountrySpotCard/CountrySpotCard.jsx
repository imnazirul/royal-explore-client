import PropTypes from "prop-types";
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
    <div className="px-8 py-4 bg-primary-1 rounded-lg shadow-md  font-poppins w-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <p className="text-xl md:text-2xl font-semibold text-white ">
          {tourists_spot_name}
        </p>
        <p className="px-3 py-1 md:font-bold text-gray-100  bg-gray-600 rounded">
          {country_name}
        </p>
      </div>

      <div className="mt-2">
        <p className="text-xl font-bold text-white ">
          Average Cost: {average_cost} $
        </p>
        <p className="mt-2 text-gray-100 max-sm:text-sm">{short_description}</p>
      </div>

      <p className="flex mt-4 gap-1 items-center text-gray-200">
        Seasonality: {seasonality}
      </p>

      <div className="flex flex-col md:flex-row md:items-center justify-between  max-sm:gap-3">
        <div className="flex  items-center">
          <p className="font-bold flex gap-1 items-center  text-gray-700 cursor-pointer dark:text-gray-200">
            <MdLocationOn className="text-xl"></MdLocationOn>
            {location}
          </p>
        </div>

        <Link to={`/tourist_spot_details/${_id}`}>
          <button className="max-sm:btn-sm btn bg-primary-1 text-white hover:bg-purple-800">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CountrySpotCard;

CountrySpotCard.propTypes = {
  spot: PropTypes.object,
};
