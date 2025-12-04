export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Books', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  })
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Books')
}
