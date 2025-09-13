// import React from "react";
// import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="p-4 p-md-5 rounded-4 border bg-light d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between mb-5">
      <div className="mb-3 mb-md-0">
        <h4 className="fw-bold mb-1">Ready to take the next step?</h4>
        <div className="text-muted">Connect your bank, set a budget, and start investing smarter.</div>
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-primary">Get your Dashboard</button>
        <button className="btn btn-outline-secondary">Learn More</button>
      </div>
    </div>
  );
}