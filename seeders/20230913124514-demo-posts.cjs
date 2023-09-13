const up = async (queryInterface, Sequelize) => {
  const posts = [];

  for (let userId = 1; userId <= 50; userId++) {
    const numberOfPosts = Math.floor(Math.random() * 2) + 2; // generate number from 2 to 3

    for (let j = 1; j <= numberOfPosts; j++) {
      posts.push({
        title: `Post ${j} of User ${userId}`,
        content: `Content ${j} of User ${userId}`,
        userId: userId,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  }

  return queryInterface.bulkInsert('Posts', posts, {});
};

const down = async (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Posts', null, {});
};

module.exports = { up, down };
