const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  companyId: {type: String, required: true},
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['manager', 'staff'], required: true },
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  department: { type: String, enum: ['Sales & Marketing', 'HR & Admin', 'IT', 'Customer Service', 'Account & Finance'], default: true },
});

// Check if the 'User' model already exists in Mongoose's models.
// If it does, use the existing model; otherwise, compile and use the new one.
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
