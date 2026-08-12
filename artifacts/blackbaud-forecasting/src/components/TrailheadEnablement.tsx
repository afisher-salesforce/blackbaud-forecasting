import React from 'react';
import {
  TRAILHEAD_VERIFIED_AT,
  getEnablementForCodes,
  formatLearningTime,
} from '../data/trailheadData';

interface Props {
  codes: string[];
  title?: string;
}

export default function TrailheadEnablement({
  codes,
  title = 'Suggested Trailhead Enablement',
}: Props) {
  const items = getEnablementForCodes(codes);
  if (!items.length) return null;

  return (
    <div className="enablement-block">
      <div className="enablement-head">
        <h4>{title}</h4>
        <span>Verified {TRAILHEAD_VERIFIED_AT}</span>
      </div>
      <div className="enablement-grid">
        {items.map((item) => (
          <a
            key={item.apiName}
            className="enablement-card"
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="enablement-title">{item.title}</div>
            <div className="enablement-meta">
              <span>{item.type}</span>
              <span>{item.audience}</span>
              <span>{item.level}</span>
              <span>{formatLearningTime(item.timeMinutes)}</span>
            </div>
            <div className="enablement-why">{item.whyItMatters}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
