// code to build and initialize DB goes here
const {
  client,
  // other db methods
} = require("./index");

const {createInitialUsers} = require("./users/usersSeedData")

async function buildTables() {
  try {
    client.connect();

    async function dropTables() {
      console.log("Dropping All Tables...");
      // drop all tables, in the correct order
      try {
        await client.query(`
        DROP TABLE IF EXISTS users;
      `);

        console.log("Finished dropping tables");
      } catch (error) {
        console.error(error);
        console.error("Error dropping tables");
      }
    }

    // build tables in correct order

    async function createTables() {
      console.log("Starting to build tables...");
      // create all tables, in the correct order

      try {
        // users table
        console.log("creating users");
        await client.query(`
        CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        admin BOOLEAN DEFAULT 'false',
        gm varchar(255) UNIQUE NOT NULL
      );
    `);

        console.log("finished user table");

        console.log("Finished building tables");
      } catch (error) {
        console.log(error);
        console.error("Error building tables");
      }
    }

    await dropTables();
    await createTables();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function populateInitialData() {
  try {
    console.log("Populating user data");
    createInitialUsers();

    console.log("Finished populating user data");

    await createInitialUsers();
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
