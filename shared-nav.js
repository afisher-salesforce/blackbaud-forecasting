document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;
  sidebar.innerHTML = `
    <div class="brand-block">
      <h1>Blackbaud Forecasting</h1>
      <p>Executive Discussion Site · Salesforce Account Team</p>
      <div class="logo-pill">
        <img src="https://www.salesforce.com/content/dam/web/en_us/www/images/home/logo-salesforce.svg" alt="Salesforce logo">
      </div>
    </div>
    <div class="group-label">Search</div>
    <div class="search-wrap">
      <input id="capabilitySearch" type="text" placeholder="Search capability, acronym, or outcome">
      <div id="searchResults" class="search-results"></div>
      <button id="closeResults" class="close-results" style="display:none;">Close search</button>
    </div>
    <div class="group-label">Overview</div>
    <ul class="nav-list">
      <li><a href="index.html">Executive Summary</a></li>
      <li><a href="context.html">Account Context</a></li>
    </ul>
    <div class="group-label">Vignettes</div>
    <ul class="nav-list">
      <li><a href="a2r-capabilities.html">1. A2R Strategic Priorities</a></li>
      <li><a href="i2r-capabilities.html">2. I2R Strategic Priorities</a></li>
    </ul>
    <div class="group-label">Architecture</div>
    <ul class="nav-list">
      <li><a href="capability-map.html">Capability Map & Sequencing</a></li>
      <li><a href="salesforce-domains.html">Salesforce Capability Domains</a></li>
    </ul>
    <div class="group-label">Appendix</div>
    <ul class="nav-list">
      <li><a href="external-research.html">External Research</a></li>
      <li><a href="forward-looking-statement.html">Forward Looking Statement</a></li>
    </ul>
  `;
});
