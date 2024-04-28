import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MySpotListCard from "./MySpotListCard";
import { Helmet } from "react-helmet-async";

const MySpotList = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://tourism-management-server-liart.vercel.app/touristspots/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Helmet>
        <title>My Spot List | Royal Explore</title>
      </Helmet>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins underline mb-4">
        My Tourist Spots List
      </h1>

      <div>
        {data ? (
          <MySpotListCard data={data}></MySpotListCard>
        ) : (
          <div className="flex min-h-[70vh] items-center mx-auto justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MySpotList;
