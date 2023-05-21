import React, { useContext, useEffect, useState } from "react";
import MyBookingTable from "../BookingTable/MyBookingTable";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
  const [booking, setbooking] = useState([]);

  const { user } = useContext(AuthContext);

  const url = `https://toys-server-adnanaraf.vercel.app/myToys/${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setbooking(data));
  }, [user]);
  const HandleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toys-server-adnanaraf.vercel.app/ToysData/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = booking.filter(
                (bookings) => bookings._id !== _id
              );
              setbooking(remaining);
            }
          });
      }
    });
  };
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
            {booking.map((bookings) => (
              <MyBookingTable
                key={bookings._id}
                bookingData={bookings}
                HandleDelete={HandleDelete}
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
