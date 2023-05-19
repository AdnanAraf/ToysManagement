import React, { useEffect, useState } from "react";
import AllToysTable from "../AllToysTable/AllToysTable";

const AllToys = () => {
  const [AllToys, setalltoys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/ToysData")
      .then((res) => res.json())
      .then((data) => setalltoys(data));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>
                <label></label>
              </th>
              <th>Seller</th>
              <th>Toys Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {AllToys.map((bookings) => (
              <AllToysTable
                key={bookings._id}
                Alltoysdata={bookings}

                //   handleBookingConfirm={handleBookingConfirm}
              ></AllToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
