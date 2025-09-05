import "./NavBar.css";

export default function NavBar() {
  return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
  <div className="container-fluid">
    
    <a className="navbar-brand" href="#">&nbsp;Spend2Invest</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-5" id="navbarText">
      <ul className="navbar-nav me-auto ms-5" >
        <li className="nav-item">
          <a className="nav-link active ms-2 " aria-current="page" href="#">DashBoard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-2 me-2" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-2 me-2" href="#">Insights</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-2 me-2" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-2 me-2" href="#">Pricing</a>
        </li>
      </ul>
      {/* <i className="fa-light fa-bell fa-xl me-2" style={"color: #fafafa;"}></i> */}
      <button className="btn me-5 mb-2 fw-semibold" style={{backgroundColor:"rgba(9, 100, 185, 1)", color:"white"}}>
        Get Started
      </button>
    </div>
  </div>
</nav>
  );
}



