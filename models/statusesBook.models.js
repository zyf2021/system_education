module.exports = (sequelize, Sequelize) =>{
    const StatusesBook = sequelize.define("statuses_book", {
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
    StatusesBook.sync().then(() => {
      console.log('table StatusesBook created')
    })
    return StatusesBook
  }
  //{force: true}