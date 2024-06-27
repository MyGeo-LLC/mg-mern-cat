db.createUser({
  user: "root",
  pwd: "example",
  roles: [
    { role: "root", db: "admin" }
  ]
});

db = db.getSiblingDB('mydatabase'); // switch to your database

db.createCollection('users');

db.users.insertOne({
  name: "Admin User",
  email: "admin@example.com",
  password: "$2a$10$EIX/W7LCOICQaG2G/h5tOuH8fO0jBSX5c/O24o7exJXjN5E2XbDGS", // bcrypt hash of "adminpassword"
  role: "admin",
});
