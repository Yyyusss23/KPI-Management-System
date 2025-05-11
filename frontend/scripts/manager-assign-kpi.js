const form = document.getElementById("kpiForm");
const kpiList = document.getElementById("kpiList");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const staffName = document.getElementById("staffName").value;
    const department = document.getElementById("department").value;
    const title = document.getElementById("kpiTitle").value;
    const description = document.getElementById("kpiDescription").value;
    const target = document.getElementById("targetValue").value;
    const dueDate = document.getElementById("dueDate").value;
    const indicator = document.getElementById("performanceIndicator").value;

    const li = document.createElement("li");
    li.className = "list-group-item kpi-card";

    li.innerHTML = `
        <div>
            <h5 class="kpi-title">${title}</h5>
            <p class="kpi-description">${description}</p>
            <p class="kpi-detail"><strong>Staff Name:</strong> ${staffName}</p>
            <p class="kpi-detail"><strong>Department:</strong> ${department}</p>
            <p class="kpi-detail"><strong>Target:</strong> ${target}</p>
            <p class="kpi-detail"><strong>Due Date:</strong> ${dueDate}</p>
            <p class="kpi-detail"><strong>Performance Indicator:</strong> ${indicator}</p>
        </div>
        <div class="text-end mt-2">
            <button class="btn btn-warning btn-sm me-2" onclick="editKPI(this)">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteKPI(this)">Delete</button>
        </div>
    `;

    kpiList.appendChild(li);
    form.reset();
});

function editKPI(button) {
    const item = button.closest("li");

    const title = item.querySelector(".kpi-title").innerText;
    const description = item.querySelector(".kpi-description").innerText;
    const details = item.querySelectorAll(".kpi-detail");

    const staffName = details[0].innerText.replace("Staff Name:", "").trim();
    const department = details[1].innerText.replace("Department:", "").trim();
    const target = details[2].innerText.replace("Target:", "").trim();
    const dueDate = details[3].innerText.replace("Due Date:", "").trim();
    const indicator = details[4].innerText.replace("Performance Indicator:", "").trim();

    document.getElementById("kpiTitle").value = title;
    document.getElementById("kpiDescription").value = description;
    document.getElementById("staffName").value = staffName;
    document.getElementById("department").value = department;
    document.getElementById("targetValue").value = target;
    document.getElementById("dueDate").value = dueDate;
    document.getElementById("performanceIndicator").value = indicator;

    item.remove();
}

function deleteKPI(button) {
    if (confirm("Are you sure you want to delete this KPI?")) {
        const item = button.closest("li");
        item.remove();
    }
}
