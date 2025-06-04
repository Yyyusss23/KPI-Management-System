const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const port = 3000;

const User = require('./models/user'); // User mongoose model
const KPI = require('./models/kpi'); // KPI mongoose model

// Serve static files from 'public' or 'styles' folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded bodies and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Session setup
app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: false
}));

// Connect DB
mongoose.connect('mongodb://localhost:27017/kpi_system');

// Login form route
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  console.log('Found user:', user);

  if (user) {
    req.session.user = {
      _id: user._id,
      email: user.email,
      role: user.role,
      name: user.name
    };
    res.redirect('/dashboard');
  } else {
    res.send('Login failed');
  }
});

app.get('/dashboard', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }

  const user = req.session.user;  // grab the whole user session
  console.log('User session:', user);

  if (user.role === 'manager') {
    res.render('dashboard-manager', { user });
  } else if (user.role === 'staff') {
    res.render('dashboard-staff', { user });
  } else {
    res.send('Unauthorized');
  }
});

// New API endpoint to get KPI data in JSON for frontend fetch
app.get('/api/kpis', async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const user = req.session.user;

    let kpis;

    if (user.role === 'manager') {
      // Manager can see all KPIs
      kpis = await KPI.find({}).populate('assignedTo');
    } else if (user.role === 'staff') {
      // Staff sees only their KPIs
      kpis = await KPI.find({ assignedTo: user._id }).populate('assignedTo');
    } else {
      return res.status(403).json({ error: 'Forbidden' });
    }

    res.json(kpis);
  } catch (error) {
    console.error('Error fetching KPIs:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Staff KPI routes
const kpiStaffRoutes = require('./routes/kpi-staff');
app.use('/kpi', kpiStaffRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Manager Routes
const managerRoutes = require('./routes/manager');
app.use('/manager', managerRoutes);

// Catch all route for 404
app.get(/(.*)/, (req, res) => {
  res.status(404).send('Sorry, Page Not Found!');
});

app.listen(port, () => {
  console.log(`Server has started and App is listening on port ${port}`);
});
