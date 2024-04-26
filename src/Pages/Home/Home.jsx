import { useLoaderData } from "react-router-dom";
import BannerSlider from "./BannerSlider";
import TouristsSpotCard from "./TouristsSpotCard";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import ClientReviews from "./ClientReviews";
import Blogs from "./Blogs";

const Home = () => {
  const [data, setData] = useState([]);
  const loadedData = useLoaderData();
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/touristspots")
      .then((res) => res.json())
      .then((data) => setData(data));

    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setblogs(data));
  }, []);

  console.log(loadedData);

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
          {data.map((data, idx) => (
            <TouristsSpotCard key={idx} data={data}></TouristsSpotCard>
          ))}
        </div>
      </div>
      <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins">
          Countries
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mt-3 mb-4">
          Explore diverse cultures and landscapes across the globe. From the
          iconic landmarks of France to the pristine beaches of Thailand,
          discover your next adventure with our curated country guides.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-3 lg:gap-6">
          {loadedData.map((data, idx) => (
            <CountryCard country={data} key={idx}></CountryCard>
          ))}
        </div>
      </div>

      <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins">
          Blogs And Articles
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mt-3 mb-4">
          Explore our client reviews section for authentic testimonials on
          unforgettable travel experiences. Discover why our clients trust us to
          create their dream vacations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 lg:gap-6">
          {blogs.map((blog, idx) => (
            <Blogs key={idx} blog={blog}></Blogs>
          ))}
        </div>
      </div>

      <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins">
          Our Client Words
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mt-3 mb-4">
          Explore our client reviews section for authentic testimonials on
          unforgettable travel experiences. Discover why our clients trust us to
          create their dream vacations.
        </p>
        <div>
          <ClientReviews></ClientReviews>
        </div>
      </div>
    </div>
  );
};

export default Home;
