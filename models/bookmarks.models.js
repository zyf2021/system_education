module.exports = (sequelize, Sequelize) =>{
    const Bookmarks = sequelize.define("bookmarks", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      number_page: {
            type: Sequelize.INTEGER
          },
      date_set: {
            type: Sequelize.DATE
          }
    })
    Bookmarks.sync().then(() => {
      console.log('table Bookmarks created')
    })
    return Bookmarks
  }
  //{force: true}
    