import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

export default function Navbar() {
  let data = useCart();
  const [cartView, setCartview] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark position-sticky"
        style={{
          boxShadow: "0px 10px 20px black",
          filter: "blur(20)",
          position: "fixed",
          zIndex: "10",
          width: "100%",
          backgroundColor: "#FFE682",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand fs-1 fst-italic"
            style={{ color: "brown" }}
            to="/"
          >
            GoFood
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-auto mb-2">
              <li className="nav-item">
                <Link
                  style={{ color: "brown" }}
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    style={{ color: "brown" }}
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/myOrder"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            <div className="d-flex">
              {!localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="btn bg-white text-success mx-1"
                    to="/login"
                    style={{ color: "brown" }}
                  >
                    Login
                  </Link>
                  <Link
                    className="btn bg-white text-success mx-1"
                    to="/createuser"
                  >
                    Signup
                  </Link>
                </li>
              ) : (
                <>
                  <div
                    style={{ color: "brown" }}
                    className="btn bg-white text-success mx-2"
                    onClick={() => {
                      setCartview(true);
                    }}
                  >
                    My Cart{" "}
                    <Badge bg="danger" pill>
                      {data.length}
                    </Badge>
                  </div>
                  {cartView ? (
                    <Modal onClose={() => setCartview(false)}>
                      <Cart />
                    </Modal>
                  ) : null}
                  <div
                    className="btn bg-white text-danger mx-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
