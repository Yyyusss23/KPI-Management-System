if (!localStorage.getItem("kpis")) {
  localStorage.setItem("kpis", JSON.stringify(sampleKPIs));
}

// Sample KPI data loaded into manager-view-kpi.html, manager-view-evidence.html, and manager-kpi-detail.html
const sampleKPIs = [
  {
    id: "kpi-1",
    title: "Customer Satisfaction",
    description: "Improve customer support ratings.",
    staffName: "Ainul Husna",
    department: "Customer Service",
    targetValue: "90%",
    dueDate: "2025-06-30",
    performanceIndicator: "CSAT survey scores",
    status: "Pending",
    evidence: [
        {
        date: "2025-04-05",
        description: "Submitted sales report",
        file: "example.pdf",
        status: "Pending",
      },
    ],
  },
  {
    id: "kpi-2",
    title: "Website Uptime",
    description: "Maintain 99.9% uptime for Q2.",
    staffName: "Haziq Rahman",
    department: "IT",
    targetValue: "99.9%",
    dueDate: "2025-06-30",
    performanceIndicator: "Server monitoring logs",
    status: "Approved",
    evidence: [
      {
        date: "2025-04-05",
        description: "Submitted sales report",
        file: "example.pdf",
        status: "Approved",
      },
    ],
  },
  {
    id: "kpi-3",
    title: "Increase sales by 20%",
    description: "Get 20 orders",
    staffName: "Harry Potter",
    department: "Sales",
    targetValue: "20%",
    dueDate: "2025-09-30",
    performanceIndicator: "Monthly sales report",
    status: "Pending",
    evidence: [
      {
        date: "2025-04-01",
        description: "Submitted sales report",
        file: "example.pdf",
        status: "Pending",
      },
    ],
  },
];

localStorage.setItem("kpis", JSON.stringify(sampleKPIs));
