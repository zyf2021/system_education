module.exports = (sequelize, Sequelize) =>{
    const StatusesEvent = sequelize.define("statuses_event", {
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
    StatusesEvent.sync().then(() => {
      console.log('table StatusesEvent created')
    })
    return StatusesEvent
  }
  //{force: true}