import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const TouristSpotDetails = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState();

  useEffect(() => {
    fetch(
      `https://tourism-management-server-liart.vercel.app/touristspot/${id}`
    )
      .then((res) => res.json())
      .then((data) => setSpot(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!spot) {
    return (
      <div className="flex h-[70vh] justify-center items-center">
        <div className="h-20 w-20 md:w-24 md:h-24 border-[6px] md:border-[8px] border-dashed rounded-full animate-spin border-primary-1"></div>
      </div>
    );
  }

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
    long_description,
    user_email,
    user_name,
  } = spot;

  return (
    <div>
      <Helmet>
        <title>Details -Tourist Spot | Royal Explore</title>
      </Helmet>
      <h1 className="text-xl font-semibold md:text-3xl lg:text-4xl font-poppins underline text-darkBlue-1 text-center my-3">
        {tourists_spot_name}
      </h1>
      <div className="lg:h-[500px] rounded-lg overflow-hidden">
        <img className="h-full w-full" src={image} alt="" />
      </div>
      <div className=" font-poppins text-sm md:text-2xl flex gap-5 justify-center  my-2">
        <a className="flex  gap-1 items-center cursor-pointer">
          {" "}
          <IconContext.Provider value={{ color: "red" }}>
            <TiSocialYoutube></TiSocialYoutube>
          </IconContext.Provider>{" "}
          <p className="lg:text-xl">Youtube</p>
        </a>
        <a className="flex gap-1 items-center cursor-pointer">
          {" "}
          <IconContext.Provider value={{ color: "blue" }}>
            <FaFacebookSquare></FaFacebookSquare>
          </IconContext.Provider>{" "}
          <p className="lg:text-xl">Facebook</p>
        </a>
        <a className="flex gap-1 items-center cursor-pointer">
          <FaSquareXTwitter></FaSquareXTwitter>
          <p className="lg:text-xl">Twitter/X</p>
        </a>
      </div>
      <p className="hidden max-sm:inline-block font-poppins text-lg md:text-2xl px-3 py-1 rounded-3xl bg-[#8b3eea33] text-primary-1 font-semibold  mb-3">
        {tourists_spot_name}, {country_name}
      </p>
      <div className="flex justify-between items-start md:items-center ">
        <p className="hidden md:inline-block font-poppins text-lg md:text-2xl px-3 py-1 rounded-3xl bg-[#8b3eea33] text-primary-1 font-semibold  mb-3">
          {tourists_spot_name}, {country_name}
        </p>
        <div className="font-poppins text-xl md:text-3xl  text-primary-1 font-semibold text-center mb-3 flex flex-col">
          {average_cost} $
          <p className="overline text-lg md:text-xl"> Average Cost </p>
        </div>
      </div>
      <p className="text-lg md:text-xl font-poppins text-primary-1 font-semibold mb-5">
        Travel Duration: {travel_time} days
      </p>
      <div>
        <p className="font-poppins md:text-lg font-semibold">
          <span className=" md:text-xl  ">Added By: </span>
          {user_name}
        </p>
        <p className="font-poppins md:text-lg font-semibold">
          <span className=" md:text-xl ">Email: </span>
          {user_email}
        </p>
      </div>
      <hr className="my-4" />
      <div>
        <p className="text-blue-600 font-poppins text-lg md:text-2xl font-semibold">
          Seasonality: {seasonality}
        </p>
        <p className=" md:text-xl">{short_description}</p>

        <hr className="my-4" />
        <h1 className="text-lg md:text-2xl flex gap-1 text-primary-1 items-center font-bold my-2">
          <FaLocationDot></FaLocationDot> {location}
        </h1>

        <p className="md:text-xl mb-2 md:mb-5 text-blue-600 font-semibold">
          Visitors Per Year: {total_visitors_per_year} People
        </p>
        <p className="font-poppins text-sm md:text-lg">
          <span className="text-blue-600 font-bold">Long Description: </span>
          {long_description}
        </p>
      </div>
    </div>
  );
};

export default TouristSpotDetails;
