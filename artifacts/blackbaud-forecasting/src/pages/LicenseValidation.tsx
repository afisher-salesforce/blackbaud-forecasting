import React from 'react';
import { Link } from 'wouter';

export default function LicenseValidation() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2>License &amp; Validation</h2>
      <p className="subtitle">This page documents which capabilities are directly evidenced in Blackbaud asset line items versus those that still require entitlement or implementation validation.</p>

      <section className="grid-2">
        <article className="card">
          <h3>Confirmed by Asset Evidence</h3>
          <ul>
            <li>Sales &amp; Service Cloud UE forecast foundation.</li>
            <li>Agentforce for Sales and Service add-ons.</li>
            <li>Data Cloud provisioning and credit capacity.</li>
            <li>Revenue Cloud/CPQ components and event capabilities.</li>
            <li>Salesforce Shield governance controls.</li>
            <li>Slack Enterprise Grid and Tableau footprint (separate agreements).</li>
          </ul>
          <span className="confidence-chip confidence-confirmed">High confidence from SKU evidence</span>
        </article>
        <article className="card">
          <h3>Needs Validation Closure</h3>
          <ul>
            <li>Advanced analytics depth for AI-generated call and historical position-in-time signals.</li>
            <li>Gainsight L2R live sync architecture and ownership.</li>
            <li>Corporate feed to Baseline Model/Hyperion operational model.</li>
            <li>Broader API management and integration entitlement beyond utility-level tooling.</li>
          </ul>
          <span className="confidence-chip confidence-pending">Open validation items</span>
        </article>
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <h3>Validation Workflow Before Final Commitment</h3>
        <ol>
          <li>Trace every `Must` requirement to capability + SKU evidence + delivery mode.</li>
          <li>Flag all inferred entitlements requiring order-form or provisioning confirmation.</li>
          <li>Separate implementation complexity risk from commercial entitlement risk.</li>
          <li>Approve executive storyline only after unresolved blockers have named owners and dates.</li>
        </ol>
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <h3>Evidence Sources Used</h3>
        <ul>
          <li>Asset line-item report: <code>report1786386922863.csv</code></li>
          <li>Capabilities workspace matrix: <code>BLACKBAUD_EVIDENCE_MATRIX.md</code></li>
          <li>Forecasting requirements response PDF (FR-01 through FR-41)</li>
        </ul>
      </section>

      <div className="progression">
        <Link href="/next-steps">&larr; Previous: Recommended Next Steps</Link>
        <Link href="/capability-terms">Next: Capability Terms Guide &rarr;</Link>
      </div>
    </div>
  );
}
