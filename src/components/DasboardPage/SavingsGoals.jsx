export default function SavingsGoals() {
  const goals = [
    { name: "Emergency Fund", target: 6000, saved: 4200, due: "Dec 2025" },
    { name: "Vacation", target: 2500, saved: 900, due: "Jun 2025" },
    { name: "New Laptop", target: 1500, saved: 750, due: "Mar 2025" },
  ];

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Savings Goals</h5>
          <button className="btn btn-sm btn-outline-success">Add Goal</button>
        </div>

        <div className="row g-3">
          {goals.map((g, idx) => {
            const percent = Math.min(100, Math.round((g.saved / g.target) * 100));
            const barClass = percent >= 100 ? "bg-success" : "bg-primary";
            return (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <div className="border rounded-3 p-3 h-100">
                  <div className="d-flex justify-content-between">
                    <div className="fw-semibold">{g.name}</div>
                    <div className="text-muted small">{g.due}</div>
                  </div>
                  <div className="mt-2 text-muted small">${g.saved.toLocaleString()} / ${g.target.toLocaleString()}</div>
                  <div className="progress mt-2" style={{ height: 8 }}>
                    <div className={`progress-bar ${barClass}`} role="progressbar" style={{ width: `${percent}%` }} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="small mt-2">{percent}% complete</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}