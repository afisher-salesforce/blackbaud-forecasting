import React from 'react';
import { Link } from 'wouter';

export default function DecisionFramework() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2>Executive Decision Framework</h2>
      <p className="subtitle">Use this decision lens to test one practical outcome: can Salesforce replace Clari and Gong while improving confidence, control, and speed of execution?</p>

      <section className="grid-2">
        <article className="card">
          <h3>Decision Lens 1 &middot; Strategic Fit</h3>
          <ul>
            <li>Does the approach increase forecast decision velocity for leadership?</li>
            <li>Does it align A2R and I2R under one operating model?</li>
            <li>Does it reduce dependence on disconnected point-solution workflows?</li>
          </ul>
        </article>
        <article className="card">
          <h3>Decision Lens 2 &middot; Execution Confidence</h3>
          <ul>
            <li>Can RevOps operate it with manageable configuration lift?</li>
            <li>Are forward-looking conversion and risk signals native and explainable?</li>
            <li>Is cross-functional adoption realistic in current planning cycles?</li>
          </ul>
        </article>
      </section>

      <section className="grid-2" style={{ marginTop: 18 }}>
        <article className="card">
          <h3>Decision Lens 3 &middot; Governance &amp; Risk</h3>
          <ul>
            <li>Does the model improve auditability, data controls, and accountability?</li>
            <li>Does it reduce integration and vendor-governance overhead?</li>
            <li>Can trust and compliance posture scale with AI-assisted workflows?</li>
          </ul>
        </article>
        <article className="card">
          <h3>Decision Lens 4 &middot; Value Realization</h3>
          <ul>
            <li>Can Blackbaud phase value in quarters, not years?</li>
            <li>Does it preserve optionality for future capability expansion?</li>
            <li>Does it create measurable retirement path for external tools?</li>
          </ul>
        </article>
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <h3>Retirement Readiness Scorecard</h3>
        <p>Use a simple Red / Amber / Green checkpoint before decommissioning Clari and Gong dependencies.</p>
        <div className="capability">
          <strong>Readiness 1: Forecast Integrity</strong> — Reps, managers, and leadership can produce aligned Commit and Best Case views natively in Salesforce.
        </div>
        <div className="capability">
          <strong>Readiness 2: Forward-Looking Confidence</strong> — Einstein scoring and movement analytics are trusted in executive forecast conversations.
        </div>
        <div className="capability">
          <strong>Readiness 3: Flow of Work</strong> — Teams can inspect, collaborate, and trigger next steps without leaving Salesforce and Slack workflows.
        </div>
        <div className="capability">
          <strong>Readiness 4: Governance</strong> — Data controls, auditability, and AI trust standards meet IT and compliance expectations.
        </div>
      </section>

      <div className="progression">
        <Link href="/capability-map">&larr; Previous: Capability Sequencing</Link>
        <Link href="/salesforce-domains">Next: Salesforce Capability Domains &rarr;</Link>
      </div>
    </div>
  );
}
