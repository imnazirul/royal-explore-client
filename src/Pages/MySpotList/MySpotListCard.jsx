const MySpotListCard = ({ data }) => {
  const handleDelete = (id) => {
    console.log(id);
  };

  const handleUpdate = (id) => {
    console.log(id);
  };

  return (
    <div className="overflow-x-auto font-poppins ">
      <table className="table">
        {/* head */}
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

          {data.map((sData, index) => (
            <tr key={sData._id}>
              <th>{index + 1}</th>
              <td>{sData.tourists_spot_name}</td>
              <td>{sData.location}</td>
              <td>{sData.travel_time} Days</td>
              <td>{sData.average_cost} $</td>
              <td className="flex gap-3 justify-center">
                <button
                  onClick={() => handleDelete(sData._id)}
                  className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(sData._id)}
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
