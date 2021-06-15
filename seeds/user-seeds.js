const { Users, Cities } = require('../models');

const userData = [
    {
      "id": 1,
      "user_name": "Bobby",
      "email": "bobby@gmail.com",
      "password": "$2b$15$uXTW/ts5uj5fKYpcIR8bD.G69cgwECJVwaXO7b3GFhVHtdD2pb1DG"
    },
    {
      "id": 2,
      "user_name": "Frank",
      "email": "frank@gmail.com",
      "password": "$2b$15$7DFBD3xpAJKwkPjgiG.hR.FCBi07WOz7hbc82oLk88wt/vHCtSeHW"
    },
    {
      "id": 8,
      "user_name": "Stephanie",
      "email": "stephanie@gmail.com",
      "password": "$2b$15$blwyHfxC/vRwxk4jO/eSOee6L9Ovobda4dHb8.sRjgqFNGiG0QatC"
    },
  ];
  const seedUsers = () => Cities.bulkCreate(userData);

  module.exports = seedUsers;
