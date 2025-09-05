import Expense from "./Expense";
import DataSecurity from "./DataSecurity";
import SavingGoals from "./SavingGoals";
import InvestmentGuidance from "./InvestmentGuidance"; 
import OpenAccount from "../OpenAccount"; 

export default function FeaturePage() {
  return (
    <div>
      <h2>Feature Page Component</h2>
      <Expense />
      <DataSecurity />
      <SavingGoals />
      <InvestmentGuidance />
      <OpenAccount />
    </div>
  );
}

