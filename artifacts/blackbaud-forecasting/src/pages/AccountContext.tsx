import React from 'react';
import { Link } from 'wouter';

export default function AccountContext() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2>Blackbaud Account Context</h2>
      <div className="subtitle">
        To set context, Blackbaud is a scaled, cloud-first software leader with strong recurring revenue and a clear mandate to modernize responsibly with AI.
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>Strategic Signals</h3>
          <ul>
            <li>FY2025 revenue approximately $1.12B with GAAP profitability achieved.</li>
            <li>Post-EVERFI focus sharpened around core social impact software and AI platform differentiation.</li>
            <li>Strong recurring revenue profile and cross-functional pressure to simplify go-to-market systems.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Forecasting Imperative</h3>
          <ul>
            <li>Clari contract timing creates a decision window for consolidation.</li>
            <li>Leadership requires forward-looking conversion analytics and week-over-week movement clarity.</li>
            <li>RevOps must maintain governance without introducing custom-tool drift.</li>
          </ul>
        </div>
      </div>

      <div className="card w-full">
        <h3>Two Value Streams In Scope</h3>
        <div className="flex flex-col gap-4">
          <div>
            <div className="font-bold text-[17px]">A2R — Awareness-to-Revenue</div>
            <p className="mt-1">Build consistent pipeline trust from lead signal through committed forecast views.</p>
          </div>
          <div>
            <div className="font-bold text-[17px]">I2R — Implementation-to-Renewal</div>
            <p className="mt-1">Preserve forecast quality across customer lifecycle moments, renewals, and expansion decisions.</p>
          </div>
        </div>
      </div>

      <div className="progression">
        <Link href="/">&larr; Previous: Executive Summary</Link>
        <Link href="/a2r-capabilities">Next: Awareness-to-Revenue (A2R) &rarr;</Link>
      </div>
    </div>
  );
}
