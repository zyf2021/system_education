module.exports = (sequelize, Sequelize) =>{
    const TypesEvent = sequelize.define("types_event", {
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
    TypesEvent.sync().then(() => {
      console.log('table TypesEvent created')
    })
    return TypesEvent
  }
  //{force: true}