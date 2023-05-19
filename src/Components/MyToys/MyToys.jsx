import React, { useContext, useEffect, useState } from "react";
import MyBookingTable from "../BookingTable/MyBookingTable";
import { AuthContext } from "../Provider/AuthProvider";

const MyToys = () => {
  const [booking, setbooking] = useState([]);

  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/ToyData?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setbooking(data));
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
              <th>Toys Name</th>
              <th>Seller name</th>
              <th>Email</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Details</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((booking) => (
              <MyBookingTable
                key={booking._id}
                bookingData={booking}
                //   handleDelete={handleDelete}
                //   handleBookingConfirm={handleBookingConfirm}
              ></MyBookingTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
