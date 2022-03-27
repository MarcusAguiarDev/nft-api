module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey:true
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        unique: true
      },
      password: {
        type: Sequelize.DataTypes.STRING
      },
      created_at: Sequelize.DataTypes.DATE,
      updated_at: Sequelize.DataTypes.DATE
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user')
  }
};
