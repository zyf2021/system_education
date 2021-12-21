module.exports = (sequelize, Sequelize) =>{
    const ReadBooksUser = sequelize.define("read_books_user", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      date_read: {
            type: Sequelize.DATE,
          }
    })
    ReadBooksUser.sync().then(() => {
      console.log('table ReadBooksUser created')
    })
    return ReadBooksUser
  }
  //{force: true}