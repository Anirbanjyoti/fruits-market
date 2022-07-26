import React from "react";
import { useNavigate } from "react-router-dom";
import './Product.css'

const Product = ({ p }) => {
  const {_id, img, name } = p;
  const navigate = useNavigate();
  //   console.log(img);
  const navigateToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="home-page-product">
      <img src={img} alt="images"></img>
      <br></br>
      <b>{name}</b>
      <br></br>
      <button onClick={() => navigateToDetails(_id)} className="btn btn-success">
        Click to Details
      </button>
    </div>
  );
};

export default Product;
