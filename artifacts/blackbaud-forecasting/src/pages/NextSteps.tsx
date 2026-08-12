import React from 'react';
import { Link } from 'wouter';

export default function NextSteps() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2>Recommended Next Steps</h2>
      <div className="subtitle">
        This is the working plan to move from conversation to execution in 90 days, with clear milestones toward retiring Clari and Gong.
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>0-30 Days &middot; Align and Baseline</h3>
          <ul>
            <li>Confirm success criteria for A2R and I2R outcomes with CRO, RevOps, and IT sponsors.</li>
            <li>Validate configuration-lift expectations using the Decision Framework scorecard.</li>
            <li>Define pilot scope, users, and governance boundaries for in-platform forecasting operations.</li>
          </ul>
        </div>

        <div className="card">
          <h3>31-60 Days &middot; Pilot and Validate</h3>
          <ul>
            <li>Run a pilot in one manager hierarchy using native collaborative forecasting and scoring.</li>
            <li>Measure week-over-week signal quality, intervention speed, and manager confidence.</li>
            <li>Document flow-of-work adoption in Salesforce and collaboration channels.</li>
          </ul>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>61-90 Days &middot; Scale Decisioning</h3>
          <ul>
            <li>Extend proven patterns across both value streams with RevOps governance checkpoints.</li>
            <li>Set a recurring executive dashboard cadence for integrity and movement-risk review.</li>
            <li>Finalize migration steps and cutover guardrails for Clari/Gong retirement milestones.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Account Team Talk Track</h3>
          <ul>
            <li>Lead with operating model simplification, not feature parity debates.</li>
            <li>Anchor every decision in confidence, governance, and measurable value timing.</li>
            <li>Position Salesforce as the single revenue decision system in the flow of work.</li>
          </ul>
        </div>
      </div>

      <div className="progression">
        <Link href="/salesforce-domains">&larr; Previous: Salesforce Capability Domains</Link>
        <Link href="/capability-terms">Next: Capability Terms Guide &rarr;</Link>
      </div>
    </div>
  );
}
