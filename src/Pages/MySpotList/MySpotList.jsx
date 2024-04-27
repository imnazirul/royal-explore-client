import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MySpotListCard from "./MySpotListCard";

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

      <div>
        <MySpotListCard data={data}></MySpotListCard>
      </div>
    </div>
  );
};

export default MySpotList;
