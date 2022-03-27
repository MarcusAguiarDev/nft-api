
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('user', [{
      username: 'admin',
      password: 123
    }], {});
  },

  async down(queryInterface, Sequelize) {
    const op = Sequelize.Op
    const usernames = ['admin']
     await queryInterface.bulkDelete('user', {username: {[op.in]: [usernames]} }, {});
  }
};
