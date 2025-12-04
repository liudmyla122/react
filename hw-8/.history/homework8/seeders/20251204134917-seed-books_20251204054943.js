module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Books', [
      {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        year: 1937,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        year: 1997,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Books', null, {})
  },
}
