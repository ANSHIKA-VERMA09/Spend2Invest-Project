import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          &nbsp;Spend2Invest
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarText">
          <ul className="navbar-nav me-auto ms-5">
            <li className="nav-item">
              <Link
                className="nav-link active ms-2 "
                aria-current="page"
                to="/dashboard"
              >
                DashBoard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active ms-2 me-2" to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active ms-2 me-2" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active ms-2 me-2" to="/support">
                Support
              </Link>
            </li>
          </ul>
          {/* <i className="fa-light fa-bell fa-xl me-2" style={"color: #fafafa;"}></i> */}
          <Link to="/login">
            <button
              className="btn me-4 mb-2 fw-semibold"
              style={{
                backgroundColor: "rgba(9, 100, 185, 1)",
                color: "white",
              }}
            >
              Log In
            </button>
          </Link>

          <Link to="/register">
            <button
              className="btn me-5 mb-2 fw-semibold"
              style={{
                backgroundColor: "rgba(9, 100, 185, 1)",
                color: "white",
              }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
