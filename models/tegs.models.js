module.exports = (sequelize, Sequelize) =>{
    const Tegs = sequelize.define("tegs", {
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
 Tegs.sync().then(() => {
      console.log('table Tegs created')
    })
    return Tegs
  }
  //{force: true}