'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
    .createTable('burgers', {
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      burger_name: Sequelize.STRING,
      devoured: Sequelize.BOOLEAN,
      created_at: Sequelize.DATE
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
    .dropTable('burgers');
  }
};
