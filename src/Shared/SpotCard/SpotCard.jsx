import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

/* eslint-disable react/prop-types */
const SpotCard = ({ spot }) => {
  const {
    _id,
    average_cost,
    country_name,
    image,

    seasonality,
    short_description,
    total_visitors_per_year,
    tourists_spot_name,
    travel_time,
  } = spot;

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg bg-primary-1 font-poppins">
      <img
        className="object-cover object-center w-full h-56"
        src={image}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-lg font-semibold text-white">
          {tourists_spot_name}, {country_name}
        </h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {average_cost} $
        </h1>
        <h1 className=" mt-2 text-gray-100 ">
          Visitors Per Year: {total_visitors_per_year} People
        </h1>

        <p className="py-2 text-white">{short_description}</p>

        <div className="flex items-center justify-between mt-4 text-gray-700 dark:text-gray-200">
          {" "}
          <div>
            {" "}
            <div className="flex items-center  text-gray-700 dark:text-gray-200">
              <h1 className="px-2">Seasonality : {seasonality}</h1>
            </div>
            <div className="flex items-center mt-4 text-white ">
              <h1 className="px-2 flex gap-2 items-center">
                Travel Time: {travel_time} days
              </h1>
            </div>
          </div>
          <Link to={`/tourist_spot_details/${_id}`}>
            <button className="btn bg-primary-1 hover:bg-purple-400 text-white hover:text-black">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;
