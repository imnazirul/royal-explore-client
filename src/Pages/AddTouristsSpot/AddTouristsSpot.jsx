import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleAddSpot = (e) => {
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
    const short_description = form.tourists_spot_name.value;
    const user_email = user?.email;
    const user_name = user?.displayName;

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
    };

    fetch("http://localhost:5000/touristSpots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTouristsSpot),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="p-6 container font-poppins bg-[#7c85ef] mx-auto rounded-lg">
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-5 font-poppins ">
        Add Tourists Spots
      </h1>
      <form
        onSubmit={handleAddSpot}
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
            placeholder="Total Visitors Per Year"
            className="w-full rounded-md input"
          />
        </div>
        <div className="col-span-full">
          <label className="text-white" htmlFor="short_description">
            Short Description
          </label>
          <input
            name="short_description"
            type="text"
            required
            placeholder="Short Description"
            className="w-full rounded-md input"
          />
        </div>

        <button className="btn bg-primary-1 hover:bg-primary-1 text-white font-poppins text-lg md:col-span-2">
          Add Spot
        </button>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
