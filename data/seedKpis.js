const mongoose = require('mongoose');
const Kpi = require('./models/staff-kpi'); // assuming you have Kpi model

mongoose.connect('mongodb://localhost:27017/kpi_system', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const kpis = [
  {
    title: "Increase Website Traffic",
    description: "Improve website visits by 30% in Q2.",
    target: "30% increase",
    progress: 40,
    dueDate: new Date("2025-06-30"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b1")
  },
  {
    title: "Launch Email Campaign",
    description: "Send 3 newsletters by end of June.",
    target: "3 campaigns",
    progress: 70,
    dueDate: new Date("2025-06-25"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b1")
  },
  {
    title: "Publish 5 Blog Articles",
    description: "Create and publish 5 SEO-friendly articles.",
    target: "5 articles",
    progress: 100,
    dueDate: new Date("2025-06-20"),
    status: "Completed",
    approvalstat: "Approved",
    assignedTo: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b1")
  },
  {
    title: "Conduct User Feedback Survey",
    description: "Collect at least 100 survey responses.",
    target: "100 responses",
    progress: 85,
    dueDate: new Date("2025-06-28"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b1")
  },
  {
    title: "Boost Social Media Followers",
    description: "Increase followers by 500 this month.",
    target: "500 new followers",
    progress: 60,
    dueDate: new Date("2025-06-30"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b2")
  },
  {
    title: "Design New Promotional Banner",
    description: "Create 3 new banners for homepage.",
    target: "3 banners",
    progress: 30,
    dueDate: new Date("2025-06-18"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b2")
  },
  {
    title: "Update Product Brochures",
    description: "Revise brochures for top 5 products.",
    target: "5 updated brochures",
    progress: 90,
    dueDate: new Date("2025-06-24"),
    status: "Pending Approval",
    approvalstat: "Pending Approval",
    assignedTo: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b2")
  },
  {
    title: "Plan Q3 Marketing Strategy",
    description: "Submit comprehensive strategy plan.",
    target: "Strategy Document",
    progress: 50,
    dueDate: new Date("2025-06-29"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b2")
  },
  {
    title: "Deploy System Update v2.0",
    description: "Complete system update rollout.",
    target: "System Live by Due Date",
    progress: 80,
    dueDate: new Date("2025-06-26"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
  },
  {
    title: "Prepare System Documentation",
    description: "Create technical documentation for updates.",
    target: "Complete documentation set",
    progress: 60,
    dueDate: new Date("2025-06-28"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
  },
  {
    title: "Optimize Server Performance",
    description: "Reduce server response time by 20%.",
    target: "20% reduction",
    progress: 45,
    dueDate: new Date("2025-06-25"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
  },
  {
    title: "Conduct System Security Audit",
    description: "Complete internal security assessment.",
    target: "Audit Report",
    progress: 20,
    dueDate: new Date("2025-06-30"),
    status: "Not Started",
    approvalstat: "Pending Approval",
    assignedTo: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
  },
  {
    title: "Fix Reported System Bugs",
    description: "Resolve all open bugs from May report.",
    target: "0 open bugs",
    progress: 75,
    dueDate: new Date("2025-06-22"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
  }
];

Kpi.insertMany(kpis)
  .then(() => {
    console.log("KPIs seeded!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
