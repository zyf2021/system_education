module.exports = (sequelize, Sequelize) =>{
    const Books = sequelize.define("books", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
            type: Sequelize.STRING
          },
      number_page: {
            type: Sequelize.STRING
          },
      year: {
            type: Sequelize.INTEGER
          }
    })
    Books.sync().then(() => {
      console.log('table Books created')
    })
    return Books
  }
  //{force: true}
    