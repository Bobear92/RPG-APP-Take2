
const {createUser} = require("./users");



 async function createInitialUsers() {
    console.log("Starting to create users...");
    try {
      const usersToCreate = [
        {
          username: "Admin",
          password: "12345678",
          admin: true,
          gm: "AdminGm",
        },
        {
          username: "testPlayer1",
          password: "12345678",
          admin: false,
          gm: "testPlayer1Gm",
        },
        {
          username: "testPlayer2",
          password: "12345678",
          admin: false,
          gm: "testPlayer2Gm",
        },
      ];

      const users = await Promise.all(usersToCreate.map(createUser));

      console.log("Users created:");
      console.log(users, "users");
      console.log("Finished creating users!");
    } catch (error) {
      console.error("Error creating users!");
      throw error;
    }
  }

  module.exports = {
   createInitialUsers
  };