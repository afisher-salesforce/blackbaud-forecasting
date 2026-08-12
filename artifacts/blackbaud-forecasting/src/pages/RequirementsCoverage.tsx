import React from 'react';
import { Link } from 'wouter';

export default function RequirementsCoverage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2>Requirements Coverage Matrix</h2>
      <p className="subtitle">This matrix maps Blackbaud's updated forecasting requirements to Salesforce capability paths, implementation approach, and entitlement confidence.</p>

      <section className="card">
        <h3>Coverage Summary</h3>
        <p><strong>Primary intent:</strong> move from capability narrative to requirement-verifiable execution planning.</p>
        <p><strong>Evidence basis:</strong> Forecasting requirements response + Blackbaud asset line items + capabilities evidence matrix.</p>
        <p><strong>Interpretation note:</strong> "Confirmed" indicates direct SKU evidence; "Inferred" indicates reasonable entitlement inference that still needs product-level validation.</p>
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <h3>Must Requirements — Priority Mapping</h3>
        <table className="matrix-table">
          <thead>
            <tr>
              <th>Requirement Group</th>
              <th>FR IDs</th>
              <th>Salesforce Capability Path</th>
              <th>Delivery Mode</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cadence, rollup, completeness</td>
              <td>FR-01, FR-02, FR-03</td>
              <td>Collaborative Forecasting + hierarchy rollups + hygiene/status controls</td>
              <td>OOTB + Config</td>
              <td><span className="confidence-chip confidence-confirmed">Confirmed</span></td>
            </tr>
            <tr>
              <td>Trending, drill-down, AI call</td>
              <td>FR-08, FR-09, FR-10</td>
              <td>Revenue Intelligence + in-context editing + AI-assisted forecast layer</td>
              <td>Config + Analytics</td>
              <td><span className="confidence-chip confidence-inferred">Inferred / Validate</span></td>
            </tr>
            <tr>
              <td>Signal intelligence and risk surfacing</td>
              <td>FR-11, FR-12</td>
              <td>Agentforce + CX intelligence signals + opportunity risk interpretation</td>
              <td>Config + Integration</td>
              <td><span className="confidence-chip confidence-confirmed">Confirmed</span></td>
            </tr>
            <tr>
              <td>Platform administration and access</td>
              <td>FR-16, FR-17, FR-18</td>
              <td>Core Salesforce UE admin controls, SSO integration, role lifecycle management</td>
              <td>OOTB + Config</td>
              <td><span className="confidence-chip confidence-confirmed">Confirmed</span></td>
            </tr>
            <tr>
              <td>Renewals data unification and live sync</td>
              <td>FR-20, FR-21, FR-22</td>
              <td>Data Cloud + Salesforce objects + Gainsight integration pattern</td>
              <td>Integration + Data Modeling</td>
              <td><span className="confidence-chip confidence-pending">Pending Integration Proof</span></td>
            </tr>
            <tr>
              <td>Save plan and exception governance</td>
              <td>FR-23, FR-24, FR-25, FR-32, FR-40</td>
              <td>Signal-triggered workflows, task routing, pre-lock exception controls</td>
              <td>Flow + Config</td>
              <td><span className="confidence-chip confidence-confirmed">Confirmed</span></td>
            </tr>
            <tr>
              <td>Product-level forecast and joint risk view</td>
              <td>FR-38, FR-39</td>
              <td>Revenue Cloud/CPQ data layer + dashboard composition</td>
              <td>Config + Analytics</td>
              <td><span className="confidence-chip confidence-confirmed">Confirmed</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <h3>Open Validation Focus</h3>
        <ul>
          <li>Confirm advanced analytics SKU alignment for FR-10 and FR-33 style position-in-time intelligence.</li>
          <li>Confirm Gainsight L2R integration implementation pattern and real-time sync expectations.</li>
          <li>Confirm corporate feed mechanics to Baseline Model/Hyperion for FR-35.</li>
          <li>Confirm Slack/Agentforce collaboration boundaries for operational task orchestration claims.</li>
        </ul>
      </section>

      <div className="progression">
        <Link href="/salesforce-domains">&larr; Previous: Salesforce Capability Domains</Link>
        <Link href="/next-steps">Next: Recommended Next Steps &rarr;</Link>
      </div>
    </div>
  );
}
