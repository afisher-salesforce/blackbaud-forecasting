import React from 'react';
import { Link } from 'wouter';

export default function I2RCapabilities() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2>2. Implementation-to-Renewal (I2R)</h2>
      <p className="subtitle">For I2R, the priority is to surface renewal risk earlier and give account teams, managers, and leaders one shared view of what needs action now.</p>

      <section className="card">
        <h3>Current State</h3>
        <p>Renewal and expansion decisions can lag when risk signals are scattered across conversation intelligence, manual reviews, and post-hoc reporting cycles.</p>
        <h3>Future State</h3>
        <p>Use native predictive and agentic capabilities to surface movement risk, prioritize interventions, and tighten renewal predictability with governance-ready traceability.</p>
        <h3>Value Driver</h3>
        <p>Reduce late-cycle surprises by surfacing actionable risk narratives earlier and aligning renewal interventions to a shared operational cadence.</p>
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <h3>Capabilities</h3>
        <div className="capability">
          <strong>Forward-Looking Win Confidence (DPA)</strong> — Delivers forward-looking conversion confidence based on Blackbaud's own historical close behavior.
        </div>
        <div className="capability">
          <strong>Week-over-Week Movement Signal (ARI)</strong> — Highlights week-over-week movement and category migration risk for leadership-level forecast review.
        </div>
        <div className="capability">
          <strong>Lifecycle Context for Renewals (DUP)</strong> — Aligns implementation, usage, and account health context for renewal decision quality.
        </div>
        <div className="capability">
          <strong>In-Workflow Executive Visibility (ABI)</strong> — Keeps teams in one operational plane where analysis directly drives workflow action.
        </div>
      </section>

      <section className="grid-2" style={{ marginTop: 18 }}>
        <article className="card">
          <h3>Owner and Activation Model</h3>
          <p><strong>Primary owner:</strong> Revenue leadership with RevOps instrumentation ownership.</p>
          <p><strong>Activation scope:</strong> movement analytics, predictive interpretation, and intervention rhythm.</p>
        </article>
        <article className="card">
          <h3>Signal and Time-to-Value</h3>
          <p><strong>Signal of progress:</strong> earlier risk detection and fewer late-cycle renewal surprises.</p>
          <p><strong>Time-to-value:</strong> improved executive confidence within 60 days, with consistent trend quality by 90 days.</p>
        </article>
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <h3>Executive Signals to Validate in Discussion</h3>
        <ul>
          <li>Can leadership inspect week-over-week forecast movement without custom report debt?</li>
          <li>Can risk interpretation stay native to Salesforce while preserving explainability?</li>
          <li>Can implementation and renewal teams share one trusted signal model?</li>
        </ul>
      </section>

      <div className="progression">
        <Link href="/a2r-capabilities">&larr; Previous: Awareness-to-Revenue (A2R)</Link>
        <Link href="/capability-map">Next: Capability Sequencing &rarr;</Link>
      </div>
    </div>
  );
}
