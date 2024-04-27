import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const UpdateSpot = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [spot, setSpot] = useState(null);

  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/touristspot/${id}`)
      .then((res) => res.json())
      .then((data) => setSpot(data));
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

  const handleUpdateSpot = (e) => {
    e.preventDefault();
    const form = e.target;

    const tourists_spot_name = form.tourists_spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const image = form.image.value;
    const total_visitors_per_year = form.total_visitors_per_year.value;
    const short_description = form.short_description.value;
    const user_email = user?.email;
    const user_name = user?.displayName;
    const long_description = form.long_description.value || "Not Available";

    const newTouristsSpot = {
      user_email,
      user_name,
      tourists_spot_name,
      country_name,
      location,
      average_cost,
      seasonality,
      travel_time,
      image,
      total_visitors_per_year,
      short_description,
      long_description,
    };

    console.log(newTouristsSpot);
  };

  return (
    <div className="font-poppins mt-4 bg-blue-300 p-4 rounded-xl">
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-5  ">
        <div className="underline mb-5 ">Update Tourist Spot Info</div>
        <div className="text-purple-800">
          {tourists_spot_name}, {country_name}
        </div>
      </h1>
      <form
        onSubmit={handleUpdateSpot}
        className=" grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 md:gap-8"
      >
        <div>
          <label className="text-white" htmlFor="tourists_spot_name">
            Tourists Spot Name
          </label>
          <input
            name="tourists_spot_name"
            type="text"
            required
            defaultValue={tourists_spot_name}
            placeholder="Tourists Spot Name"
            className="w-full rounded-md input"
          />
        </div>

        <div>
          <label className="text-white" htmlFor="country_name">
            Country Name
          </label>
          <input
            name="country_name"
            type="text"
            required
            defaultValue={country_name}
            placeholder="Country Name"
            className="w-full rounded-md input"
          />
        </div>

        <div>
          <label className="text-white" htmlFor="location">
            Location
          </label>
          <input
            name="location"
            type="text"
            required
            defaultValue={location}
            placeholder="Location"
            className="w-full rounded-md input"
          />
        </div>

        <div>
          <label className="text-white" htmlFor="average_cost">
            Average Cost
          </label>
          <input
            name="average_cost"
            type="number"
            required
            defaultValue={average_cost}
            placeholder="Average Cost"
            className="w-full rounded-md input"
          />
        </div>

        <div>
          <label className="text-white" htmlFor="seasonality">
            Seasonality
          </label>
          <input
            name="seasonality"
            type="text"
            required
            defaultValue={seasonality}
            placeholder="Seasonality"
            className="w-full rounded-md input"
          />
        </div>

        <div>
          <label className="text-white" htmlFor="travel_time">
            Travel Time(days)
          </label>
          <input
            name="travel_time"
            type="number"
            required
            defaultValue={travel_time}
            placeholder="Travel Time(days)"
            className="w-full rounded-md input"
          />
        </div>

        <div className="">
          <label className="text-white" htmlFor="image">
            Photo URL
          </label>
          <input
            name="image"
            type="text"
            required
            defaultValue={image}
            placeholder="Photo URL"
            className="w-full rounded-md input"
          />
        </div>

        <div className="">
          <label className="text-white" htmlFor="total_visitors_per_year">
            Total Visitors Per Year
          </label>
          <input
            name="total_visitors_per_year"
            type="number"
            required
            defaultValue={total_visitors_per_year}
            placeholder="Total Visitors Per Year"
            className="w-full rounded-md input"
          />
        </div>
        <div className="">
          <label className="text-white" htmlFor="short_description">
            Short Description
          </label>
          <br />
          <textarea
            name="short_description"
            required
            defaultValue={short_description}
            placeholder="Short Description"
            className="textarea w-full textarea-bordered resize-none"
          ></textarea>
        </div>
        <div className="">
          <label className="text-white" htmlFor="short_description">
            Long Description (Optional)
          </label>
          <br />
          <textarea
            name="long_description"
            placeholder="Long Description (Optional)"
            defaultValue={long_description ? long_description : ""}
            className="textarea w-full textarea-bordered resize-none"
          ></textarea>
        </div>

        <button className="btn bg-primary-1 hover:bg-primary-1 text-white font-poppins text-lg md:col-span-2">
          Update Spot
        </button>
      </form>
    </div>
  );
};

export default UpdateSpot;
