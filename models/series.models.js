module.exports = (sequelize, Sequelize) =>{
    const SeriesBooks = sequelize.define("series_books", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
            type: Sequelize.STRING,
            unique:true
          }
    })
    SeriesBooks.sync().then(() => {
      console.log('table SeriesBooks created')
    })
    return SeriesBooks
  }
  //{force: true}