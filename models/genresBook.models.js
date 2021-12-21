module.exports = (sequelize, Sequelize) =>{
    const GenresBook = sequelize.define("genres_book", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }
    })
    GenresBook.sync().then(() => {
      console.log('table GenresBook created')
    })
    return GenresBook
  }
  //{force: true}
    