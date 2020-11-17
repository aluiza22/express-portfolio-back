const MongoClient = require('mongodb').MongoClient;

const dotenv = require("dotenv");
dotenv.config();

let mongoDB;

const setupDB = callback => {
  const uri = process.env.MONGODB_URI;
  

  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db('full-stack-server');

      if (err) {
        return callback(err);
      } else {
        return callback('DB OK');
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };