module.exports = (sequelize, Sequelize) =>{
    const ThemesDocs = sequelize.define("themes_docs", {
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
    ThemesDocs.sync().then(() => {
      console.log('table ThemesDocs created')
    })
    return ThemesDocs
  }
  //{force: true}