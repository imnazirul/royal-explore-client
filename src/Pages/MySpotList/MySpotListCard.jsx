import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MySpotListCard = ({ data }) => {
  const navigate = useNavigate();

  const [spots, setSpots] = useState([]);
  useEffect(() => {
    if (data) {
      setSpots(data);
    }
  }, [data]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8b3eea",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/touristspots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              const remainingSpots = spots.filter((spot) => spot._id !== id);
              setSpots(remainingSpots);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/my_list/update_spot/${id}`);
  };

  return (
    <div className="overflow-x-auto font-poppins ">
      <table className="table">
        <thead className="text-center bg-primary-1 text-white text-sm">
          <tr>
            <th>Index</th>
            <th>Spot Name</th>
            <th>Location</th>
            <th>Travel Time</th>
            <th>Average Cost</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {/* row 1 */}

          {spots.map((spot, index) => (
            <tr key={spot._id}>
              <th>{index + 1}</th>
              <td>{spot.tourists_spot_name}</td>
              <td>{spot.location}</td>
              <td>{spot.travel_time} Days</td>
              <td>{spot.average_cost} $</td>
              <td className="flex gap-3 justify-center">
                <button
                  onClick={() => handleDelete(spot._id)}
                  className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(spot._id)}
                  className="btn btn-sm bg-primary-1 hover:bg-purple-700 text-white"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MySpotListCard;

MySpotListCard.propTypes = {
  data: PropTypes.array,
};
