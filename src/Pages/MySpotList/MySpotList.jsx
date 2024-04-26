import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import TouristsSpotCard from "../Home/TouristsSpotCard";

const MySpotList = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/touristspots/${user.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins underline mb-4">
        My Tourist Spots List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 lg:gap-6">
        {data.map((sData) => (
          <TouristsSpotCard key={sData._id} data={sData}></TouristsSpotCard>
        ))}
      </div>
    </div>
  );
};

export default MySpotList;
