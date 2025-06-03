const express = require('express');
const router = express.Router();
const KPI = require('../models/kpi'); // Adjust path as needed
const User = require('../models/user'); // Adjust path as needed

// Middleware to protect manager routes
router.use((req, res, next) => {
  if (!req.session.user || req.session.user.role !== 'manager') {
    return res.redirect('/login'); // Redirect to login if not authenticated or not a manager
  }
  next(); // Continue if authenticated and manager
});

// Route to view assigned KPIs for managers
router.get('/kpi/view', async (req, res) => {
  try {
    // Fetch all KPIs from your database
    const kpis = await KPI.find({}); 
    
    // Fetch unique staff names for the filter dropdown
    // This assumes staff have a 'name' field and a 'staff' role in your User model
    const uniqueStaffNames = await User.distinct('name', { role: 'staff' }); 

    // Fetch unique department names for the filter dropdown from the KPIs themselves
    const uniqueDepartments = [...new Set(kpis.map(kpi => kpi.department).filter(Boolean))]; 

    res.render('manager-view-kpi', { 
      kpis: kpis, // Pass the fetched KPIs to the EJS template
      uniqueStaffNames: uniqueStaffNames, // Pass unique staff names for filters
      uniqueDepartments: uniqueDepartments // Pass unique departments for filters
    });
  } catch (err) {
    console.error('Error fetching KPIs for manager:', err);
    res.status(500).send('Server Error');
  }
});

// Example route for KPI detail (you'll need to implement this)
router.get('/kpi-detail/:id', async (req, res) => {
  try {
    const kpi = await KPI.findById(req.params.id);
    if (!kpi) {
      return res.status(404).send('KPI not found');
    }
    res.render('manager-kpi-detail', { kpi }); // Assuming you have a manager-kpi-detail.ejs
  } catch (err) {
    console.error('Error fetching KPI detail:', err);
    res.status(500).send('Server Error');
  }
});

// Example route for KPI review (you'll need to implement this)
router.get('/kpi/review/:id', async (req, res) => {
  try {
    const kpi = await KPI.findById(req.params.id);
    if (!kpi) {
      return res.status(404).send('KPI not found for review');
    }
    res.render('manager-review-evidence', { kpi }); // Assuming you have a manager-review-evidence.ejs
  } catch (err) {
    console.error('Error fetching KPI for review:', err);
    res.status(500).send('Server Error');
  }
});

// Add other manager-specific routes here (e.g., assign KPI, manage users, etc.)

module.exports = router;