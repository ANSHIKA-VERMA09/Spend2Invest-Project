import OverviewSection from "./OverviewSection";
import Expenditure from "./Expenditure";
import Investments from "./Investments";
import SavingsGoals from "./SavingsGoals";
import CallToAction from "./callToAction";

export default function DashBoardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <OverviewSection />
      <Expenditure />
      <Investments />
      <SavingsGoals />
      <CallToAction />
    </div>
  );
}


