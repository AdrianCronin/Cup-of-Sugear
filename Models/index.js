const User = require('./User');
const Category = require('./Category');
const Gear = require('./Gear');
const Borrow = require('./Borrow');

//join user to gear
User.hasMany(Gear, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Gear.belongsTo(User, {
    foreignKey: 'user_id'
});


//join category to gear
Category.hasMany(Gear, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL',
  });
Gear.belongsTo(Category, {
    foreignKey: 'category_id',
  });


  //Borrow table is join table between user and gear (many:many)
  User.belongsToMany(Gear, {
    // Define the third table needed to store the foreign keys
    through: Borrow
  });
  Gear.belongsToMany(User, {
    // Define the third table needed to store the foreign keys
    through: Borrow
  });

module.exports = { User, Category, Gear, Borrow };