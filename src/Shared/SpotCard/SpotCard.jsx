import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
    <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg bg-primary-1 font-poppins flex flex-col">
      <img
        className="object-cover object-center w-full h-40 md:h-56"
        src={image}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <h1 className="md:mx-3 md:text-lg font-semibold text-white">
          {tourists_spot_name}, {country_name}
        </h1>
      </div>

      <div className="px-5 py-4 w-full flex flex-col  justify-between flex-1">
        <h1 className="text-lg md:text-xl font-semibold text-blue-200">
          Average Cost: {average_cost} $
        </h1>
        <h1 className="mt-2 text-gray-100 ">
          Visitors Per Year: {total_visitors_per_year} People
        </h1>

        <p className="py-2 text-white max-sm:text-sm">{short_description}</p>

        <div className="flex flex-col md:flex-row md:items-center justify-between md:mt-4">
          {" "}
          <div className="mb-2">
            {" "}
            <div className="flex items-center text-gray-100">
              <h1 className="">Seasonality : {seasonality}</h1>
            </div>
            <div className="flex items-center mt-2 md:mt-4 text-white ">
              <h1 className="flex text-blue-100 gap-2 items-center">
                Travel Time: {travel_time} days
              </h1>
            </div>
          </div>
          <Link to={`/tourist_spot_details/${_id}`}>
            <button className="max-sm:btn-sm btn bg-primary-1 hover:bg-purple-400 text-white hover:text-black">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;

SpotCard.propTypes = {
  spot: PropTypes.object,
};
