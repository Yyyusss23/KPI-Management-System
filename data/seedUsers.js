const mongoose = require('mongoose');
const User = require('./models/user'); // assuming you have User model

mongoose.connect('mongodb://localhost:27017/kpi_system', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const users = [
  {
    _id: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362a1"),
    name: "Alice Manager",
    email: "alice.manager@example.com",
    password: "123",
    role: "manager"
  },
  {
    _id: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362a2"),
    name: "Bob Manager",
    email: "bob.manager@example.com",
    password: "123",
    role: "manager"
  },
  {
    _id: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b1"),
    name: "Charlie Staff",
    email: "charlie.staff@example.com",
    password: "123",
    role: "staff"
  },
  {
    _id: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b2"),
    name: "Diana Staff",
    email: "diana.staff@example.com",
    password: "123",
    role: "staff"
  },
  {
    _id: mongoose.Types.ObjectId("6659fa9fb6e1c2cf81e362b3"),
    name: "Ethan Staff",
    email: "ethan.staff@example.com",
    password: "123",
    role: "staff"
  }
];

User.insertMany(users)
  .then(() => {
    console.log("Users seeded!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
