import React from 'react';
import { Link } from 'wouter';
import TrailheadEnablement from '../components/TrailheadEnablement';

export default function CapabilityTermsGuide() {
  return (
    <div>
      <h2>Capability Terms Guide</h2>
      <p className="subtitle">If terminology slows the discussion, use this page to translate internal capability language into business outcomes everyone can act on.</p>

      <section className="grid-2">
        <article className="card">
          <h3>Forecasting and Pipeline</h3>
          <div className="capability"><strong>Collaborative Forecasting Discipline (`SSP`)</strong>Role-based process for rep submissions, manager judgment, and executive rollup confidence.</div>
          <div className="capability"><strong>Pipeline Integrity Controls (`SOP`)</strong>Consistent stage and category hygiene that keeps forecast numbers decision-ready.</div>
          <div className="capability"><strong>Lead-to-Revenue Conversion Confidence (`SLM`)</strong>Traceable lead conversion signal for top-of-funnel forecast quality.</div>
          <TrailheadEnablement codes={['SSP', 'SOP', 'SLM']} title="Trailhead Enablement for Forecast Core" />
        </article>
        <article className="card">
          <h3>AI and Signal Quality</h3>
          <div className="capability"><strong>Forward-Looking Win Confidence (`DPA`)</strong>Predictive scoring based on historical close behavior to improve forecast realism.</div>
          <div className="capability"><strong>Proactive Deal-Risk Inspection (`DAG`)</strong>Agent-driven surfacing of exceptions, inactivity risk, and intervention priorities.</div>
          <div className="capability"><strong>Week-over-Week Movement Signal (`ARI`)</strong>Insight layer that explains meaningful forecast changes across reps and segments.</div>
          <TrailheadEnablement codes={['DPA', 'DAG', 'ARI']} title="Trailhead Enablement for AI Signals" />
        </article>
      </section>

      <section className="grid-2" style={{ marginTop: 18 }}>
        <article className="card">
          <h3>Data and Governance</h3>
          <div className="capability"><strong>Unified Forecast Data Foundation (`DDH`)</strong>Combines relevant internal/external data into a consistent decision model.</div>
          <div className="capability"><strong>Lifecycle Context for Renewals (`DUP`)</strong>Unified profile context supporting renewal and expansion decision quality.</div>
          <div className="capability"><strong>Trust and Governance Assurance (`PGV`)</strong>Privacy, access, and audit controls for scalable executive confidence.</div>
          <TrailheadEnablement codes={['DDH', 'DUP', 'PGV']} title="Trailhead Enablement for Data &amp; Governance" />
        </article>
        <article className="card">
          <h3>Execution in the Flow of Work</h3>
          <div className="capability"><strong>In-Workflow Executive Visibility (`ABI`)</strong>Dashboards and metrics embedded where managers and leaders already work.</div>
          <div className="capability"><strong>Cross-System Signal Alignment (`IEI`)</strong>Operational integration that preserves one forecast operating model.</div>
          <div className="capability"><strong>In-Flow Team Activation (`CAF`)</strong>Collaboration delivery model that turns forecast signal into action quickly.</div>
          <TrailheadEnablement codes={['ABI', 'IEI', 'CAF']} title="Trailhead Enablement for Operational Activation" />
        </article>
      </section>

      <div className="progression">
        <Link href="/next-steps">← Previous: Recommended Next Steps</Link>
        <Link href="/external-research">Next: External Research →</Link>
      </div>
    </div>
  );
}
