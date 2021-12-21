module.exports = (sequelize, Sequelize) =>{
    const TegsBook = sequelize.define("tegs_book", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }
    })
    TegsBook.sync().then(() => {
      console.log('table TegsBook created')
    })
    return TegsBook
  }
  //{force: true}
    