const mongoose = require('mongoose');
const Kpi = require('../models/staff-kpi'); // assuming you have Kpi model

mongoose.connect('mongodb://localhost:27017/kpi_system');

const kpis = [
  {
    title: "Increase Website Traffic",
    description: "Improve website visits by 30% in Q2.",
    target: "30% increase",
    targetNumber: 30,
    progress: "Increase by 10%",
    progressNumber: 10,
    startDate: new Date("2025-06-01"),
    dueDate: new Date("2025-06-30"),
    status: "In Progress",
    approvalstat: "Approved",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b1")
  },
  {
    title: "Launch Email Campaign",
    description: "Send 3 newsletters by end of June.",
    target: "3 campaigns",
    targetNumber: 3,
    progress: "2 campaigns sent",
    progressNumber: 2,
    startDate: new Date("2025-05-20"),
    dueDate: new Date("2025-06-25"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b1")
  },
  {
    title: "Publish 5 Blog Articles",
    description: "Create and publish 5 SEO-friendly articles.",
    target: "5 articles",
    targetNumber: 5,
    progress: "Post a total of 5 articles",
    progressNumber: 5,
    startDate: new Date("2025-05-01"),
    dueDate: new Date("2025-06-20"),
    status: "Completed",
    approvalstat: "Approved",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b1")
  },
  {
    title: "Conduct User Feedback Survey",
    description: "Collect at least 100 survey responses.",
    target: "100 responses",
    targetNumber: 100,
    progress: "0 responses collected",
    progressNumber: 0,
    startDate: new Date("2025-06-15"),
    dueDate: new Date("2025-06-28"),
    status: "Not Started",
    approvalstat: "Rejected",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b1")
  },
  {
    title: "Boost Social Media Followers",
    description: "Increase followers by 500 this month.",
    target: "500 new followers",
    targetNumber: 500,
    progress: "350 new followers",
    progressNumber: 350,
    startDate: new Date("2025-06-01"),
    dueDate: new Date("2025-06-30"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b2")
  },
  {
    title: "Design New Promotional Banner",
    description: "Create 3 new banners for homepage.",
    target: "3 banners",
    targetNumber: 3,
    progress: "No banners created yet",
    progressNumber: 0,
    startDate: new Date("2025-05-19"),
    dueDate: new Date("2025-06-18"),
    status: "Not Started",
    approvalstat: "No New Progress",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b2")
  },
  {
    title: "Update Product Brochures",
    description: "Revise brochures for top 5 products.",
    target: "5 updated brochures",
    targetNumber: 5,
    progress: "Post 5 updated brochures",
    progressNumber: 5,
    startDate: new Date("2025-06-01"),
    dueDate: new Date("2025-06-24"),
    status: "Completed",
    approvalstat: "Approved",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b2")
  },
  {
    title: "Plan Q3 Marketing Strategy",
    description: "Submit comprehensive strategy plan.",
    target: "Strategy Document",
    targetNumber: 100,
    progress: "Draft completed",
    progressNumber: 70,
    startDate: new Date("2025-06-01"),
    dueDate: new Date("2025-06-29"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b2")
  },
  {
    title: "Deploy System Update v2.0",
    description: "Complete system update rollout.",
    target: "System Live by Due Date",
    targetNumber: 100,
    progress: "10% completed",
    progressNumber: 10,
    startDate: new Date("2025-06-01"),
    dueDate: new Date("2025-06-26"),
    status: "In Progress",
    approvalstat: "Approved",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
  },
  {
    title: "Prepare System Documentation",
    description: "Create technical documentation for updates.",
    target: "Complete documentation set",
    targetNumber: 100,
    progress: "Draft completed",
    progressNumber: 50,
    startDate: new Date("2025-06-01"),
    dueDate: new Date("2025-06-28"),
    status: "In Progress",
    approvalstat: "Approved",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
  },
  {
    title: "Optimize Server Performance",
    description: "Reduce server response time by 20%.",
    target: "20% reduction",
    targetNumber: 20,
    progress: "10% reduction achieved",
    progressNumber: 10,
    startDate: new Date("2025-04-01"),
    dueDate: new Date("2025-06-25"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
  },
  {
    title: "Conduct System Security Audit",
    description: "Complete internal security assessment.",
    target: "Audit Report",
    targetNumber: 100,
    progress: "0% in progress",
    progressNumber: 0,
    startDate: new Date("2025-06-11"),
    dueDate: new Date("2025-06-30"),
    status: "Not Started",
    approvalstat: "No New Progress",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
  },
  {
    title: "Fix Reported System Bugs",
    description: "Resolve all open bugs from May report.",
    target: "0 open bugs",
    targetNumber: 100,
    progress: "A total of 10 bugs fixed",
    progressNumber: 10,
    startDate: new Date("2025-06-01"),
    dueDate: new Date("2025-06-22"),
    status: "In Progress",
    approvalstat: "No New Progress",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
  },
  {
    title: "Launch New Marketing Campaign",
    description: "Deploy a social media campaign targeting Gen Z audience.",
    target: "Reach 50k engagements",
    targetNumber: 50000,
    progress: "20k engagements",
    progressNumber: 20000,
    startDate: new Date("2025-06-05"),
    dueDate: new Date("2025-07-05"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b1")
  },
  {
    title: "SEO Optimization",
    description: "Improve organic search ranking for 5 key pages.",
    target: "Top 3 ranking",
    targetNumber: 3,
    progress: "2 pages in Top 3",
    progressNumber: 2,
    startDate: new Date("2025-06-10"),
    dueDate: new Date("2025-07-10"),
    status: "In Progress",
    approvalstat: "Approved",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b1")
  },
  {
    title: "Email Subscriber Growth",
    description: "Increase mailing list subscribers by 5000.",
    target: "5000 new subscribers",
    targetNumber: 5000,
    progress: "1500 subscribers",
    progressNumber: 1500,
    startDate: new Date("2025-06-01"),
    dueDate: new Date("2025-06-30"),
    status: "Not Started",
    approvalstat: "No New Progress",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b1")
  },

  // User: 6659fa9fb6e1c2cf81e362b2
  {
    title: "Improve Customer Retention",
    description: "Reduce churn rate by 5%.",
    target: "5% reduction",
    targetNumber: 5,
    progress: "1% reduction",
    progressNumber: 1,
    startDate: new Date("2025-06-01"),
    dueDate: new Date("2025-06-30"),
    status: "In Progress",
    approvalstat: "Approved",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b2")
  },
  {
    title: "New Product Feature Rollout",
    description: "Deploy feature X to 100% of users.",
    target: "100% deployment",
    targetNumber: 100,
    progress: "50% deployment",
    progressNumber: 50,
    startDate: new Date("2025-06-10"),
    dueDate: new Date("2025-06-25"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b2")
  },
  {
    title: "Conduct Customer Feedback Survey",
    description: "Gather feedback from 500 customers.",
    target: "500 responses",
    targetNumber: 500,
    progress: "300 responses",
    progressNumber: 300,
    startDate: new Date("2025-06-05"),
    dueDate: new Date("2025-06-20"),
    status: "Completed",
    approvalstat: "Approved",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b2")
  },
  {
    title: "Create Monthly Newsletter",
    description: "Publish June edition of the newsletter.",
    target: "1 edition",
    targetNumber: 1,
    progress: "Draft completed",
    progressNumber: 0,
    startDate: new Date("2025-06-01"),
    dueDate: new Date("2025-06-15"),
    status: "In Progress",
    approvalstat: "Pending Approval",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b2")
  },

  // User: 6659fa9fb6e1c2cf81e362b3
  {
    title: "Boost Social Media Followers",
    description: "Gain 10,000 new followers on Instagram.",
    target: "10,000 new followers",
    targetNumber: 10000,
    progress: "4,000 followers",
    progressNumber: 4000,
    startDate: new Date("2025-06-01"),
    dueDate: new Date("2025-06-30"),
    status: "In Progress",
    approvalstat: "Approved",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
  },
  {
    title: "Create New Product Videos",
    description: "Produce 3 promotional videos.",
    target: "3 videos",
    targetNumber: 3,
    progress: "1 video completed",
    progressNumber: 1,
    startDate: new Date("2025-06-05"),
    dueDate: new Date("2025-06-25"),
    status: "In Progress",
    approvalstat: "Rejected",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
  },
  {
    title: "Host a Webinar",
    description: "Organize and host an online session for 200 attendees.",
    target: "200 attendees",
    targetNumber: 200,
    progress: "Webinar scheduled",
    progressNumber: 0,
    startDate: new Date("2025-06-10"),
    dueDate: new Date("2025-06-28"),
    status: "Completed",
    approvalstat: "Approved",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
  },
  {
    title: "Update Website Content",
    description: "Revamp the 'About Us' and 'Services' sections.",
    target: "100% content updated",
    targetNumber: 100,
    progress: "100% completed",
    progressNumber: 100,
    startDate: new Date("2025-06-01"),
    dueDate: new Date("2025-06-20"),
    status: "Completed",
    approvalstat: "Approved",
    assignedTo: new mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3")
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
