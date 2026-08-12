import React from 'react';
import { Link } from 'wouter';

export default function A2RCapabilities() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2>1. Awareness-to-Revenue (A2R)</h2>
      <p className="subtitle">For A2R, the leadership question is simple: can pipeline signal, category discipline, and manager judgment stay in one CRM rhythm we can trust each week?</p>

      <section className="card">
        <h3>Current State</h3>
        <p>Forecast confidence drops when pipeline inspection, activity context, and scoring occur across separate tools and disconnected user experiences.</p>
        <h3>Future State</h3>
        <p>Establish Salesforce as the single forecast decision layer where managers can assess readiness, intervention priority, and quarter trajectory without context switching.</p>
        <h3>Value Driver</h3>
        <p>Increase decision velocity in weekly pipeline and forecast reviews while lowering handoff friction between frontline sellers, managers, and RevOps.</p>
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <h3>Capabilities</h3>
        <div className="capability">
          <strong>Pipeline Integrity Controls (SOP)</strong> — Standardizes stage, probability, and forecast category governance so the pipeline reflects execution reality.
        </div>
        <div className="capability">
          <strong>Lead-to-Revenue Conversion Confidence (SLM)</strong> — Preserves conversion signal from top-of-funnel activity to downstream revenue projection.
        </div>
        <div className="capability">
          <strong>Collaborative Forecasting Discipline (SSP)</strong> — Enables collaborative forecasting with transparent manager adjustments and hierarchy rollups.
        </div>
        <div className="capability">
          <strong>Proactive Deal-Risk Inspection (DAG)</strong> — Brings proactive pipeline briefing and risk surfacing directly into manager workflows.
        </div>
      </section>

      <section className="grid-2" style={{ marginTop: 18 }}>
        <article className="card">
          <h3>Owner and Activation Model</h3>
          <p><strong>Primary owner:</strong> RevOps with frontline manager accountability.</p>
          <p><strong>Activation scope:</strong> category governance, hierarchy clarity, and operating-cadence alignment.</p>
        </article>
        <article className="card">
          <h3>Signal and Time-to-Value</h3>
          <p><strong>Signal of progress:</strong> fewer category overrides and faster weekly pipeline alignment.</p>
          <p><strong>Time-to-value:</strong> early confidence improvement in 30-60 days, with stronger consistency by 90 days.</p>
        </article>
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <h3>Executive Signals to Validate in Discussion</h3>
        <ul>
          <li>Can forecast categories be governed without creating extra administrative burden?</li>
          <li>Can leaders identify at-risk ACV sooner without adding another analytics destination?</li>
          <li>Can frontline teams act in the same interface where they review pipeline context?</li>
        </ul>
      </section>

      <div className="progression">
        <Link href="/context">&larr; Previous: Account Context</Link>
        <Link href="/i2r-capabilities">Next: Implementation-to-Renewal (I2R) &rarr;</Link>
      </div>
    </div>
  );
}
