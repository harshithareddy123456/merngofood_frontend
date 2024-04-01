import React from "react";
import scroll1 from '../images/scroll1.jpg';
import scroll2 from "../images/scroll2.jpg";
import scroll3 from "../images/scroll3.jpg";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide object-fit"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active carouselitem">
            <img
              src={scroll1}
              className="d-block w-100 carouselitemimg"
              alt="..."
            />
          </div>
          <div className="carousel-item carouselitem">
            <img
              src={scroll2}
              className="d-block w-100 carouselitemimg"
              alt="..."
            />
          </div>
          <div className="carousel-item carouselitem">
            <img
              src={scroll3}
              className="d-block w-100 carouselitemimg"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
