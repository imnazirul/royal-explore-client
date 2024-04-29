import BannerSlider from "./BannerSlider";
import TouristsSpotCard from "./TouristsSpotCard";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import ClientReviews from "./ClientReviews";
import Blogs from "./Blogs";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
import Contact from "./Contact";

const Home = () => {
  const [data, setData] = useState(null);
  const [countries, setCountries] = useState(null);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    //tourist spot data fetch
    fetch(`https://tourism-management-server-liart.vercel.app/touristspots`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 6) {
          const newData = data.slice(0, 6);
          setData(newData);
        } else {
          setData(data);
        }
      });

    //country data fetch
    fetch("https://tourism-management-server-liart.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));

    //blogs data fetch
    fetch("https://tourism-management-server-liart.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home | Royal Explore</title>
      </Helmet>
      <BannerSlider></BannerSlider>

      <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
        {" "}
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins">
          <Typewriter
            cursor={"|"}
            loop={0}
            words={["Tourists Spots", "Popular Destination"]}
          >
            {" "}
          </Typewriter>
        </h1>
        <Fade fraction={0} direction="up" triggerOnce={true}>
          <p className="text-sm md:text-lg text-center max-w-3xl mx-auto mt-3 mb-4 font-poppins">
            Explore breathtaking landscapes, rich culture, and historical
            landmarks. From iconic monuments to hidden gems, our destination
            offers unforgettable experiences for every traveler. Start your
            adventure today!
          </p>
        </Fade>
        {data ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 lg:gap-6">
            {data.map((data, idx) => (
              <TouristsSpotCard key={idx} data={data}></TouristsSpotCard>
            ))}
          </div>
        ) : (
          <div className="flex h-20 md:my-10 items-center mx-auto justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
          </div>
        )}
      </div>

      <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
        <Fade fraction={0} direction="down" triggerOnce={true}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins">
            Countries
          </h1>
        </Fade>
        <Fade fraction={0} direction="up" triggerOnce={true}>
          <p className="text-sm md:text-lg text-center max-w-3xl mx-auto mt-3 mb-4 font-poppins">
            Explore diverse cultures and landscapes across the globe. From the
            iconic landmarks of France to the pristine beaches of Thailand,
            discover your next adventure with our curated country guides.
          </p>
        </Fade>

        {countries ? (
          <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-3 lg:gap-6">
            {countries.map((country) => (
              <CountryCard country={country} key={country._id}></CountryCard>
            ))}
          </div>
        ) : (
          <div className="flex h-20 md:my-10 items-center mx-auto justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
          </div>
        )}
      </div>

      <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
        <Fade fraction={0} direction="down" triggerOnce={true}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins">
            Blogs And Articles
          </h1>
        </Fade>

        <Fade fraction={0} direction="up" triggerOnce={true}>
          <p className="text-sm md:text-lg text-center max-w-3xl mx-auto mt-3 mb-4 font-poppins">
            Explore our client reviews section for authentic testimonials on
            unforgettable travel experiences. Discover why our clients trust us
            to create their dream vacations.
          </p>
        </Fade>
        {blogs ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 lg:gap-6">
            {blogs.map((blog) => (
              <Blogs key={blog._id} blog={blog}></Blogs>
            ))}
          </div>
        ) : (
          <div className="flex h-20 md:my-10 items-center mx-auto justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
          </div>
        )}
      </div>

      <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins">
          <Typewriter
            cursor={"|"}
            loop={0}
            words={["Our Client Words", "Our Client Reviews"]}
          >
            {" "}
          </Typewriter>
        </h1>
        <Fade fraction={0} direction="up" triggerOnce={true}>
          <p className="text-sm md:text-lg text-center max-w-3xl mx-auto mt-3 mb-4 font-poppins">
            Explore our client reviews section for authentic testimonials on
            unforgettable travel experiences. Discover why our clients trust us
            to create their dream vacations.
          </p>
        </Fade>
        <div>
          <ClientReviews></ClientReviews>
        </div>
      </div>

      <div className="mt-8 lg:mt-10 mb-5 lg:mb-10">
        <Fade fraction={0} direction="down" triggerOnce={true}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins">
            How can we Help?
          </h1>
        </Fade>
        <Fade fraction={0} direction="up" triggerOnce={true}>
          <p className="text-sm md:text-lg text-center max-w-3xl mx-auto mt-3 mb-4 font-poppins">
            Contact us and get strapped in for a better adventure experience in
            your life-time. Just look for opportunity to be with nature.
          </p>
        </Fade>
        <div>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};

export default Home;
