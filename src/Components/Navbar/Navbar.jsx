import React from "react";
import "./Navbar.css";
import { BsCart3 } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateCart = () => {
    navigate("/cart");
  };

  const navigateProduct = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      {location.pathname === "/cart" ? (
        <div className="Navbar">
          <div className="navbar__content">
            <h3>WonderStore</h3>
            <i onClick={navigateProduct}>
              <MdAddShoppingCart />
              <small>Back to Store</small>
            </i>
          </div>
        </div>
      ) : (
        <div className="Navbar">
          <div className="navbar__content">
            <h3 onClick={navigateProduct}>WonderStore</h3>
            <i onClick={navigateCart}>
              <BsCart3 />
              <sup>{cart.length}</sup>
            </i>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
