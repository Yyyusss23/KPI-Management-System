const express = require('express');
const router = express.Router();
const KPI = require('../models/kpi'); // Adjust path as needed
const User = require('../models/user'); // Adjust path as needed

// Middleware to protect manager routes
router.use((req, res, next) => {
  if (!req.session.user || req.session.user.role !== 'manager') {
    return res.redirect('/login');
  }
  next();
});

// Route to view assigned KPIs for managers
router.get('/kpi/view', async (req, res) => {
  try {
    // Fetch all KPIs and POPULATE the 'assignedTo' (or 'staffId') field
    // from the User model to get staff's name and department.
    const kpis = await KPI.find({})
      .populate({
        path: 'assignedTo', // This should be the field name in your KPI schema that references User
        select: 'name department' // Selects only 'name' and 'department' from the User model
      });

    // Extract staff names and departments directly from the populated KPIs for filters
    const uniqueStaffNames = [...new Set(kpis.map(kpi => kpi.assignedTo?.name).filter(Boolean))];
    const uniqueDepartments = [...new Set(kpis.map(kpi => kpi.assignedTo?.department).filter(Boolean))];

    res.render('manager-view-kpi', {
      kpis: kpis,
      uniqueStaffNames: uniqueStaffNames,
      uniqueDepartments: uniqueDepartments
    });
  } catch (err) {
    console.error('Error fetching KPIs for manager:', err);
    res.status(500).send('Server Error');
  }
});

// Add other manager-specific routes here (e.g., assign KPI, manage users, etc.)

module.exports = router;