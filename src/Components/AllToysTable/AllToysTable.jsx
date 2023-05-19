import React from "react";
import { Link } from "react-router-dom";

const AllToysTable = ({ Alltoysdata }) => {
  //   console.log(Alltoysdata);

  const { _id, quantity, price, Toyname, SellerName, category } = Alltoysdata;

  return (
    <tr>
      <th></th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24"></div>
        </div>
      </td>
      <td>{SellerName}</td>
      <td>{Toyname}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/singletoys/${_id}`}>
          <button className="btn btn-info">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToysTable;
