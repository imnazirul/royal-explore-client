import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

const TouristsSpotCard = ({ data }) => {
  const {
    _id,
    average_cost,
    country_name,
    image,
    location,
    seasonality,
    short_description,
    total_visitors_per_year,
    tourists_spot_name,
    travel_time,
  } = data;

  return (
    <div className=" relative overflow-hidden card bg-base-100 shadow-xl border">
      <figure className="h-[250px] md:h-[250px] lg:h-[300px]">
        <img className="h-full w-full" src={image} alt="Shoes" />
      </figure>
      <p className="bg-[#8b3eeab3] rounded-3xl left-3 top-3 text-white font-bold font-poppins inline-block absolute px-4 py-2">
        {country_name}
      </p>
      <div className="p-4 flex flex-col max-h-fit h-full justify-between">
        <p className="flex items-start flex-col  gap-2 lg:gap-0 justify-between">
          <span className="text-primary-1 bg-[#8b3eea1A] inline-block px-3 md:py-1 md:font-semibold rounded-3xl">
            Travel Time: {travel_time} days
          </span>{" "}
          <span className="text-blue-600  inline-block font-bold text-xl md:text-2xl rounded-3xl">
            Average Cost: {average_cost} $
          </span>
        </p>
        <h2 className="card-title max text-xl md:text-2xl  font-poppins text-blue-600">
          {tourists_spot_name}
        </h2>
        <p className="lg:text-lg font-poppins">{short_description}</p>

        <div className="font-poppins">
          {" "}
          <p className=" flex gap-1 items-center text-lg md:text-xl">
            <span className="text-blue-600">Seasonality</span>: {seasonality}
          </p>
          <p className="flex gap-1 items-center md:text-lg">
            <IoLocationSharp className="text-primary-1 text-2xl"></IoLocationSharp>{" "}
            {location}
          </p>
        </div>
        <p className="font-poppins font-medium md:text-lg">
          Visitors Per Year:{" "}
          <span className="text-primary-1">
            {total_visitors_per_year} People
          </span>
        </p>
        <div className="card-actions justify-end">
          <Link
            to={`/tourist_spot_details/${_id}`}
            className="max-sm:btn-sm btn  bg-primary-1 text-white hover:text-black"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristsSpotCard;

TouristsSpotCard.propTypes = {
  data: PropTypes.object,
};
