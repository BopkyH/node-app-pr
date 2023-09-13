const up = async (queryInterface, Sequelize) => {
  const users = [];

  for (let i = 1; i <= 50; i++) {
    users.push({
      name: `User${i}`,
      email: `user${i}@example.com`,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  return queryInterface.bulkInsert('Users', users, {});
};

const down = async (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Users', null, {});
};

module.exports = { up, down };
