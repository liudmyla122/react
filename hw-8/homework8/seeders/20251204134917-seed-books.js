export async function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert('Books', [
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      year: 1937,
    },
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      year: 1997,
    },
  ])
}

export async function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Books', null, {})
}
