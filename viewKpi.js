// viewkpi.js

// Fetch KPIs from localStorage (used by assignkpi.js to store KPIs)
const storedKpis = JSON.parse(localStorage.getItem("kpiList")) || [];
const viewKpiList = document.getElementById("viewKpiList");

function displayKPIs(kpis) {
    viewKpiList.innerHTML = "";
    
    kpis.forEach((kpi, index) => {
        const card = document.createElement("div");
        card.className = "col-md-6";
        card.innerHTML = `
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${kpi.title}</h5>
                    <p class="card-text">${kpi.description}</p>
                    <ul class="list-unstyled">
                        <li><strong>Staff:</strong> ${kpi.staff}</li>
                        <li><strong>Target:</strong> ${kpi.target}</li>
                        <li><strong>Due:</strong> ${kpi.due}</li>
                        <li><strong>Indicator:</strong> ${kpi.indicator}</li>
                        <li><strong>Status:</strong> ${kpi.status}</li>
                    </ul>
                </div>
            </div>
        `;
        viewKpiList.appendChild(card);
    });
}

displayKPIs(storedKpis);

// Filter logic
const filterStaff = document.getElementById("filterStaff");
const filterDepartment = document.getElementById("filterDepartment");
const filterStatus = document.getElementById("filterStatus");

[filterStaff, filterDepartment, filterStatus].forEach(input => {
    input.addEventListener("input", () => {
        const staff = filterStaff.value.toLowerCase();
        const department = filterDepartment.value.toLowerCase();
        const status = filterStatus.value.toLowerCase();

        const filtered = storedKpis.filter(kpi => {
            return (
                kpi.staff.toLowerCase().includes(staff) &&
                (kpi.department?.toLowerCase().includes(department) || department === "") &&
                (kpi.status.toLowerCase().includes(status) || status === "")
            );
        });

        displayKPIs(filtered);
    });
});
