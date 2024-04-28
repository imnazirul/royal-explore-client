/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Typewriter } from "react-simple-typewriter";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Zoom, Fade } from "react-awesome-reveal";

const BannerSlider = () => {
  return (
    <div className="rounded-lg overflow-hidden dark:text-white">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div
              className="hero h-[210px] md:h-[300px] lg:h-[500px] "
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/TLKQMWk/cameron-highland-malysia.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  <h1 className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl font-poppins       dark:text-[#ffffffCC]">
                    <Typewriter
                      loop={0}
                      words={["Cameron Highland, Malaysia"]}
                    ></Typewriter>
                  </h1>

                  <Fade direction="up">
                    <p className="md:mb-5 max-sm:text-sm font-poppins lg:text-lg dark:text-[#ffffffCC]">
                      Explore the breathtaking Cameroon Highlands in Malaysia,
                      where verdant tea plantations, cool temperatures, and
                      idyllic retreat for nature lovers.
                    </p>
                  </Fade>
                  <Zoom delay={200}>
                    <button className="max-sm:btn-sm btn bg-primary-1 border-0 text-white hover:text-black max-sm:mt-2 font-poppins">
                      See Details
                    </button>
                  </Zoom>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="hero h-[210px] md:h-[300px] lg:h-[500px]"
              style={{
                backgroundImage: "url(https://i.ibb.co/DY8w15n/rangamati.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  <h1 className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl font-poppins dark:text-[#ffffffCC]">
                    <Typewriter
                      loop={0}
                      words={["Rangamati, Bangladesh"]}
                    ></Typewriter>
                  </h1>

                  <Fade direction="up">
                    <p className="md:mb-5 max-sm:text-sm font-poppins lg:text-lg dark:text-[#ffffffCC]">
                      Discover Rangamati, Bangladesh: a serene hill district
                      adorned with lush greenery, and indigenous culture.
                      Explore tribal villages, and embrace nature's tranquility.
                    </p>
                  </Fade>

                  <Zoom delay={200}>
                    <button className="max-sm:btn-sm btn bg-primary-1 border-0 text-white hover:text-black max-sm:mt-2 font-poppins">
                      See Details
                    </button>
                  </Zoom>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="hero h-[210px] md:h-[300px] lg:h-[500px]"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/cLtCFsn/bali-indonesia.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  <h1 className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl font-poppins dark:text-[#ffffffCC]">
                    <Typewriter
                      loop={0}
                      words={["Bali, Indonesia"]}
                    ></Typewriter>
                  </h1>

                  <Fade direction="up">
                    <p className="md:mb-5 max-sm:text-sm font-poppins lg:text-lg dark:text-[#ffffffCC]">
                      Bali, Indonesia: A tropical paradise famed for stunning
                      beaches, vibrant culture, and spiritual retreats. Discover
                      ancient cuisine, and embrace the warmth of Balinese
                      hospitality.
                    </p>
                  </Fade>
                  <Zoom delay={200}>
                    <button className="max-sm:btn-sm btn bg-primary-1 border-0 text-white hover:text-black max-sm:mt-2 font-poppins">
                      See Details
                    </button>
                  </Zoom>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="hero h-[210px] md:h-[300px] lg:h-[500px]"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/w74GL2Z/kualalampur-malyasia.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  <h1 className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl font-poppins dark:text-[#ffffffCC]">
                    <Typewriter
                      loop={0}
                      words={["Kuala Lampur, Malaysia"]}
                    ></Typewriter>
                  </h1>

                  <Fade direction="up">
                    <p className="md:mb-5 max-sm:text-sm font-poppins lg:text-lg dark:text-[#ffffffCC]">
                      Kuala Lumpur, Malaysia's vibrant capital, boasts iconic
                      landmarks like the Petronas Towers, and lush green spaces.
                      Explore its rich cultural tapestry and modern skyline.
                    </p>
                  </Fade>
                  <Zoom delay={200}>
                    <button className="max-sm:btn-sm btn bg-primary-1 border-0 text-white hover:text-black max-sm:mt-2 font-poppins">
                      See Details
                    </button>
                  </Zoom>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="hero h-[210px] md:h-[300px] lg:h-[500px]"
              style={{
                backgroundImage: "url(https://i.ibb.co/t4pd5Dy/bangkok.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  {" "}
                  <h1 className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl font-poppins dark:text-[#ffffffCC]">
                    <Typewriter
                      loop={0}
                      words={["Bangkok, Thailand"]}
                    ></Typewriter>
                  </h1>
                  <Fade direction="up">
                    {" "}
                    <p className="md:mb-5 max-sm:text-sm font-poppins lg:text-lg dark:text-[#ffffffCC]">
                      Discover Bangkok's vibrant street life, ornate temples,
                      and bustling markets. Experience the fusion of tradition
                      and capital city, where every corner unveils a new
                      adventure.
                    </p>
                  </Fade>
                  <Zoom delay={200}>
                    {" "}
                    <button className="max-sm:btn-sm btn bg-primary-1 border-0 text-white hover:text-black max-sm:mt-2 font-poppins">
                      See Details
                    </button>
                  </Zoom>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default BannerSlider;
