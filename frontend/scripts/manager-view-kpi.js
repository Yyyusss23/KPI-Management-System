// manager-view-kpi.js

const storedKpis = JSON.parse(localStorage.getItem("kpis")) || [];
const kpiTableBody = document.querySelector("#kpiTable tbody");

function renderTable(kpis) {
  kpiTableBody.innerHTML = "";

  kpis.forEach((kpi) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><a href="manager-kpi-detail.html?id=${kpi.id}">${kpi.title}</a></td>
      <td>${kpi.description}</td>
      <td>${kpi.staffName}</td>
      <td>${kpi.department}</td>
      <td>${kpi.targetValue}</td>
      <td>${kpi.dueDate}</td>
      <td>${kpi.performanceIndicator}</td>
      <td>${
        kpi.status.toLowerCase() === "pending"
          ? `<a href="manager-view-evidence.html?id=${kpi.id}">Review</a>`
          : ""
      }</td>      
      
      <td>
        <span class="badge bg-${getStatusColor(kpi.status)}">${
      kpi.status
    }</span>
      </td>
    `;

    kpiTableBody.appendChild(tr);
  });
}

function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case "approved":
      return "success";
    case "rejected":
      return "danger";
    case "pending":
      return "warning text-white";
    default:
      return "secondary";
  }
}

renderTable(storedKpis);

// Flilter functionality
// TODO: Filter logic here cannot work properly
const filterStaff = document.getElementById("filterStaff");
const filterDepartment = document.getElementById("filterDepartment");
const filterStatus = document.getElementById("filterStatus");

[filterStaff, filterDepartment, filterStatus].forEach((input) => {
  input.addEventListener("input", () => {
    const staff = filterStaff.value.toLowerCase();
    const department = filterDepartment.value.toLowerCase();
    const status = filterStatus.value.toLowerCase();

    const filtered = storedKpis.filter(
      (kpi) =>
        kpi.staffName.toLowerCase().includes(staff) &&
        (kpi.department?.toLowerCase().includes(department) ||
          department === "") &&
        (kpi.status.toLowerCase().includes(status) || status === "")
    );

    renderTable(filtered);
  });
});
