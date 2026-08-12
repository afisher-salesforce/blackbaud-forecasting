import React from 'react';
import { Link } from 'wouter';

export default function ExternalResearch() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2>External Research</h2>
      <div className="subtitle">
        External signals support a consolidation move now, as long as the story stays focused on operating model outcomes rather than feature-by-feature replacement.
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>Company Scale & Trajectory</h3>
          <ul>
            <li>Global social impact software leader with ~3,400 employees and operations in 100+ countries.</li>
            <li>FY2025 revenue at approximately $1.12B with profitability milestone achieved.</li>
            <li>Recurring model strength creates high leverage from operational simplification.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Strategic Tailwinds</h3>
          <ul>
            <li>AI investment agenda is active and visible through Agents for Good momentum.</li>
            <li>Executive narrative already emphasizes technology-led next-wave positioning.</li>
            <li>Pressure to improve decision velocity favors in-platform forecasting discipline.</li>
          </ul>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>Headwinds & Risk Factors</h3>
          <ul>
            <li>Competitive pressure from platform and nonprofit-specialized alternatives remains persistent.</li>
            <li>Tool proliferation can erode governance and obscure accountability boundaries.</li>
            <li>Leadership tolerance for configuration complexity is low unless value realization is explicit.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Salesforce-Relevant Implications</h3>
          <ul>
            <li>Position Salesforce as the revenue decision system, not merely a CRM data store.</li>
            <li>Demonstrate how forecast confidence and intervention timing improve in one platform.</li>
            <li>Frame retirement of Clari/Gong as operating model modernization, not only cost takeout.</li>
          </ul>
        </div>
      </div>

      <div className="progression">
        <Link href="/capability-terms">&larr; Previous: Capability Terms Guide</Link>
        <Link href="/forward-looking-statement">Next: Forward Looking Statement &rarr;</Link>
      </div>
    </div>
  );
}
