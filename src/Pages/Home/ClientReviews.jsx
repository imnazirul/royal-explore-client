import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const ClientReviews = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container relative">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div className="border p-5 relative rounded-xl font-poppins mr-3 ">
          <div className=" flex justify-center ">
            <div className="relative">
              {" "}
              <img
                className="w-24 rounded-full"
                src="https://rhoomy.smartdemowp.com/wp-content/uploads/team-6.jpg"
                alt=""
              />
              <img
                className="w-6 h-6 absolute top-0 right-0"
                src="https://rhoomy.smartdemowp.com/wp-content/themes/rhoomy/assets/images/verified.svg"
                alt=""
              />
            </div>
          </div>

          <div className="text-2xl my-2 flex gap-1 justify-center text-[#FFD700]">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStar></FaRegStar>
          </div>
          <p className=" text-center my-2">
            Incredible attention to detail! Every aspect of our trip was
            tailored to perfection. Highly recommend this agency for anyone
            seeking a personalized travel experience.
          </p>
          <h1 className="text-2xl text-primary-1 font-bold text-center">
            Michael P. Grimaldo
          </h1>
          <ul className="flex justify-center gap-3 text-2xl">
            <li>
              <a href="#">
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare></FaTwitterSquare>
              </a>
            </li>{" "}
          </ul>
        </div>

        {/* two */}
        <div className="border p-5 relative rounded-xl font-poppins">
          <div className=" flex justify-center ">
            <div className="relative">
              {" "}
              <img
                className="w-24 rounded-full"
                src="https://rhoomy.smartdemowp.com/wp-content/uploads/team-2.jpg"
                alt=""
              />
              <img
                className="w-6 h-6 absolute top-0 right-0"
                src="https://rhoomy.smartdemowp.com/wp-content/themes/rhoomy/assets/images/verified.svg"
                alt=""
              />
            </div>
          </div>

          <div className="text-2xl my-2 flex gap-1 justify-center text-[#FFD700]">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStarHalfStroke></FaRegStarHalfStroke>
          </div>
          <p className=" text-center my-2">
            Exceeded all expectations! From start to finish, the team went above
            and beyond to ensure our vacation was flawless. Will definitely be
            booking with them again!
          </p>
          <h1 className="text-2xl text-primary-1 font-bold text-center">
            Sargam S. Singh
          </h1>
          <ul className="flex justify-center gap-3 text-2xl">
            <li>
              <a href="#">
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare></FaTwitterSquare>
              </a>
            </li>{" "}
          </ul>
        </div>
        {/* three */}
        <div className="border p-5 relative rounded-xl font-poppins">
          <div className=" flex justify-center ">
            <div className="relative">
              {" "}
              <img
                className="w-24 rounded-full"
                src="https://rhoomy.smartdemowp.com/wp-content/uploads/team-1.jpg"
                alt=""
              />
              <img
                className="w-6 h-6 absolute top-0 right-0"
                src="https://rhoomy.smartdemowp.com/wp-content/themes/rhoomy/assets/images/verified.svg"
                alt=""
              />
            </div>
          </div>
          <div className="text-2xl my-2 flex gap-1 justify-center text-[#FFD700]">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStar></FaRegStar>
          </div>
          <p className=" text-center my-2">
            Exceptional service! The staff was knowledgeable, friendly, and
            always available to assist. Cant wait to plan our next getaway!
          </p>
          <h1 className="text-2xl text-primary-1 font-bold text-center">
            Harijeet M. Siller
          </h1>
          <ul className="flex justify-center gap-3 text-2xl">
            <li>
              <a href="#">
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare></FaTwitterSquare>
              </a>
            </li>{" "}
          </ul>
        </div>
        {/* four */}
        <div className="border p-5 relative rounded-xl font-poppins">
          <div className=" flex justify-center ">
            <div className="relative">
              {" "}
              <img
                className="w-24 rounded-full"
                src="https://rhoomy.smartdemowp.com/wp-content/uploads/team-5.jpg"
                alt=""
              />
              <img
                className="w-6 h-6 absolute top-0 right-0"
                src="https://rhoomy.smartdemowp.com/wp-content/themes/rhoomy/assets/images/verified.svg"
                alt=""
              />
            </div>
          </div>
          <div className="text-2xl my-2 flex gap-1 justify-center text-[#FFD700]">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStar></FaRegStar>
          </div>
          <p className=" text-center my-2">
            From the moment we arrived until our departure, we felt like VIPs.
            Thank you for creating unforgettable memories that will last a
            lifetime.
          </p>
          <h1 className="text-2xl text-primary-1 font-bold text-center">
            Colin H. Renda
          </h1>
          <ul className="flex justify-center gap-3 text-2xl">
            <li>
              <a href="#">
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare></FaTwitterSquare>
              </a>
            </li>{" "}
          </ul>
        </div>
        {/* five */}
        <div className="border p-5 relative rounded-xl font-poppins">
          <div className=" flex justify-center ">
            <div className="relative">
              {" "}
              <img
                className="w-24 rounded-full"
                src="https://rhoomy.smartdemowp.com/wp-content/uploads/team-3.jpg"
                alt=""
              />
              <img
                className="w-6 h-6 absolute top-0 right-0"
                src="https://rhoomy.smartdemowp.com/wp-content/themes/rhoomy/assets/images/verified.svg"
                alt=""
              />
            </div>
          </div>
          <div className="text-2xl my-2 flex gap-1 justify-center text-[#FFD700]">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStarHalfStroke></FaRegStarHalfStroke>
          </div>
          <p className=" text-center my-2">
            An unforgettable journey! From the breathtaking landscapes to the
            charming accommodations. Thank you for an unforgettable vacation!
          </p>
          <h1 className="text-2xl text-primary-1 font-bold text-center">
            Adam K. Jollio
          </h1>
          <ul className="flex justify-center gap-3 text-2xl">
            <li>
              <a href="#">
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare></FaTwitterSquare>
              </a>
            </li>{" "}
          </ul>
        </div>
      </Slider>
      <button
        className="btn absolute left-2 top-[50%] rounded-full outline-none"
        onClick={previous}
      >
        <IoIosArrowBack></IoIosArrowBack>
      </button>{" "}
      <button
        className="btn absolute right-2 top-[50%] rounded-full outline-none"
        onClick={next}
      >
        <IoIosArrowForward></IoIosArrowForward>
      </button>
    </div>
  );
};

export default ClientReviews;
