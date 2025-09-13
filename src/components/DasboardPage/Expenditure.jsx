
export default function Expenditure() {
  const categories = [
    { name: "Housing", spent: 1200, budget: 1400 },
    { name: "Food & Dining", spent: 520, budget: 600 },
    { name: "Transportation", spent: 230, budget: 300 },
    { name: "Utilities", spent: 180, budget: 220 },
    { name: "Entertainment", spent: 145, budget: 200 },
  ];

  return (
    <div className="card border-0 shadow-sm h-100 mb-5 mt-5">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-3">Expenditure</h5>
          <button className="btn btn-sm btn-outline-primary">Manage Budgets</button>
        </div>

        <ul className="list-group list-group-flush">
          {categories.map((c, idx) => {
            const percent = Math.min(100, Math.round((c.spent / c.budget) * 100));
            const barClass = percent >= 90 ? "bg-danger" : percent >= 70 ? "bg-warning" : "bg-success";
            return (
              <li key={idx} className="list-group-item px-0">
                <div className="d-flex justify-content-between">
                  <span className="fw-semibold">{c.name}</span>
                  <span className="text-muted">${c.spent} / ${c.budget}</span>
                </div>
                <div className="progress mt-2" style={{ height: 8 }}>
                  <div className={`progress-bar ${barClass}`} role="progressbar" style={{ width: `${percent}%` }} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}