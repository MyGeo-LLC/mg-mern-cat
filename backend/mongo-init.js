db.createUser({
  user: "admin",
  pwd: "adminpassword",
  roles: [
    { role: "readWrite", db: "mydatabase" },
    { role: "dbAdmin", db: "mydatabase" }
  ]
});

db.createUser({
  user: "user",
  pwd: "userpassword",
  roles: [
    { role: "readWrite", db: "mydatabase" }
  ]
});

db.users.insertMany([
  {
    name: "Admin User",
    email: "admin@example.com",
    password: "$2b$10$somehashedpassword", // Replace with hashed password
    role: "admin"
  },
  {
    name: "Regular User",
    email: "user@example.com",
    password: "$2b$10$somehashedpassword", // Replace with hashed password
    role: "user"
  }
]);
