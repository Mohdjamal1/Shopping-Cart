import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartReducer);
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light py-3 shadow-sm"
        style={{ backgroundColor: "#607d8b" }}
      >
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 text-white" to="/">
            LA Collection
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/aboutUs">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              {!user ? (
                <button
                  onClick={() => navigate("/login")}
                  className="btn btn-primary"
                >
                  <i className="fa fa-sign-in"></i> Login
                </button>
              ) : (
                <button
                  onClick={() => navigate("/profile")}
                  className="btn btn-success ms-2"
                >
                  <i className="fa fa-user-plus me-1"></i>Profile
                </button>
              )}

              {user && (
                <button
                  onClick={() => navigate("/cart")}
                  className="btn btn-dark ms-2"
                >
                  <i className="fa fa-shopping-cart me-1"></i>Cart({cart.length}
                  )
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
