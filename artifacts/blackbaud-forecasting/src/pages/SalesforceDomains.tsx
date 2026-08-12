import React from 'react';
import { Link } from 'wouter';
import TrailheadEnablement from '../components/TrailheadEnablement';

export default function SalesforceDomains() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2>Salesforce Capability Domains</h2>
      <p className="subtitle">This page turns capability labels into executive choices: what to activate now, what value to expect in 90 days, and what risk grows if we wait.</p>

      <section className="grid-2">
        <article className="card">
          <h3>Sales Core Advisory Brief</h3>
          <p><strong>Business decision enabled:</strong> Can leadership trust the weekly forecast call as the source of truth?</p>
          <p><strong>What Blackbaud gets in 90 days:</strong> Better category discipline, cleaner manager rollups, and fewer quarter-close exceptions.</p>
          <p><strong>Dependencies:</strong> Clear ownership between RevOps and frontline managers, plus role-level data standards.</p>
          <p><strong>Risk if deferred:</strong> Ongoing dependence on parallel interpretation models across external and CRM-native workflows.</p>
          <div className="capability"><strong>Capabilities in this brief</strong>Collaborative Forecasting Discipline (`SSP`), Opportunity Management (`SOP`), Lead Management (`SLM`), and Territory Management (`STM`).</div>
          <TrailheadEnablement codes={['SSP', 'SOP', 'SLM']} title="Suggested Trailhead Enablement" />
        </article>
        <article className="card">
          <h3>Data, AI, and Governance Advisory Brief</h3>
          <p><strong>Business decision enabled:</strong> Which committed deals require intervention now, and why?</p>
          <p><strong>What Blackbaud gets in 90 days:</strong> Forward-looking scoring, movement-risk visibility, and governance-ready confidence signals.</p>
          <p><strong>Dependencies:</strong> Agreed interpretation model for scoring and risk indicators across leadership and RevOps.</p>
          <p><strong>Risk if deferred:</strong> Forecast reviews stay backward-looking, slowing response to cross-pipeline risk shifts.</p>
          <div className="capability"><strong>Capabilities in this brief</strong>Forward-Looking Win Confidence (`DPA`), Agentic Risk Inspection (`DAG`), Unified Data Foundation (`DDH`), Unified Customer Profile (`DUP`), and Data Governance &amp; Privacy (`PGV`).</div>
          <TrailheadEnablement codes={['DPA', 'DAG', 'DDH', 'DUP', 'PGV']} title="Suggested Trailhead Enablement" />
        </article>
      </section>

      <section className="grid-2" style={{ marginTop: 18 }}>
        <article className="card">
          <h3>Analytics &amp; Reporting Advisory Brief</h3>
          <p><strong>Business decision enabled:</strong> Are we improving forecast quality week-over-week in ways leaders can act on immediately?</p>
          <p><strong>What Blackbaud gets in 90 days:</strong> Consistent movement visibility and in-workflow dashboards that reduce ambiguity.</p>
          <p><strong>Dependencies:</strong> Agreed metric definitions and ownership model for dashboard interpretation.</p>
          <p><strong>Risk if deferred:</strong> Insight remains fragmented across tools and analyst handoff cycles.</p>
          <div className="capability"><strong>Capabilities in this brief</strong>Embedded BI &amp; Dashboards (`ABI`), Revenue Intelligence (`ARI`), and Proactive Insights (`APC`).</div>
          <TrailheadEnablement codes={['ABI', 'ARI', 'APC']} title="Suggested Trailhead Enablement" />
        </article>
        <article className="card">
          <h3>Integration &amp; Collaboration Advisory Brief</h3>
          <p><strong>Business decision enabled:</strong> Can teams act on forecast signals in the same flow where they collaborate?</p>
          <p><strong>What Blackbaud gets in 90 days:</strong> Faster response loops between managers, sellers, and RevOps without tool-hopping.</p>
          <p><strong>Dependencies:</strong> Integration sequencing and collaboration channel standards.</p>
          <p><strong>Risk if deferred:</strong> Decision lag persists even if signal quality improves.</p>
          <div className="capability"><strong>Capabilities in this brief</strong>Enterprise Integration (`IEI`), Enterprise Platform Connectors (`IEP`), and Agentforce in Slack (`CAF`).</div>
          <TrailheadEnablement codes={['IEI', 'CAF']} title="Suggested Trailhead Enablement" />
        </article>
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <h3>In Scope vs Adjacent</h3>
        <p><strong>Prioritized for current forecasting decision:</strong> Sales Core, Data &amp; AI, Analytics &amp; Reporting, and Integration/Collaboration capabilities listed above.</p>
        <p><strong>Adjacent for later expansion:</strong> additional service, marketing, and broader platform capabilities once forecast operating-model adoption is stable.</p>
      </section>

      <div className="progression">
        <Link href="/decision-framework">&larr; Previous: Executive Decision Framework</Link>
        <Link href="/next-steps">Next: Recommended Next Steps &rarr;</Link>
      </div>
    </div>
  );
}
