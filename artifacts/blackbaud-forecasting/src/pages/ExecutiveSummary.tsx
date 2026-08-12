import React from 'react';
import { Link } from 'wouter';

export default function ExecutiveSummary() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="hero">
        <h2>Retire point forecasting tools by moving decisioning back into Salesforce</h2>
        <div className="subtitle">
          If we align on one point today, it is this: Blackbaud can simplify forecasting by shifting from disconnected tools to one Salesforce operating model.
        </div>
        <div className="meta">Prepared for pre-sales strategy discussions across A2R and I2R value streams.</div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>Executive Stakes by Persona</h3>
          <div className="flex flex-col gap-3">
            <div>
              <span className="pill mb-1">CRO / Revenue Leadership</span>
              <p className="text-[15px] m-0">Faster forecast confidence with auditable movement signals and fewer blind spots.</p>
            </div>
            <div>
              <span className="pill mb-1">RevOps</span>
              <p className="text-[15px] m-0">Lower administration burden by consolidating forecast logic, scoring, and adjustment histories in one system of action.</p>
            </div>
            <div>
              <span className="pill mb-1">CIO / IT</span>
              <p className="text-[15px] m-0">Reduced integration risk, lower tool sprawl, and stronger governance by keeping intelligence inside platform standards.</p>
            </div>
            <div>
              <span className="pill mb-1">Sales & Renewal Managers</span>
              <p className="text-[15px] m-0">Better weekly decision velocity through role-based summaries and AI-supported inspection.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Strategic Outcomes</h3>
          <ul>
            <li>Shift from disconnected tools to one revenue operating model.</li>
            <li>Improve forecast integrity using native role-aware workflows.</li>
            <li>Accelerate manager intervention with proactive risk signals.</li>
            <li>Align analytics and execution inside the flow of work.</li>
          </ul>
        </div>
      </div>

      <div className="card w-full">
        <h3>Discussion Framing</h3>
        <p>
          The goal is not one-to-one feature parity with Clari or Gong. The goal is a stronger end-to-end forecasting model in Salesforce with lower governance overhead, better scale, and clearer accountability.
        </p>
      </div>

      <div className="progression">
        <Link href="/context">Next: Account Context &rarr;</Link>
      </div>
    </div>
  );
}
