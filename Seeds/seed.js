const sequelize = require('../config/connection');
const { User, Gear, Category, Borrow } = require('../Models');

const userData = require('./userData.json');
const categoryData = require('./categoryData.json');
const gearData = require('./gearData.json');
const borrowData = require('./borrowData.json');

//MUST SET FORCE TO FALSE AFTER DB SEEDED...
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const categories = await Category.bulkCreate(categoryData, {
        returning: true,
    });

    const gear = await Gear.bulkCreate(gearData, {
        returning: true,
    });

    const borrow = await Borrow.bulkCreate(borrowData, {
      returning: true,
    });

  process.exit(0);
};

seedDatabase();