import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loginbg from "../images/loginbg.jpg";

export default function Login() {
  let navigate = useNavigate();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://gofoodbackend-three.vercel.app/api/loginuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: creds.email,
          password: creds.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
      localStorage.setItem("useremail", creds.email);
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
        <h1 style={{ textAlign: "center", color: "brown" }}>GoFood</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              style={{ width: "50%" }}
              width="50%"
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
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/createuser" className="m-3 btn btn-danger">
            I'm a new user
          </Link>
        </form>
      </div>
    </>
  );
}
