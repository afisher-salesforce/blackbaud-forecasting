export const TRAILHEAD_VERIFIED_AT = "2026-08-08";

export interface TrailheadItem {
  title: string;
  apiName: string;
  type: string;
  audience: string;
  level: string;
  timeMinutes: number;
  whyItMatters: string;
  url: string;
}

export const TRAILHEAD_RECOMMENDATIONS_BY_CODE: Record<string, TrailheadItem[]> = {
  SSP: [
    {
      title: "Drive Sales with Operational Excellence",
      apiName: "drive-sales-with-operational-excellence",
      type: "TRAIL",
      audience: "Administrator",
      level: "Foundational",
      timeMinutes: 110,
      whyItMatters: "Builds the operational forecast discipline needed for weekly manager rollups.",
      url: "https://trailhead.salesforce.com/en/content/learn/trails/drive-sales-with-operational-excellence",
    },
  ],
  SOP: [
    {
      title: "Agentforce Sales: Drive Pipeline Efficiency",
      apiName: "agentforce-sales-drive-pipeline-efficiency-with-analytics-and-ai",
      type: "TRAIL",
      audience: "Sales Professional",
      level: "Intermediate",
      timeMinutes: 371,
      whyItMatters: "Improves stage quality and pipeline signal reliability for forecast calls.",
      url: "https://trailhead.salesforce.com/en/content/learn/trails/agentforce-sales-drive-pipeline-efficiency-with-analytics-and-ai",
    },
  ],
  SLM: [
    {
      title: "Plan and Track Sales Goals with Sales Operations",
      apiName: "plan-and-track-sales-goals-with-sales-operations",
      type: "TRAIL",
      audience: "Sales Professional",
      level: "Foundational",
      timeMinutes: 40,
      whyItMatters: "Strengthens lead-to-revenue planning consistency across manager hierarchies.",
      url: "https://trailhead.salesforce.com/en/content/learn/trails/plan-and-track-sales-goals-with-sales-operations",
    },
  ],
  DPA: [
    {
      title: "Agentforce Sales: Drive Pipeline Efficiency",
      apiName: "agentforce-sales-drive-pipeline-efficiency-with-analytics-and-ai",
      type: "TRAIL",
      audience: "Architect",
      level: "Intermediate",
      timeMinutes: 371,
      whyItMatters: "Introduces advanced scoring and forecasting patterns aligned to sales leadership needs.",
      url: "https://trailhead.salesforce.com/en/content/learn/trails/agentforce-sales-drive-pipeline-efficiency-with-analytics-and-ai",
    },
  ],
  DAG: [
    {
      title: "Build with Agentforce for Service",
      apiName: "build-with-agentforce-for-service",
      type: "TRAIL",
      audience: "Architect",
      level: "Intermediate",
      timeMinutes: 479,
      whyItMatters: "Covers agent patterns and governance needed for proactive risk-inspection motions.",
      url: "https://trailhead.salesforce.com/en/content/learn/trails/build-with-agentforce-for-service",
    },
    {
      title: "Discover Agentforce Service",
      apiName: "discover-agentforce-service",
      type: "TRAIL",
      audience: "Administrator",
      level: "Foundational",
      timeMinutes: 582,
      whyItMatters: "Provides foundational configuration understanding for deploying practical agent flows.",
      url: "https://trailhead.salesforce.com/en/content/learn/trails/discover-agentforce-service",
    },
  ],
  ARI: [
    {
      title: "Agentforce Sales: Drive Pipeline Efficiency",
      apiName: "agentforce-sales-drive-pipeline-efficiency-with-analytics-and-ai",
      type: "TRAIL",
      audience: "Executive",
      level: "Foundational",
      timeMinutes: 371,
      whyItMatters: "Helps leaders interpret movement and forecast intelligence in one operating rhythm.",
      url: "https://trailhead.salesforce.com/en/content/learn/trails/agentforce-sales-drive-pipeline-efficiency-with-analytics-and-ai",
    },
  ],
  ABI: [
    {
      title: "Become a Data-Driven Team using Tableau",
      apiName: "become-a-data-driven-team-using-tableau",
      type: "TRAIL",
      audience: "Data Analyst",
      level: "Intermediate",
      timeMinutes: 795,
      whyItMatters: "Builds executive-ready dashboard and data storytelling practices for revenue leadership.",
      url: "https://trailhead.salesforce.com/en/content/learn/trails/become-a-data-driven-team-using-tableau",
    },
  ],
  DDH: [
    {
      title: "Unlock Your Data with Data Cloud",
      apiName: "unlock-your-data-with-data-cloud",
      type: "TRAIL",
      audience: "Architect",
      level: "Foundational",
      timeMinutes: 606,
      whyItMatters: "Covers ingestion and harmonization practices needed for trusted forecast intelligence.",
      url: "https://trailhead.salesforce.com/en/content/learn/trails/unlock-your-data-with-data-cloud",
    },
  ],
  DUP: [
    {
      title: "Unlock Your Data with Data Cloud",
      apiName: "unlock-your-data-with-data-cloud",
      type: "TRAIL",
      audience: "Administrator",
      level: "Foundational",
      timeMinutes: 606,
      whyItMatters: "Builds the profile unification foundation for renewal and account health context.",
      url: "https://trailhead.salesforce.com/en/content/learn/trails/unlock-your-data-with-data-cloud",
    },
  ],
  PGV: [
    {
      title: "Build with Agentforce for Service",
      apiName: "build-with-agentforce-for-service",
      type: "TRAIL",
      audience: "Architect",
      level: "Intermediate",
      timeMinutes: 479,
      whyItMatters: "Provides trust, governance, and activation controls for enterprise AI-enabled operations.",
      url: "https://trailhead.salesforce.com/en/content/learn/trails/build-with-agentforce-for-service",
    },
  ],
  CAF: [
    {
      title: "Agentforce Service for Slack",
      apiName: "service-cloud-for-slack",
      type: "TRAIL",
      audience: "Administrator",
      level: "Foundational",
      timeMinutes: 95,
      whyItMatters: "Shows how to turn collaboration channels into action surfaces for customer and forecast workflows.",
      url: "https://trailhead.salesforce.com/en/content/learn/trails/service-cloud-for-slack",
    },
  ],
  IEI: [
    {
      title: "MuleSoft Learning Search",
      apiName: "mulesoft-learning-search",
      type: "TRAILHEAD_SEARCH",
      audience: "Architect",
      level: "Intermediate",
      timeMinutes: 60,
      whyItMatters: "Targets integration patterns needed to keep forecast signals aligned across systems.",
      url: "https://trailhead.salesforce.com/search?keywords=MuleSoft%20API-led%20connectivity",
    },
  ],
  APC: [
    {
      title: "Become a Data-Driven Team using Tableau",
      apiName: "become-a-data-driven-team-using-tableau",
      type: "TRAIL",
      audience: "Executive",
      level: "Foundational",
      timeMinutes: 795,
      whyItMatters: "Helps leaders adopt proactive insight monitoring and decision-oriented analytics habits.",
      url: "https://trailhead.salesforce.com/en/content/learn/trails/become-a-data-driven-team-using-tableau",
    },
  ],
};

export function getEnablementForCodes(codes: string[], maxItems = 3): TrailheadItem[] {
  const seen = new Set<string>();
  const collected: TrailheadItem[] = [];
  codes.forEach((code) => {
    const items = TRAILHEAD_RECOMMENDATIONS_BY_CODE[code] || [];
    items.forEach((item) => {
      if (seen.has(item.apiName)) return;
      seen.add(item.apiName);
      collected.push(item);
    });
  });
  return collected.slice(0, maxItems);
}

export function formatLearningTime(minutes: number): string {
  if (minutes >= 60) return `${Math.round((minutes / 60) * 10) / 10}h`;
  return `${minutes}m`;
}
