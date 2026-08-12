import React from 'react';
import { Link } from 'wouter';

export default function CapabilityMap() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2>Capability Sequencing</h2>
      <p className="subtitle">This sequence shows how to deliver value in phases: stabilize forecast trust first, add AI guidance next, and scale with governance intact.</p>

      <section className="grid-2">
        <article className="card">
          <h3>Phase 1 &middot; Stabilize Forecast Core</h3>
          <div className="capability">
            <strong>Collaborative Forecasting Discipline (SSP)</strong> — Activate collaborative forecasting process as primary operating baseline.
          </div>
          <div className="capability">
            <strong>Pipeline Integrity Controls (SOP)</strong> — Tighten stage and category hygiene to improve forecast signal quality.
          </div>
          <div className="capability">
            <strong>Forward-Looking Win Confidence (DPA)</strong> — Introduce conversion-rate based forecast confidence.
          </div>
        </article>
        <article className="card">
          <h3>Phase 2 &middot; Operationalize AI Guidance</h3>
          <div className="capability">
            <strong>Proactive Deal-Risk Inspection (DAG)</strong> — Deploy role-oriented inspection and proactive risk prompts.
          </div>
          <div className="capability">
            <strong>Week-over-Week Movement Signal (ARI)</strong> — Add movement and category-change signals for leadership reviews.
          </div>
          <div className="capability">
            <strong>In-Flow Team Activation (CAF)</strong> — Push forecast insight into collaboration workflows.
          </div>
        </article>
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <h3>Phase 3 &middot; Expand Decision Fabric</h3>
        <div className="capability">
          <strong>Unified Forecast Data Foundation (DDH)</strong> — Integrate adjacent data sources while keeping forecasting decisions in Salesforce.
        </div>
        <div className="capability">
          <strong>Cross-System Signal Alignment (IEI)</strong> — Connect ecosystem dependencies without creating governance fragmentation.
        </div>
        <div className="capability">
          <strong>Trust and Governance Assurance (PGV)</strong> — Scale adoption with clear trust and compliance posture.
        </div>
      </section>

      <div className="progression">
        <Link href="/i2r-capabilities">&larr; Previous: Implementation-to-Renewal (I2R)</Link>
        <Link href="/decision-framework">Next: Executive Decision Framework &rarr;</Link>
      </div>
    </div>
  );
}
