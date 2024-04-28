/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const CountryCard = ({ country }) => {
  const navigate = useNavigate();
  const { name, description, image } = country;

  const handleClick = (name) => {
    navigate(`spot_list/${name}`);
  };

  return (
    <div
      onClick={() => {
        handleClick(name);
      }}
      className="card border cursor-pointer font-poppins bg-base-100 overflow-hidden shadow-xl"
    >
      <div className="relative h-[180px]  md:h-[250px] lg:h-[300px]">
        {" "}
        <img className="h-full w-full" src={image} alt="Shoes" />
        <h1
          style={{ transform: "translate(-50%,-50%)" }}
          className="text-white font-bold font-poppins absolute text-4xl md:text-6xl top-1/2 left-1/2 drop-shadow-2xl "
        >
          {name}
        </h1>
      </div>
      <div className="card-body">
        <h2 className="card-title text-primary-1 ">{name}</h2>
        <p className=" max-sm:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CountryCard;
