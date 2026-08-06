const CAPABILITY_INDEX = [
  { code: "SSP", name: "Sales Performance Management", description: "Collaborative forecasting with manager adjustments and hierarchy rollups.", location: "A2R and I2R forecast orchestration", pageTitle: "Capability Map", pageHref: "capability-map.html" },
  { code: "SOP", name: "Opportunity Management", description: "Pipeline discipline, stage integrity, and forecast category governance.", location: "A2R pipeline flow", pageTitle: "A2R Capability Focus", pageHref: "a2r-capabilities.html" },
  { code: "SLM", name: "Lead Management", description: "Lead-to-opportunity conversion signal for revenue planning confidence.", location: "Awareness-to-Revenue", pageTitle: "A2R Capability Focus", pageHref: "a2r-capabilities.html" },
  { code: "DPA", name: "Predictive AI / Einstein Scoring", description: "Forward-looking conversion analytics trained on historical close patterns.", location: "Forecast confidence and risk", pageTitle: "I2R Capability Focus", pageHref: "i2r-capabilities.html" },
  { code: "DAG", name: "Agentic AI / Autonomous Agents", description: "Agentforce copilots and autonomous agents for inspection and escalation.", location: "Cross-stream operating model", pageTitle: "Salesforce Capability Domains", pageHref: "salesforce-domains.html" },
  { code: "ARI", name: "Revenue Intelligence", description: "Cross-pipeline risk and movement analytics by role and segment.", location: "Leadership signal layer", pageTitle: "I2R Capability Focus", pageHref: "i2r-capabilities.html" },
  { code: "ABI", name: "Embedded BI & Dashboards", description: "Actionable forecast visibility inside the CRM workflow.", location: "Executive insight pages", pageTitle: "Salesforce Capability Domains", pageHref: "salesforce-domains.html" },
  { code: "DDH", name: "Data Harmonization", description: "Unifies CRM, communication, and external revenue context without disjoint workflows.", location: "Multi-source forecasting context", pageTitle: "Capability Map", pageHref: "capability-map.html" },
  { code: "DUP", name: "Unified Customer Profile", description: "Single account and contact context for renewals and revenue expansion.", location: "Implementation-to-Renewal", pageTitle: "I2R Capability Focus", pageHref: "i2r-capabilities.html" },
  { code: "PGV", name: "Data Governance & Privacy", description: "Trust, auditability, and compliance guardrails for AI-assisted revenue execution.", location: "Platform confidence layer", pageTitle: "Salesforce Capability Domains", pageHref: "salesforce-domains.html" },
  { code: "CAF", name: "Agentforce in Slack", description: "Operationalizes forecast insight in the collaboration channels teams already use.", location: "Execution in flow of work", pageTitle: "Capability Map", pageHref: "capability-map.html" },
  { code: "IEI", name: "Enterprise Integration", description: "Connects adjacent systems while keeping forecast decisioning in Salesforce.", location: "Consolidation strategy", pageTitle: "Salesforce Capability Domains", pageHref: "salesforce-domains.html" }
];

function setActiveNav() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-list a").forEach((a) => {
    if (a.getAttribute("href") === page) {
      a.classList.add("active");
    }
  });
}

function initNavToggle() {
  const btn = document.getElementById("navToggle");
  const body = document.body;
  const state = localStorage.getItem("bb-nav-collapsed");
  if (state === "true") body.classList.add("nav-collapsed");
  btn.textContent = body.classList.contains("nav-collapsed") ? "Show Navigation" : "Hide Navigation";
  btn.addEventListener("click", () => {
    body.classList.toggle("nav-collapsed");
    const collapsed = body.classList.contains("nav-collapsed");
    localStorage.setItem("bb-nav-collapsed", collapsed ? "true" : "false");
    btn.textContent = collapsed ? "Show Navigation" : "Hide Navigation";
  });
}

function initSearch() {
  const input = document.getElementById("capabilitySearch");
  const results = document.getElementById("searchResults");
  const closeBtn = document.getElementById("closeResults");
  if (!input || !results || !closeBtn) return;

  let selected = -1;
  let filtered = [];

  function render() {
    const query = input.value.trim().toLowerCase();
    filtered = CAPABILITY_INDEX.filter((item) => {
      const haystack = `${item.code} ${item.name} ${item.description} ${item.location}`.toLowerCase();
      return haystack.includes(query);
    });
    if (!query || filtered.length === 0) {
      results.classList.remove("open");
      results.innerHTML = "";
      selected = -1;
      return;
    }
    const items = filtered.map((item, i) => `
      <div class="result-item ${i === selected ? "active" : ""}" data-idx="${i}">
        <strong>${item.code}: ${item.name}</strong>
        <span>${item.description}</span>
        <span>${item.location} · ${item.pageTitle}</span>
      </div>
    `).join("");
    results.innerHTML = `${items}<button id="closeResults" class="close-results">Close search</button>`;
    results.classList.add("open");
    results.querySelectorAll(".result-item").forEach((node) => {
      node.addEventListener("click", () => {
        const idx = Number(node.dataset.idx);
        window.location.href = filtered[idx].pageHref;
      });
    });
    const newClose = document.getElementById("closeResults");
    newClose.addEventListener("click", () => results.classList.remove("open"));
  }

  input.addEventListener("input", render);
  input.addEventListener("keydown", (e) => {
    if (!results.classList.contains("open")) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      selected = Math.min(selected + 1, filtered.length - 1);
      render();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selected = Math.max(selected - 1, 0);
      render();
    } else if (e.key === "Enter" && selected >= 0) {
      window.location.href = filtered[selected].pageHref;
    } else if (e.key === "Escape") {
      results.classList.remove("open");
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) {
      results.classList.remove("open");
    }
  });

  closeBtn.addEventListener("click", () => results.classList.remove("open"));
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  initNavToggle();
  initSearch();
});
