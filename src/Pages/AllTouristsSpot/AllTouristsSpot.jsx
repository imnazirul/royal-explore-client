import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SpotCard from "../../Shared/SpotCard/SpotCard";

const AllTouristsSpot = () => {
  const [data, setData] = useState(null);
  const [filterName, setFilterName] = useState("Filter By Cost");

  useEffect(() => {
    fetch("http://localhost:5000/touristspots")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return (
      <div className="flex h-[70vh] justify-center items-center">
        <div className="h-20 w-20 md:w-24 md:h-24 border-[6px] md:border-[8px] border-dashed rounded-full animate-spin border-primary-1"></div>
      </div>
    );
  }

  const handleFilterLTH = async () => {
    setFilterName("Filtered Cost Low to Hight");
    const res = await fetch("http://localhost:5000/touristspotsad");
    const data = await res.json();

    setData(data);
  };
  const handleFilterHTL = async () => {
    setFilterName("Filtered Cost High to Low");
    const res = await fetch("http://localhost:5000/touristspotsdd");
    const data = await res.json();
    setData(data);
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins underline mb-4">
        All Tourist Spots List
      </h1>

      <div className="dropdown dropdown-bottom flex justify-center mb-3">
        <div tabIndex={0} role="button" className="btn text-lg m-1 flex gap-2">
          {filterName}
          <IoIosArrowDown></IoIosArrowDown>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={handleFilterLTH}>
            <a>Low to High</a>
          </li>
          <li onClick={handleFilterHTL}>
            <a>High to Low</a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 lg:gap-6">
        {data.map((sData) => (
          <SpotCard key={sData._id} spot={sData}></SpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
