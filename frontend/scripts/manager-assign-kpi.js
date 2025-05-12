const form = document.getElementById("kpiForm");
const kpiList = document.getElementById("kpis");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const kpi = {
    id: `kpi-${Date.now()}`, // Unique ID based on timestamp
    title: document.getElementById("kpiTitle").value,
    description: document.getElementById("kpiDescription").value,
    staffName: document.getElementById("staffName").value,
    department: document.getElementById("department").value,
    targetValue: document.getElementById("targetValue").value,
    dueDate: document.getElementById("dueDate").value,
    performanceIndicator: document.getElementById("performanceIndicator").value,
    status: "Pending",
    evidence: [],
  };
  // Stored in localStorage
  const kpis = JSON.parse(localStorage.getItem("kpis")) || [];
  kpis.push(kpi);
  localStorage.setItem("kpis", JSON.stringify(kpis));

  renderKPI(kpi);
  form.reset();
});
