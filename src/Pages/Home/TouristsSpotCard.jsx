/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

const TouristsSpotCard = ({ data }) => {
  const {
    average_cost,
    country_name,
    image,
    location,
    seasonality,
    short_description,
    total_visitors_per_year,
    tourists_spot_name,
    travel_time,
    user_email,
    user_name,
  } = data;

  return (
    <div className=" relative overflow-hidden card bg-base-100 shadow-xl border">
      <figure className="h-[180px] md:h-[250px] lg:h-[300px]">
        <img className="h-full w-full" src={image} alt="Shoes" />
      </figure>
      <p className="bg-[#8b3eeab3] rounded-3xl left-3 top-3 text-white font-bold font-poppins inline-block absolute px-4 py-2">
        {country_name}
      </p>
      <div className="p-4  flex flex-col max-h-fit h-full justify-between">
        <p className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between">
          <span className="text-primary-1 bg-[#8b3eea1A] inline-block px-3 py-1 font-semibold rounded-3xl">
            Travel Time: {travel_time}
          </span>{" "}
          <span className="text-blue-600  inline-block font-bold text-2xl rounded-3xl">
            {average_cost} $
          </span>
        </p>
        <h2 className="card-title text-2xl font-poppins text-blue-600">
          {tourists_spot_name}
        </h2>
        <p className="lg:text-lg font-poppins">{short_description}</p>

        <div className="font-poppins">
          {" "}
          <p className=" flex gap-1 items-center text-xl">
            <span className="text-blue-600">Seasonality</span>: {seasonality}
          </p>
          <p className="flex gap-1 items-center text-lg">
            <IoLocationSharp className="text-primary-1 text-2xl"></IoLocationSharp>{" "}
            {location}
          </p>
        </div>
        <p className="font-poppins font-medium text-lg">
          Visitors Per Year:{" "}
          <span className="text-primary-1">
            {total_visitors_per_year} People
          </span>
        </p>
        <div className="card-actions justify-end">
          <Link
            to={``}
            className="btn bg-primary-1 text-white hover:text-black"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristsSpotCard;