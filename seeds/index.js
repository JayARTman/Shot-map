const seedCities = require('./cities-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedCities();

    process.exit(0);
}

seedAll();