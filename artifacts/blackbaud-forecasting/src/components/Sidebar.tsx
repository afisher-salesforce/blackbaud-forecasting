import React from 'react';
import { Link, useLocation } from 'wouter';
import { CapabilitySearch } from './CapabilitySearch';

const NAV_GROUPS = [
  {
    label: 'Overview',
    links: [
      { href: '/', label: 'Executive Summary' },
      { href: '/context', label: 'Account Context' }
    ]
  },
  {
    label: 'Revenue Lifecycle Priorities',
    links: [
      { href: '/a2r-capabilities', label: '1. Awareness-to-Revenue (A2R)' },
      { href: '/i2r-capabilities', label: '2. Implementation-to-Renewal (I2R)' }
    ]
  },
  {
    label: 'Architecture',
    links: [
      { href: '/capability-map', label: 'Capability Sequencing' },
      { href: '/decision-framework', label: 'Executive Decision Framework' },
      { href: '/salesforce-domains', label: 'Salesforce Capability Domains' }
    ]
  },
  {
    label: 'Appendix',
    links: [
      { href: '/next-steps', label: 'Recommended Next Steps' },
      { href: '/requirements-coverage', label: 'Requirements Coverage Matrix' },
      { href: '/license-validation', label: 'License & Validation' },
      { href: '/capability-terms', label: 'Capability Terms Guide' },
      { href: '/external-research', label: 'External Research' },
      { href: '/forward-looking-statement', label: 'Forward Looking Statement' }
    ]
  }
];

export function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="sidebar">
      <div className="brand-block">
        <h1 className="text-[20px] font-bold text-white mb-1">Blackbaud Forecasting</h1>
        <div className="text-[13px] text-[#aebcd3]">Executive Discussion Site · Salesforce Account Team</div>
        <div className="logo-pill">
          <img className="brand-logo" src="/salesforce-logo.jpg" alt="Salesforce" />
        </div>
      </div>
      
      <CapabilitySearch />
      
      <nav className="pb-8">
        {NAV_GROUPS.map((group, idx) => (
          <div key={idx}>
            <div className="group-label">{group.label}</div>
            <div className="nav-list">
              {group.links.map(link => {
                const isActive = location === link.href || (location === '' && link.href === '/');
                return (
                  <Link key={link.href} href={link.href} className={isActive ? 'active' : ''}>
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
