import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const MyBookingTable = ({ bookingData, HandleDelete }) => {
  console.log(bookingData);
  const {
    _id,
    price,
    quantity,
    SellerName,
    Rating,
    Toyname,
    category,
    details,
    email,
    photo,
  } = bookingData;

  return (
    <tr>
      <th>
        <button
          onClick={() => HandleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Link to={`/UpdateToy/${_id}`}>
          <FontAwesomeIcon className="ml-[30px] mt-[-40px]" icon={faPen} />
        </Link>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24"></div>
        </div>
      </td>
      <td>{Toyname}</td>
      <td>{SellerName}</td>
      <td>{email}</td>
      <td>{quantity}</td>
      <td>{parseInt(price)}</td>
      <td>{Rating}</td>
      <td>{category}</td>
      <td>{details}</td>
      <img className="h-[200px] w-[200px]" src={photo}></img>
    </tr>
  );
};

export default MyBookingTable;
