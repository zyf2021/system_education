module.exports = (sequelize, Sequelize) =>{
    const RaitingsBook = sequelize.define("raitings_book", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
            type: Sequelize.STRING,
            unique:true
          },
       cell: {
           type: Sequelize.INTEGER,
           unique:true
       }
    })
    RaitingsBook.sync().then(() => {
      console.log('table RaitingsBook created')
    })
    return RaitingsBook
  }
  //{force: true}