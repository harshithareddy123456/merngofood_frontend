import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  let navigate = useNavigate();
  const [creds, setCreds] = useState({
    name: "",
    email: "",
    password: "",
    Geolocation: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://gofoodbackend-three.vercel.app/api/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: creds.name,
          email: creds.email,
          password: creds.password,
          location: creds.Geolocation,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid credentials");
    } else {
      navigate("/login");
    }
  };
  const onChange = (event) => {
    setCreds({ ...creds, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div
        className="Container full-page-div loginbg"
        style={{ padding: "100px" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="examplename1" className="form-label">
              Name
            </label>
            <input
              style={{ width: "50%" }}
              type="text"
              className="form-control"
              id="examplename1"
              value={creds.name}
              onChange={onChange}
              name="name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              style={{ width: "50%" }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={creds.email}
              onChange={onChange}
              name="email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              style={{ width: "50%" }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={creds.password}
              onChange={onChange}
              name="password"
            />
          </div>
          <div className="mb-3">
            <label for="exampleLocation1" className="form-label">
              Location
            </label>
            <input
              style={{ width: "50%" }}
              type="text"
              className="form-control"
              id="exampleLocation1"
              value={creds.Geolocation}
              onChange={onChange}
              name="Geolocation"
            />
          </div>

          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}
