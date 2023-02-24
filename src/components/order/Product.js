import React from "react";
// import image1 from "../../asset/images/beeffriedrice.jpeg"
// import image2 from "../../asset/images/group3.png"
import { FaStar } from "react-icons/fa";
import "../../asset/style/product.css";

const Product = ({ product }) => {

  const stars = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];

  return (
    <main className="product-main">
      {product && (<div className="product_container">
        <div className="product_item item_1">
          <div>
            <img
              className="img1"
              sizes="40px"
              src={product.image}
              alt="friedrice"
            />
            <p className="product_sub">{product.name}</p>
          </div>
        </div>
        <div>
          <div className="product_item">
            <img className="img2" src={product.image2} alt="group" />
            <div className="product_wrap">
              <p className="product_lable">GHC</p>
              <p className="product_title"> {product.price}</p>
              <p className="product_subtitle">{product.desc}</p>
              <ul className="fa">
                {stars.map((star, li) => {
                  return <li key={li}>{star}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>)}
    </main>
  );
};

export default Product;
