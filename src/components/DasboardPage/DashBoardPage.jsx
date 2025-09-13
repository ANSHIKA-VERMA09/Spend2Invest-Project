
import OverviewSection from "./OverviewSection";
import Expenditure from "./Expenditure";
import Investments from "./Investments";
import SavingsGoals from "./SavingsGoals";
import CallToAction from "./callToAction";
import "./DashBoard.css";

export default function DashBoardPage() {
  return (
    <div className="container mt-5 pt-4" >
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mt-5">Your Financial Dashboard</h1>
        <p className="text-muted mt-2">Track, manage, and plan your money smarter 🚀</p>
        <img src="/src/assets/homeHero.png" alt="Dashboard Illustration" className="img-fluid mb-5" style={{ maxHeight: 600 }} />
      </div>

      {/* Overview Cards */}
      <OverviewSection />

      <div className="row mt-5">
        {/* Left Column */}
        <div className="col-lg-6 mb-4">
          <Expenditure />
        </div>

        {/* Right Column */}
        <div className="col-lg-6 mb-4">
          <Investments />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-12 mb-4">
          <SavingsGoals />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-5">
        <CallToAction />
      </div>
    </div>
  );
}



