db.createUser({
  user: 'root',
  pwd: 'example',
  roles: [
    {
      role: 'readWrite',
      db: 'mydatabase'
    }
  ]
});

db.createCollection('users');
db.createCollection('radioheads');
