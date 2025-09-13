export default function Investments() {
  const holdings = [
    { asset: "S&P 500 ETF", type: "ETF", value: 5200, changePct: 1.2 },
    { asset: "US Treasury 10Y", type: "Bond", value: 2400, changePct: 0.3 },
    { asset: "AAPL", type: "Stock", value: 1850, changePct: -0.8 },
    { asset: "Emerging Mkts ETF", type: "ETF", value: 1350, changePct: 0.6 },
  ];

  const total = holdings.reduce((sum, h) => sum + h.value, 0);

  return (
    <div className="card border-0 shadow-sm h-100 mb-5 mt-5">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Investments</h5>
          <div className="text-muted small">Total: <span className="fw-semibold">${total.toLocaleString()}</span></div>
        </div>

        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr className="text-muted small">
                <th>Asset</th>
                <th>Type</th>
                <th className="text-end">Value</th>
                <th className="text-end">1D</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((h, idx) => (
                <tr key={idx}>
                  <td className="fw-semibold">{h.asset}</td>
                  <td>
                    <span className="badge text-bg-light border">{h.type}</span>
                  </td>
                  <td className="text-end">${h.value.toLocaleString()}</td>
                  <td className={`text-end ${h.changePct >= 0 ? "text-success" : "text-danger"}`}>
                    {h.changePct >= 0 ? "▲" : "▼"} {Math.abs(h.changePct)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-sm btn-outline-primary">Explore Opportunities</button>
        </div>
      </div>
    </div>
  );
}