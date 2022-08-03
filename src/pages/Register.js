import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../auth/firebase";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    const displayName = `${firstName} ${lastName}`
    createUser(email, password, displayName)
    navigate("/")
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="">
        <img src={"https://picsum.photos/800/800"} alt="sample movie" />
      </div>

      <div className="registre-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register">
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder="Enter your first name: "
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div className="mb-3">
              <label htmlFor="last-name" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                placeholder="Enter your last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <input
            type="button"
            className="btn btn-primary form-control"
            value="register"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
