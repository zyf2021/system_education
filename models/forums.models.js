module.exports = (sequelize, Sequelize) =>{
    const Forums = sequelize.define("forums", {
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
      theme: {
            type: Sequelize.STRING
          }
    })
    Forums.sync().then(() => {
      console.log('table Forums created')
    })
    return Forums
  }
  //{force: true}
    