// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BannerSlider = () => {
  return (
    <div className="rounded-lg overflow-hidden">
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
              className="hero h-[210px] md:h-[300px] lg:h-[500px]"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/yhWVPRD/owen-lystrup-bo-Lgi-M0qwkg-unsplas.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  <h1
                    className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    Contemporary Charm
                  </h1>
                  <p
                    className="md:mb-5 max-sm:text-sm"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    Chic modern loft nestled in the heart of historic downtown,
                    blending contemporary style with the charm of its heritage
                    surroundings.
                  </p>
                  <button
                    className="max-sm:btn-sm btn bg-[#3B7197] border-0 text-white hover:text-black max-sm:mt-2"
                    data-aos="zoom-in-down"
                    data-aos-delay="1000"
                  >
                    See Details
                  </button>
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
                  "url(https://i.ibb.co/yhWVPRD/owen-lystrup-bo-Lgi-M0qwkg-unsplas.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  <h1
                    className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    Contemporary Charm
                  </h1>
                  <p
                    className="md:mb-5 max-sm:text-sm"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    Chic modern loft nestled in the heart of historic downtown,
                    blending contemporary style with the charm of its heritage
                    surroundings.
                  </p>
                  <button
                    className="max-sm:btn-sm btn bg-[#3B7197] border-0 text-white hover:text-black max-sm:mt-2"
                    data-aos="zoom-in-down"
                    data-aos-delay="1000"
                  >
                    See Details
                  </button>
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
                  "url(https://i.ibb.co/yhWVPRD/owen-lystrup-bo-Lgi-M0qwkg-unsplas.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  <h1
                    className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    Contemporary Charm
                  </h1>
                  <p
                    className="md:mb-5 max-sm:text-sm"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    Chic modern loft nestled in the heart of historic downtown,
                    blending contemporary style with the charm of its heritage
                    surroundings.
                  </p>
                  <button
                    className="max-sm:btn-sm btn bg-[#3B7197] border-0 text-white hover:text-black max-sm:mt-2"
                    data-aos="zoom-in-down"
                    data-aos-delay="1000"
                  >
                    See Details
                  </button>
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
                  "url(https://i.ibb.co/yhWVPRD/owen-lystrup-bo-Lgi-M0qwkg-unsplas.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  <h1
                    className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    Contemporary Charm
                  </h1>
                  <p
                    className="md:mb-5 max-sm:text-sm"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    Chic modern loft nestled in the heart of historic downtown,
                    blending contemporary style with the charm of its heritage
                    surroundings.
                  </p>
                  <button
                    className="max-sm:btn-sm btn bg-[#3B7197] border-0 text-white hover:text-black max-sm:mt-2"
                    data-aos="zoom-in-down"
                    data-aos-delay="1000"
                  >
                    See Details
                  </button>
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
                  "url(https://i.ibb.co/yhWVPRD/owen-lystrup-bo-Lgi-M0qwkg-unsplas.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  <h1
                    className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    Contemporary Charm
                  </h1>
                  <p
                    className="md:mb-5 max-sm:text-sm"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    Chic modern loft nestled in the heart of historic downtown,
                    blending contemporary style with the charm of its heritage
                    surroundings.
                  </p>
                  <button
                    className="max-sm:btn-sm btn bg-[#3B7197] border-0 text-white hover:text-black max-sm:mt-2"
                    data-aos="zoom-in-down"
                    data-aos-delay="1000"
                  >
                    See Details
                  </button>
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
