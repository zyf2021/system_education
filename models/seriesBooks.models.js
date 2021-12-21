module.exports = (sequelize, Sequelize) =>{
    const SeriesBook = sequelize.define("series_book", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }
    })
    SeriesBook.sync().then(() => {
      console.log('table SeriesBook created')
    })
    return SeriesBook
  }
  //{force: true}
    