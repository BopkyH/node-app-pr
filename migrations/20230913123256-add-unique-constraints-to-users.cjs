'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Users', {
      fields: ['name'],
      type: 'unique',
      name: 'unique_name_constraint'
    });

    await queryInterface.addConstraint('Users', {
      fields: ['email'],
      type: 'unique',
      name: 'unique_email_constraint'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Users', 'unique_name_constraint');
    await queryInterface.removeConstraint('Users', 'unique_email_constraint');
  }
};
