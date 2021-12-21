module.exports = (sequelize, Sequelize) =>{
    const Settings = sequelize.define("settings", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      type_font: {
            type: Sequelize.STRING,
            unique:true
          },
       background_color: {
           type:Sequelize.STRING
       }   
    })
    Settings.sync().then(() => {
      console.log('table Settings created')
    })
    return Settings
  }
  //{force: true}