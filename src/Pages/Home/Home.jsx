import { useLoaderData } from "react-router-dom";
import BannerSlider from "./BannerSlider";
import TouristsSpotCard from "./TouristsSpotCard";

const Home = () => {
  const Datas = useLoaderData();

  return (
    <div>
      <BannerSlider></BannerSlider>

      <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins">
          Tourists Spots
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mt-3 mb-4">
          Explore breathtaking landscapes, rich culture, and historical
          landmarks. From iconic monuments to hidden gems, our destination
          offers unforgettable experiences for every traveler. Start your
          adventure today!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 lg:gap-6">
          {Datas.map((data, idx) => (
            <TouristsSpotCard key={idx} data={data}></TouristsSpotCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
