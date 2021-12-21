module.exports = (sequelize, Sequelize) =>{
    const Events = sequelize.define("events", {
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
      description:{
            type: Sequelize.TEXT
      },
      file: {
            type: Sequelize.BLOB
          }
    })
    Events.sync().then(() => {
      console.log('table Events created')
    })
    return Events
  }
  //{force: true}
    