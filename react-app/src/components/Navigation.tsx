import React, { useState } from "react";
import logo from "../img/logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import '../App.css';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Navigation = () => {
  const [logstate, isloggedin] = useState(true);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    e.preventDefault();
    isloggedin(false);
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="sidebar d-flex flex-column justify-content-between">

      {/* Logo */}
      <div>
        <div className="text-center py-4">
          <img
            src={logo}
            alt="logo"
            width="70"
            height="70"
            className="rounded-circle"
          />
          <h5 className="text-white mt-3">Student Portal</h5>
        </div>

        {/* Menu */}
        <ul className="nav flex-column px-3">

          <li className="nav-item mb-2">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link sidebar-link"
              }
            >
              <i className="bi bi-person-circle me-2"></i>
              Profile
            </NavLink>
          </li>

          <li className="nav-item mb-2">
            <NavLink
              to="/workflow"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link sidebar-link"
              }
            >
              <i className="bi bi-file-earmark-text me-2"></i>
              Workflow Requests
            </NavLink>
          </li>

          <li className="nav-item mb-2">
            <NavLink
              to="/academics"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link sidebar-link"
              }
            >
              <i className="bi bi-mortarboard me-2"></i>
              Academics
            </NavLink>
          </li>

        </ul>
      </div>

      {/* Logout */}
      <div className="p-3">
        <button
          className="btn btn-danger w-100"
          onClick={handleChange}
        >
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>
      </div>

    </div>
  );
};

export default Navigation;