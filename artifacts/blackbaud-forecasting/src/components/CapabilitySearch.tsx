import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { Search } from 'lucide-react';

const CAPABILITY_INDEX = [
  { outcome: "Forecast Accountability by Role", code: "SSP", name: "Sales Performance Management", description: "Collaborative forecasting with manager adjustments and hierarchy rollups.", location: "A2R and I2R forecast orchestration", pageTitle: "Capability Sequencing", pageHref: "/capability-map" },
  { outcome: "Pipeline Discipline and Stage Integrity", code: "SOP", name: "Opportunity Management", description: "Pipeline discipline, stage integrity, and forecast category governance.", location: "Awareness-to-Revenue", pageTitle: "A2R Strategic Priorities", pageHref: "/a2r-capabilities" },
  { outcome: "Lead-to-Revenue Conversion Confidence", code: "SLM", name: "Lead Management", description: "Lead-to-opportunity conversion signal for revenue planning confidence.", location: "Awareness-to-Revenue", pageTitle: "A2R Strategic Priorities", pageHref: "/a2r-capabilities" },
  { outcome: "Forward-Looking Win Confidence", code: "DPA", name: "Predictive AI / Einstein Scoring", description: "Forward-looking conversion analytics trained on historical close patterns.", location: "Implementation-to-Renewal", pageTitle: "I2R Strategic Priorities", pageHref: "/i2r-capabilities" },
  { outcome: "Proactive Risk Inspection", code: "DAG", name: "Agentic AI / Autonomous Agents", description: "Agentforce copilots and autonomous agents for inspection and escalation.", location: "Cross-stream operating model", pageTitle: "Salesforce Capability Domains", pageHref: "/salesforce-domains" },
  { outcome: "Week-over-Week Movement Insight", code: "ARI", name: "Revenue Intelligence", description: "Cross-pipeline risk and movement analytics by role and segment.", location: "Leadership signal layer", pageTitle: "I2R Strategic Priorities", pageHref: "/i2r-capabilities" },
  { outcome: "In-Workflow Executive Visibility", code: "ABI", name: "Embedded BI & Dashboards", description: "Actionable forecast visibility inside the CRM workflow.", location: "Executive insight pages", pageTitle: "Salesforce Capability Domains", pageHref: "/salesforce-domains" },
  { outcome: "Unified Forecast Data Foundation", code: "DDH", name: "Data Harmonization", description: "Unifies CRM, communication, and external revenue context without disjoint workflows.", location: "Multi-source forecasting context", pageTitle: "Capability Sequencing", pageHref: "/capability-map" },
  { outcome: "Lifecycle Context for Renewals", code: "DUP", name: "Unified Customer Profile", description: "Single account and contact context for renewals and revenue expansion.", location: "Implementation-to-Renewal", pageTitle: "I2R Strategic Priorities", pageHref: "/i2r-capabilities" },
  { outcome: "Trust and Governance Assurance", code: "PGV", name: "Data Governance & Privacy", description: "Trust, auditability, and compliance guardrails for AI-assisted revenue execution.", location: "Platform confidence layer", pageTitle: "Salesforce Capability Domains", pageHref: "/salesforce-domains" },
  { outcome: "Action in the Flow of Work", code: "CAF", name: "Agentforce in Slack", description: "Operationalizes forecast insight in the collaboration channels teams already use.", location: "Execution in flow of work", pageTitle: "Capability Sequencing", pageHref: "/capability-map" },
  { outcome: "Cross-System Signal Alignment", code: "IEI", name: "Enterprise Integration", description: "Connects adjacent systems while keeping forecast decisioning in Salesforce.", location: "Consolidation strategy", pageTitle: "Salesforce Capability Domains", pageHref: "/salesforce-domains" },
  { outcome: "Executive Retirement Decision Criteria", code: "DFW", name: "Decision Framework", description: "Executive criteria for retiring Clari and Gong without disrupting flow-of-work execution.", location: "Consolidation governance", pageTitle: "Executive Decision Framework", pageHref: "/decision-framework" },
  { outcome: "Roadmap Execution Plan", code: "NST", name: "Recommended Next Steps", description: "Account-team action plan for sequencing workshop, pilot, and retirement readiness.", location: "Pre-sales execution plan", pageTitle: "Recommended Next Steps", pageHref: "/next-steps" }
];

export function CapabilitySearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(typeof CAPABILITY_INDEX === 'undefined' ? [] : CAPABILITY_INDEX);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setLocation] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    
    const q = query.toLowerCase();
    const filtered = CAPABILITY_INDEX.filter(item => {
      const haystack = `${item.outcome} ${item.code} ${item.name} ${item.description} ${item.location}`.toLowerCase();
      return haystack.includes(q);
    });
    
    setResults(filtered);
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[activeIndex]) {
        navigate(results[activeIndex].pageHref);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const navigate = (href: string) => {
    setLocation(href);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="search-wrap" ref={searchRef}>
      <div className="relative">
        <input 
          type="text" 
          className="search-input"
          placeholder="Search capabilities (e.g. SSP, AI, Gong...)"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            if (query.trim()) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      
      {isOpen && results.length > 0 && (
        <div className="search-results">
          {results.map((result, idx) => (
            <div 
              key={result.code}
              className={`result-item ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => navigate(result.pageHref)}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <div className="result-item-title">{result.code}: {result.name}</div>
              <div className="result-item-desc">{result.description}</div>
              <div className="result-item-loc">{result.location} &middot; {result.pageTitle}</div>
            </div>
          ))}
          <button 
            className="close-results"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
            }}
          >
            Close Search
          </button>
        </div>
      )}
      
      {isOpen && query.trim() && results.length === 0 && (
        <div className="search-results">
          <div className="p-4 text-sm text-[var(--bb-muted)] text-center">
            No capabilities found matching "{query}"
          </div>
          <button 
            className="close-results"
            onClick={() => setIsOpen(false)}
          >
            Close Search
          </button>
        </div>
      )}
    </div>
  );
}
