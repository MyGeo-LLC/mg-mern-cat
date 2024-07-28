const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const uri = process.env.MONGO_URI;

const initializeDatabase = async () => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db('mygeodb_test');
    
    // Create collections if they don't exist
    const collections = await database.listCollections().toArray();
    const collectionNames = collections.map(col => col.name);

    if (!collectionNames.includes('users')) {
      await database.createCollection('users');
      console.log('Users collection created');
    }

    if (!collectionNames.includes('radioHeads')) {
      await database.createCollection('radioHeads');
      console.log('RadioHeads collection created');
    }

    console.log('Database initialization completed');
  } catch (error) {
    console.error('Error initializing database: ', error);
  } finally {
    await client.close();
  }
};

initializeDatabase();
