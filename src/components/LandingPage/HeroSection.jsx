import heroImage from "../../assets/HeroImage.jpg";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div
      className="mainSection"
      style={{ 
        backgroundImage: `url(${heroImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", 
        width: "100%" 
      }}
    >
      <div className="container" id="hero">
        <div className="row mt-5 ">
          <h1 className="mt-5 fw-bold" id="heading1">
            From expenses to investments,<br /> all in one place.
          </h1>
          <p id="heading2" className="mt-4 semibold">
            Track your spending, manage budgets, and discover smart investment opportunities
          </p>
          <button className="btn active mt-5 rounded-pill " style={{width:"25%",color:"white"}}>
            Get Started & Learn More &nbsp;&nbsp;
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;