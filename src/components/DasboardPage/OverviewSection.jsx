export default function OverviewSection() {
  const metrics = [
    { title: "Total Balance", value: "$12,450", note: "↑ $320 this month", noteClass: "text-success" },
    { title: "Monthly Income", value: "$4,800", note: "Next payout in 5 days", noteClass: "text-muted" },
    { title: "Monthly Expenses", value: "$3,120", note: "↓ 6% vs last month", noteClass: "text-success" },
    { title: "Net Savings", value: "$1,680", note: "35% of income", noteClass: "text-primary" },
  ];

  return (
    <div className="row g-3 mt-5 mb-5">
      {metrics.map((m, idx) => (
        <div className="col-12 col-md-6 col-xl-3" key={idx}>
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body">
              <div className="d-flex align-items-start justify-content-between">
                <div>
                  <h6 className="text-muted mb-2">{m.title}</h6>
                  <h3 className="fw-bold mb-2">{m.value}</h3>
                  <div className={`small ${m.noteClass}`}>{m.note}</div>
                </div>
                <div className="rounded-circle bg-primary bg-opacity-10 text-primary fw-bold d-flex align-items-center justify-content-center" style={{ width: 44, height: 44 }}>
                  {m.title.split(" ").map(w => w[0]).join("").slice(0,2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}