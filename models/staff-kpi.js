const mongoose = require('mongoose');

const kpiSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  target: String,
  progress: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed', 'Pending Approval'], required: true },
  approvalstat: { type: String, enum: ['Pending Approval', 'Approved', 'Rejected'], required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Kpi', kpiSchema);
